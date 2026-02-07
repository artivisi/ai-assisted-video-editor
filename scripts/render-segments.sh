#!/bin/bash
#===============================================================================
# Render in Segments
#===============================================================================
# Renders long videos in smaller segments to avoid memory crashes.
# Each segment is rendered separately, then concatenated with FFmpeg.
#
# Usage:
#   ./scripts/render-segments.sh <composition-id> [output-file] [segment-size]
#   ./scripts/render-segments.sh PF05-Full rendered/ep05.mp4 5000
#
# Resume interrupted render:
#   RESUME_DIR=rendered/segments-XXXXX ./scripts/render-segments.sh PF06-Full rendered/ep06.mp4 5000
#
# Default segment size: 5000 frames (~2.7 minutes at 30fps)
#===============================================================================

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

# Arguments
COMPOSITION_ID="${1:-PF05-Full}"
OUTPUT_FILE="${2:-rendered/${COMPOSITION_ID}.mp4}"
SEGMENT_SIZE="${3:-5000}"

# Configuration
FOOTAGE_PORT="${FOOTAGE_PORT:-3333}"
FOOTAGE_DIR="$PROJECT_DIR/public/footage"
FOOTAGE_URL="http://localhost:$FOOTAGE_PORT"
# Support resuming from an existing segments directory
if [ -n "$RESUME_DIR" ]; then
    SEGMENTS_DIR="$PROJECT_DIR/$RESUME_DIR"
    log "Resuming from existing segments dir: $SEGMENTS_DIR"
else
    SEGMENTS_DIR="$PROJECT_DIR/rendered/segments-$$"
fi
EMPTY_PUBLIC_DIR="/tmp/remotion-empty-public-$$"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log() { echo -e "${GREEN}[render]${NC} $1"; }
warn() { echo -e "${YELLOW}[warn]${NC} $1"; }
error() { echo -e "${RED}[error]${NC} $1"; exit 1; }

#-------------------------------------------------------------------------------
# Cleanup function
#-------------------------------------------------------------------------------
cleanup() {
    log "Cleaning up..."
    [ -n "$SERVER_PID" ] && kill $SERVER_PID 2>/dev/null || true
    rm -rf "$EMPTY_PUBLIC_DIR"
    # Keep segments dir for debugging if render fails
}
trap cleanup EXIT

#-------------------------------------------------------------------------------
# Start HTTP server
#-------------------------------------------------------------------------------
log "Starting HTTP server on port $FOOTAGE_PORT..."
lsof -ti:$FOOTAGE_PORT | xargs kill -9 2>/dev/null || true
npx serve "$FOOTAGE_DIR" -p $FOOTAGE_PORT --cors -L &
SERVER_PID=$!

for i in {1..30}; do
    curl -s "$FOOTAGE_URL" > /dev/null 2>&1 && break
    sleep 0.5
done
curl -s "$FOOTAGE_URL" > /dev/null 2>&1 || error "Server failed to start"
log "Server ready at $FOOTAGE_URL"

#-------------------------------------------------------------------------------
# Get total frames
#-------------------------------------------------------------------------------
mkdir -p "$EMPTY_PUBLIC_DIR" "$SEGMENTS_DIR"

# Frame counts for known compositions (avoid bundling just to get frame count)
# Using case statement for POSIX compatibility (zsh doesn't support declare -A)
case "$COMPOSITION_ID" in
    "PF06-Full") TOTAL_FRAMES=45737 ;;
    "PF05-Full") TOTAL_FRAMES=47220 ;;
    "PF04-Full") TOTAL_FRAMES=34000 ;;
    *) TOTAL_FRAMES="" ;;
esac

if [ -n "$TOTAL_FRAMES" ]; then
    log "Using known frame count for $COMPOSITION_ID"
else
    log "Getting composition info (this requires bundling)..."
    TOTAL_FRAMES=$(REMOTION_FOOTAGE_URL="$FOOTAGE_URL" npx remotion compositions src/index.ts \
        --public-dir="$EMPTY_PUBLIC_DIR" 2>/dev/null | grep "^$COMPOSITION_ID" | awk '{print $4}')
fi

if [ -z "$TOTAL_FRAMES" ] || [ "$TOTAL_FRAMES" -lt 1 ] 2>/dev/null; then
    error "Could not get frame count for $COMPOSITION_ID. Pass it as 4th argument: ./render-segments.sh COMP output.mp4 5000 47220"
fi

log "Total frames: $TOTAL_FRAMES"
log "Segment size: $SEGMENT_SIZE frames"

#-------------------------------------------------------------------------------
# Render segments
#-------------------------------------------------------------------------------
SEGMENT_NUM=0
START_FRAME=0

while [ $START_FRAME -lt $TOTAL_FRAMES ]; do
    END_FRAME=$((START_FRAME + SEGMENT_SIZE - 1))
    [ $END_FRAME -ge $TOTAL_FRAMES ] && END_FRAME=$((TOTAL_FRAMES - 1))

    SEGMENT_FILE="$SEGMENTS_DIR/segment-$(printf '%03d' $SEGMENT_NUM).mp4"
    SEGMENT_NUM=$((SEGMENT_NUM + 1))

    # Skip already-rendered segments (for resume support)
    if [ -f "$SEGMENT_FILE" ]; then
        log "Segment $SEGMENT_NUM already exists ($(ls -lh "$SEGMENT_FILE" | awk '{print $5}')), skipping"
        START_FRAME=$((END_FRAME + 1))
        continue
    fi

    log "Rendering segment $SEGMENT_NUM: frames $START_FRAME-$END_FRAME"

    REMOTION_FOOTAGE_URL="$FOOTAGE_URL" npx remotion render \
        src/index.ts \
        "$COMPOSITION_ID" \
        "$SEGMENT_FILE" \
        --public-dir="$EMPTY_PUBLIC_DIR" \
        --frames="$START_FRAME-$END_FRAME" \
        --concurrency=1 \
        --offthread-video-cache-size-in-bytes=4294967296 \
        2>&1 | grep -E "Rendered|Bundling|error" || true

    if [ ! -f "$SEGMENT_FILE" ]; then
        error "Segment $SEGMENT_NUM failed to render"
    fi

    log "Segment $SEGMENT_NUM complete: $(ls -lh "$SEGMENT_FILE" | awk '{print $5}')"

    START_FRAME=$((END_FRAME + 1))
done

#-------------------------------------------------------------------------------
# Concatenate segments
#-------------------------------------------------------------------------------
log "Concatenating $SEGMENT_NUM segments..."

CONCAT_FILE="$SEGMENTS_DIR/concat.txt"
> "$CONCAT_FILE"
for f in "$SEGMENTS_DIR"/segment-*.mp4; do
    echo "file '$(basename "$f")'" >> "$CONCAT_FILE"
done

mkdir -p "$(dirname "$OUTPUT_FILE")"
ffmpeg -y -f concat -safe 0 -i "$CONCAT_FILE" -c copy "$OUTPUT_FILE" 2>/dev/null

if [ -f "$OUTPUT_FILE" ]; then
    log "Render complete!"
    ls -lh "$OUTPUT_FILE"

    # Cleanup segments on success
    rm -rf "$SEGMENTS_DIR"
else
    error "Concatenation failed. Segments preserved in: $SEGMENTS_DIR"
fi
