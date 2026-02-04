#!/bin/bash
#===============================================================================
# Render Episode from Config
#===============================================================================
# Reads episode timeline from JSON config and renders using FFmpeg.
# The config format mirrors the Remotion composition structure.
#
# Usage:
#   ./scripts/render-from-config.sh <episode>
#   ./scripts/render-from-config.sh ep01
#   ./scripts/render-from-config.sh ep03
#
# Requirements:
#   - jq (for JSON parsing)
#   - Node.js with Remotion
#   - FFmpeg with VideoToolbox (macOS)
#===============================================================================

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CONFIG_DIR="$PROJECT_DIR/scripts/episode-config"
VIDEO_DIR="$PROJECT_DIR/public/footage"
OUTPUT_DIR="/Volumes/ENDY1TB/Video Production/seri-programming-fundamental/rendered"

cd "$PROJECT_DIR"

#-------------------------------------------------------------------------------
# Check dependencies
#-------------------------------------------------------------------------------
check_deps() {
    local missing=()
    command -v jq &>/dev/null || missing+=("jq")
    command -v npx &>/dev/null || missing+=("npx/node")
    command -v ffmpeg &>/dev/null || missing+=("ffmpeg")

    if [ ${#missing[@]} -gt 0 ]; then
        echo "ERROR: Missing dependencies: ${missing[*]}"
        exit 1
    fi

    if [ ! -d "$VIDEO_DIR" ]; then
        echo "ERROR: Video directory not found: $VIDEO_DIR"
        exit 1
    fi
}

#-------------------------------------------------------------------------------
# Get encoder settings
#-------------------------------------------------------------------------------
get_encoder() {
    if ffmpeg -hide_banner -encoders 2>/dev/null | grep -q hevc_videotoolbox; then
        echo "hevc_videotoolbox"
    else
        echo "libx265"
    fi
}

get_encoder_opts() {
    if [ "$1" = "hevc_videotoolbox" ]; then
        echo "-q:v 65"
    else
        echo "-crf 23 -preset medium"
    fi
}

#-------------------------------------------------------------------------------
# Hide/restore footage folder to speed up Remotion bundling
# Overlays don't need footage, so we temporarily hide it
#-------------------------------------------------------------------------------
FOOTAGE_DIR="$PROJECT_DIR/public/footage"
FOOTAGE_HIDDEN="$PROJECT_DIR/.footage-hidden"

hide_footage() {
    if [ -d "$FOOTAGE_DIR" ] && [ ! -d "$FOOTAGE_HIDDEN" ]; then
        mv "$FOOTAGE_DIR" "$FOOTAGE_HIDDEN"
    fi
}

restore_footage() {
    if [ -d "$FOOTAGE_HIDDEN" ] && [ ! -d "$FOOTAGE_DIR" ]; then
        mv "$FOOTAGE_HIDDEN" "$FOOTAGE_DIR"
    fi
}

# Ensure footage is restored on script exit
trap restore_footage EXIT

#-------------------------------------------------------------------------------
# Render Remotion composition
#-------------------------------------------------------------------------------
render_composition() {
    local comp_id=$1
    local output=$2
    local type=$3  # "solid" or "transparent"

    if [ -f "$output" ]; then
        echo "    [skip] $(basename "$output")"
        return
    fi

    echo "    [render] $comp_id"

    # Hide footage to speed up bundling
    hide_footage

    if [ "$type" = "transparent" ]; then
        npx remotion render src/index.ts "$comp_id" "$output" \
            --codec prores \
            --prores-profile 4444 \
            --image-format png \
            --pixel-format yuva444p10le \
            2>&1 | grep -E "^\[" | tail -1 || true
    else
        npx remotion render src/index.ts "$comp_id" "$output" \
            --codec prores \
            --prores-profile 4444 \
            2>&1 | grep -E "^\[" | tail -1 || true
    fi

    # Restore footage after rendering
    restore_footage
}

#-------------------------------------------------------------------------------
# Render Remotion still (single frame PNG)
#-------------------------------------------------------------------------------
render_still() {
    local comp_id=$1
    local output=$2

    if [ -f "$output" ]; then
        echo "    [skip] $(basename "$output")"
        return
    fi

    echo "    [render] $comp_id (still)"

    # Hide footage to speed up bundling
    hide_footage

    npx remotion still src/index.ts "$comp_id" "$output" \
        --image-format png \
        2>&1 | grep -E "^\[" | tail -1 || true

    # Restore footage after rendering
    restore_footage
}

#-------------------------------------------------------------------------------
# Main render function
#-------------------------------------------------------------------------------
render_episode() {
    local config_file=$1
    local episode_id=$(jq -r '.id' "$config_file")
    local title=$(jq -r '.title' "$config_file")
    local fps=$(jq -r '.fps' "$config_file")

    echo "=== Rendering: $title ==="

    local OVERLAY_DIR="$OUTPUT_DIR/overlays-$episode_id"
    local TEMP_DIR="$OUTPUT_DIR/temp-$episode_id"
    local ENCODER=$(get_encoder)
    local ENCODER_OPTS=$(get_encoder_opts "$ENCODER")

    mkdir -p "$OVERLAY_DIR" "$TEMP_DIR"

    echo "Encoder: $ENCODER"

    # Get paths
    local camera_path="$VIDEO_DIR/$(jq -r '.mainContent.camera' "$config_file")"
    local intro_comp=$(jq -r '.intro.composition' "$config_file")
    local outro_comp=$(jq -r '.outro.composition' "$config_file")
    local output_name=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')
    local OUTPUT="$OUTPUT_DIR/pf-$episode_id-$output_name.mp4"

    #---------------------------------------------------------------------------
    # Step 1: Render overlays
    #---------------------------------------------------------------------------
    echo ""
    echo "Step 1: Rendering Remotion overlays..."

    # Intro/Outro
    render_composition "$intro_comp" "$OVERLAY_DIR/intro.mov" "solid"
    render_composition "$outro_comp" "$OVERLAY_DIR/outro.mov" "solid"

    # Main content overlays
    local overlay_count=$(jq '.mainContent.overlays | length' "$config_file")
    for i in $(seq 0 $((overlay_count - 1))); do
        local comp=$(jq -r ".mainContent.overlays[$i].composition" "$config_file")
        local type=$(jq -r ".mainContent.overlays[$i].type" "$config_file")
        local filename=$(echo "$comp" | tr '[:upper:]' '[:lower:]').mov
        render_composition "$comp" "$OVERLAY_DIR/$filename" "$type"
    done

    #---------------------------------------------------------------------------
    # Step 2: Encode intro
    #---------------------------------------------------------------------------
    echo ""
    echo "Step 2: Encoding intro..."
    ffmpeg -y -i "$OVERLAY_DIR/intro.mov" \
        -c:v $ENCODER $ENCODER_OPTS -pix_fmt yuv420p -r $fps \
        "$TEMP_DIR/01-intro.mp4" 2>/dev/null

    #---------------------------------------------------------------------------
    # Step 3: Build FFmpeg filter for main content
    #---------------------------------------------------------------------------
    echo ""
    echo "Step 3: Compositing main content..."

    # Build input list and filter_complex dynamically
    local inputs="-i \"$camera_path\""
    local filter="[0:v]fps=$fps[main];"
    local chain="[main]"
    local input_idx=1

    for i in $(seq 0 $((overlay_count - 1))); do
        local comp=$(jq -r ".mainContent.overlays[$i].composition" "$config_file")
        local start_frame=$(jq -r ".mainContent.overlays[$i].startFrame" "$config_file")
        local type=$(jq -r ".mainContent.overlays[$i].type" "$config_file")
        local filename=$(echo "$comp" | tr '[:upper:]' '[:lower:]').mov
        local start_sec=$(echo "scale=3; $start_frame / $fps" | bc)

        inputs="$inputs -i \"$OVERLAY_DIR/$filename\""

        if [ "$type" = "transparent" ]; then
            filter="${filter}[$input_idx:v]format=rgba,setpts=PTS+${start_sec}/TB[ov$i];"
        else
            filter="${filter}[$input_idx:v]fps=$fps,setpts=PTS+${start_sec}/TB[ov$i];"
        fi

        filter="${filter}${chain}[ov$i]overlay=eof_action=pass[v$i];"
        chain="[v$i]"
        input_idx=$((input_idx + 1))
    done

    # Remove trailing semicolon and rename final output
    filter="${filter%;}"
    filter=$(echo "$filter" | sed "s/\[v$((overlay_count-1))\]$/[vout]/")

    # Execute FFmpeg
    eval ffmpeg -y $inputs \
        -filter_complex "\"$filter\"" \
        -map '"[vout]"' -map '0:a' \
        -c:v $ENCODER $ENCODER_OPTS -c:a aac -b:a 192k -r $fps \
        "\"$TEMP_DIR/02-main.mp4\"" 2>&1 | grep -E "^frame=" | tail -1 || true

    #---------------------------------------------------------------------------
    # Step 4: Encode outro
    #---------------------------------------------------------------------------
    echo ""
    echo "Step 4: Encoding outro..."
    ffmpeg -y -i "$OVERLAY_DIR/outro.mov" \
        -c:v $ENCODER $ENCODER_OPTS -pix_fmt yuv420p -r $fps \
        "$TEMP_DIR/03-outro.mp4" 2>/dev/null

    #---------------------------------------------------------------------------
    # Step 5: Concatenate
    #---------------------------------------------------------------------------
    echo ""
    echo "Step 5: Concatenating final video..."
    cat > "$TEMP_DIR/concat.txt" << EOF
file '01-intro.mp4'
file '02-main.mp4'
file '03-outro.mp4'
EOF
    ffmpeg -y -f concat -safe 0 -i "$TEMP_DIR/concat.txt" -c copy "$OUTPUT" 2>/dev/null

    # Cleanup
    rm -rf "$TEMP_DIR"

    echo ""
    echo "Done: $OUTPUT"
    ls -lh "$OUTPUT"
}

#-------------------------------------------------------------------------------
# Segments-based Render (generic for camera + screen + PIP episodes)
#-------------------------------------------------------------------------------
# Handles configs with "segments" array containing:
#   - camera: camera-only footage
#   - composition: Remotion composition (intro/outro/bumper)
#   - screen-with-pip: screen recording with camera PIP overlay
#   - camera-with-overlays: camera with B-roll overlays
#-------------------------------------------------------------------------------
render_segments() {
    local config_file=$1
    local episode_id=$(jq -r '.id' "$config_file")
    local title=$(jq -r '.title' "$config_file")
    local fps=$(jq -r '.fps' "$config_file")

    echo "=== Rendering: $title ==="

    local OVERLAY_DIR="$OUTPUT_DIR/overlays-$episode_id"
    local TEMP_DIR="$OUTPUT_DIR/temp-$episode_id"
    local ENCODER=$(get_encoder)
    local ENCODER_OPTS=$(get_encoder_opts "$ENCODER")
    local output_name=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')
    local OUTPUT="$OUTPUT_DIR/pf-$episode_id-$output_name.mp4"

    mkdir -p "$OVERLAY_DIR" "$TEMP_DIR"

    echo "Encoder: $ENCODER"

    # Render PIP frame once
    render_still "PipFrame" "$OVERLAY_DIR/pip-frame.png"
    local PIP_FRAME="$OVERLAY_DIR/pip-frame.png"

    #---------------------------------------------------------------------------
    # Step 1: Process each segment
    #---------------------------------------------------------------------------
    local segment_count=$(jq '.segments | length' "$config_file")
    local segment_files=""
    local step=1

    for i in $(seq 0 $((segment_count - 1))); do
        local seg_id=$(jq -r ".segments[$i].id" "$config_file")
        local seg_type=$(jq -r ".segments[$i].type" "$config_file")
        local seg_comment=$(jq -r ".segments[$i].comment // empty" "$config_file")
        local output_file=$(printf "%02d-%s.mp4" $step "$seg_id")

        echo ""
        echo "Step $step: $seg_id ($seg_type)"
        [ -n "$seg_comment" ] && echo "    $seg_comment"

        case "$seg_type" in
            camera)
                # Camera-only segment
                local source=$(jq -r ".segments[$i].source" "$config_file")
                local source_path="$VIDEO_DIR/$(jq -r ".sources.$source" "$config_file")"
                local start_time=$(jq -r ".segments[$i].startTime" "$config_file")
                local end_time=$(jq -r ".segments[$i].endTime" "$config_file")
                local duration=$(echo "$end_time - $start_time" | bc)

                # Check for overlays
                local overlay_count=$(jq ".segments[$i].overlays | length // 0" "$config_file")

                if [ "$overlay_count" -gt 0 ]; then
                    # Render overlays first
                    local inputs="-ss $start_time -i \"$source_path\""
                    local filter="[0:v]fps=$fps,setpts=PTS-STARTPTS[main];"
                    local chain="[main]"
                    local input_idx=1

                    for j in $(seq 0 $((overlay_count - 1))); do
                        local comp=$(jq -r ".segments[$i].overlays[$j].composition" "$config_file")
                        local ov_type=$(jq -r ".segments[$i].overlays[$j].type" "$config_file")
                        local start_frame=$(jq -r ".segments[$i].overlays[$j].startFrame" "$config_file")
                        local start_sec=$(echo "scale=3; $start_frame / $fps" | bc)
                        local ov_file="$OVERLAY_DIR/$(echo "$comp" | tr '[:upper:]' '[:lower:]').mov"

                        render_composition "$comp" "$ov_file" "$ov_type"

                        inputs="$inputs -i \"$ov_file\""
                        if [ "$ov_type" = "transparent" ]; then
                            filter="${filter}[$input_idx:v]format=rgba,setpts=PTS+${start_sec}/TB[ov$j];"
                        else
                            filter="${filter}[$input_idx:v]fps=$fps,setpts=PTS+${start_sec}/TB[ov$j];"
                        fi
                        filter="${filter}${chain}[ov$j]overlay=eof_action=pass[v$j];"
                        chain="[v$j]"
                        input_idx=$((input_idx + 1))
                    done

                    filter="${filter%;}"
                    filter=$(echo "$filter" | sed "s/\[v$((overlay_count-1))\]$/[vout]/")

                    eval ffmpeg -y $inputs \
                        -filter_complex "\"$filter\"" \
                        -map '"[vout]"' -map '0:a' \
                        -t $duration \
                        -c:v $ENCODER $ENCODER_OPTS -c:a aac -b:a 192k -r $fps \
                        "\"$TEMP_DIR/$output_file\"" 2>&1 | grep -E "^frame=" | tail -1 || true
                else
                    # Simple camera segment
                    ffmpeg -y -ss $start_time -i "$source_path" \
                        -t $duration \
                        -c:v $ENCODER $ENCODER_OPTS -c:a aac -b:a 192k -r $fps \
                        "$TEMP_DIR/$output_file" 2>&1 | grep -E "^frame=" | tail -1 || true
                fi
                segment_files="$segment_files$output_file\n"
                step=$((step + 1))
                ;;

            composition)
                # Remotion composition (intro/outro)
                local comp=$(jq -r ".segments[$i].composition" "$config_file")
                local comp_file="$OVERLAY_DIR/$(echo "$comp" | tr '[:upper:]' '[:lower:]').mov"

                render_composition "$comp" "$comp_file" "solid"

                ffmpeg -y -i "$comp_file" \
                    -c:v $ENCODER $ENCODER_OPTS -pix_fmt yuv420p -r $fps \
                    "$TEMP_DIR/$output_file" 2>/dev/null

                segment_files="$segment_files$output_file\n"
                step=$((step + 1))
                ;;

            screen-with-pip)
                # Screen recording with camera PIP
                local screen_source=$(jq -r ".segments[$i].screen" "$config_file")
                local camera_source=$(jq -r ".segments[$i].camera" "$config_file")
                local screen_path="$VIDEO_DIR/$(jq -r ".sources.$screen_source" "$config_file")"
                local camera_path="$VIDEO_DIR/$(jq -r ".sources.$camera_source" "$config_file")"
                local cam_start=$(jq -r ".segments[$i].cameraStartTime" "$config_file")
                local screen_start=$(jq -r ".segments[$i].screenStartTime" "$config_file")
                local duration=$(jq -r ".segments[$i].duration // empty" "$config_file")

                # Check for overlays (B-roll)
                local overlay_count=$(jq ".segments[$i].overlays | length // 0" "$config_file")
                local overlay_inputs=""
                local overlay_filter=""
                local input_idx=3  # 0=camera, 1=screen, 2=pip-frame

                if [ "$overlay_count" -gt 0 ]; then
                    for j in $(seq 0 $((overlay_count - 1))); do
                        local comp=$(jq -r ".segments[$i].overlays[$j].composition" "$config_file")
                        local ov_type=$(jq -r ".segments[$i].overlays[$j].type" "$config_file")
                        local start_frame=$(jq -r ".segments[$i].overlays[$j].startFrame" "$config_file")
                        # Adjust start_frame relative to segment start (cam_start)
                        local rel_start_frame=$((start_frame - $(echo "$cam_start * $fps" | bc | cut -d. -f1)))
                        local start_sec=$(echo "scale=3; $rel_start_frame / $fps" | bc)
                        local ov_file="$OVERLAY_DIR/$(echo "$comp" | tr '[:upper:]' '[:lower:]').mov"

                        render_composition "$comp" "$ov_file" "$ov_type"

                        overlay_inputs="$overlay_inputs -i \"$ov_file\""
                        if [ "$ov_type" = "solid" ]; then
                            overlay_filter="${overlay_filter}[$input_idx:v]fps=$fps,setpts=PTS+${start_sec}/TB[broll$j];"
                        else
                            overlay_filter="${overlay_filter}[$input_idx:v]format=rgba,setpts=PTS+${start_sec}/TB[broll$j];"
                        fi
                        input_idx=$((input_idx + 1))
                    done
                fi

                local duration_opt=""
                [ -n "$duration" ] && [ "$duration" != "null" ] && duration_opt="-t $duration"

                # Build overlay chain for B-roll
                local broll_chain="[composite]"
                local broll_overlay=""
                if [ "$overlay_count" -gt 0 ]; then
                    for j in $(seq 0 $((overlay_count - 1))); do
                        broll_overlay="${broll_overlay}${broll_chain}[broll$j]overlay=eof_action=pass[comp$j];"
                        broll_chain="[comp$j]"
                    done
                    broll_overlay="${broll_overlay%;}"
                    broll_overlay=$(echo "$broll_overlay" | sed "s/\[comp$((overlay_count-1))\]$/[vout]/")
                else
                    broll_overlay="[composite]copy[vout]"
                fi

                eval ffmpeg -y \
                    -ss $cam_start -i "\"$camera_path\"" \
                    -ss $screen_start -i "\"$screen_path\"" \
                    -i "\"$PIP_FRAME\"" \
                    $overlay_inputs \
                    -filter_complex "\"
                        [1:v]fps=$fps,setpts=PTS-STARTPTS,scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=#1a1a2e[screen];
                        [0:v]fps=$fps,setpts=PTS-STARTPTS,scale=320:240:force_original_aspect_ratio=increase,crop=320:240[cam];
                        [cam][2:v]overlay=0:0[pip];
                        [screen][pip]overlay=W-w-40:H-h-40[composite];
                        $overlay_filter
                        $broll_overlay
                    \"" \
                    -map '"[vout]"' -map '0:a' \
                    $duration_opt \
                    -c:v $ENCODER $ENCODER_OPTS -c:a aac -b:a 192k -r $fps \
                    "\"$TEMP_DIR/$output_file\"" 2>&1 | grep -E "^frame=" | tail -1 || true

                segment_files="$segment_files$output_file\n"
                step=$((step + 1))
                ;;

            skip)
                # Skip segment (dead time) - no output file
                echo "    Skipping dead time"
                ;;

            *)
                echo "    WARNING: Unknown segment type: $seg_type"
                ;;
        esac
    done

    #---------------------------------------------------------------------------
    # Final: Concatenate all segments
    #---------------------------------------------------------------------------
    echo ""
    echo "Final: Concatenating all segments..."

    # Build concat file
    echo -e "$segment_files" | while read f; do
        [ -n "$f" ] && echo "file '$f'"
    done > "$TEMP_DIR/concat.txt"

    ffmpeg -y -f concat -safe 0 -i "$TEMP_DIR/concat.txt" -c copy "$OUTPUT" 2>/dev/null

    # Cleanup
    rm -rf "$TEMP_DIR"

    echo ""
    echo "Done: $OUTPUT"
    ls -lh "$OUTPUT"
}

#-------------------------------------------------------------------------------
# Detect config type and choose render function
#-------------------------------------------------------------------------------
render_auto() {
    local config_file=$1

    # Check if config has "segments" array (new format) or "mainContent" (old format)
    if jq -e '.segments' "$config_file" > /dev/null 2>&1; then
        render_segments "$config_file"
    elif jq -e '.mainContent' "$config_file" > /dev/null 2>&1; then
        render_episode "$config_file"
    else
        echo "ERROR: Invalid config format. Must have 'segments' or 'mainContent'."
        exit 1
    fi
}

#-------------------------------------------------------------------------------
# Main
#-------------------------------------------------------------------------------
check_deps

case "${1:-help}" in
    help|--help|-h)
        echo "Usage: $0 <episode>"
        echo ""
        echo "Episodes with config files:"
        ls -1 "$CONFIG_DIR"/*.json 2>/dev/null | xargs -I{} basename {} .json | sed 's/^/  /'
        ;;
    *)
        if [ -f "$CONFIG_DIR/$1.json" ]; then
            render_auto "$CONFIG_DIR/$1.json"
        else
            echo "ERROR: No config file found for: $1"
            echo "Available configs:"
            ls -1 "$CONFIG_DIR"/*.json 2>/dev/null | xargs -I{} basename {} .json | sed 's/^/  /'
            exit 1
        fi
        ;;
esac
