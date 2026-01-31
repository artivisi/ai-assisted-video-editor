#!/usr/bin/env python3
"""
Extract mouse cursor positions from screen recording.

This script uses OpenCV to detect and track the mouse cursor in a video.
The output is a JSON file with cursor positions per frame.

Prerequisites:
    pip install opencv-python numpy

Usage:
    python scripts/extract-cursor.py footage/pf-01-main.mp4
    python scripts/extract-cursor.py footage/pf-01-main.mp4 --output cursor.json --fps 30

Note: This is a basic implementation. For better accuracy, consider:
- Recording cursor position separately during screen capture (OBS can do this)
- Using a dedicated cursor tracking tool
- Training a custom model for cursor detection
"""

import argparse
import json
import sys
from pathlib import Path

try:
    import cv2
    import numpy as np
except ImportError:
    print("Error: OpenCV not installed")
    print("Install with: pip install opencv-python numpy")
    sys.exit(1)


def detect_cursor_template(frame, templates):
    """Detect cursor using template matching."""
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    best_match = None
    best_val = 0

    for template in templates:
        result = cv2.matchTemplate(gray, template, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)

        if max_val > best_val and max_val > 0.7:  # Threshold
            best_val = max_val
            h, w = template.shape
            best_match = (max_loc[0] + w // 2, max_loc[1] + h // 2, max_val)

    return best_match


def detect_cursor_contour(frame, prev_frame=None):
    """Detect cursor using motion/contour detection."""
    if prev_frame is None:
        return None

    # Calculate frame difference
    diff = cv2.absdiff(frame, prev_frame)
    gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)

    # Threshold and find contours
    _, thresh = cv2.threshold(gray, 30, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    if not contours:
        return None

    # Find the smallest contour (likely cursor)
    small_contours = [c for c in contours if 10 < cv2.contourArea(c) < 2000]

    if not small_contours:
        return None

    # Get centroid of smallest contour
    smallest = min(small_contours, key=cv2.contourArea)
    M = cv2.moments(smallest)

    if M["m00"] == 0:
        return None

    cx = int(M["m10"] / M["m00"])
    cy = int(M["m01"] / M["m00"])

    return (cx, cy, 0.5)  # Lower confidence for motion-based detection


def generate_cursor_templates():
    """Generate basic cursor templates for matching."""
    templates = []

    # Arrow cursor (simplified)
    arrow = np.zeros((20, 15), dtype=np.uint8)
    pts = np.array([[0, 0], [0, 14], [4, 10], [7, 17], [9, 16], [6, 9], [12, 9]], np.int32)
    cv2.fillPoly(arrow, [pts], 255)
    templates.append(arrow)

    # I-beam cursor
    ibeam = np.zeros((20, 10), dtype=np.uint8)
    cv2.line(ibeam, (5, 0), (5, 19), 255, 1)
    cv2.line(ibeam, (2, 0), (8, 0), 255, 1)
    cv2.line(ibeam, (2, 19), (8, 19), 255, 1)
    templates.append(ibeam)

    return templates


def extract_cursor_positions(video_path, sample_rate=1):
    """Extract cursor positions from video."""
    cap = cv2.VideoCapture(str(video_path))

    if not cap.isOpened():
        raise ValueError(f"Could not open video: {video_path}")

    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    print(f"Video: {width}x{height} @ {fps}fps, {total_frames} frames")

    templates = generate_cursor_templates()
    positions = []
    prev_frame = None
    frame_num = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if frame_num % sample_rate == 0:
            # Try template matching first
            pos = detect_cursor_template(frame, templates)

            # Fall back to motion detection
            if pos is None:
                pos = detect_cursor_contour(frame, prev_frame)

            if pos:
                x, y, confidence = pos
                positions.append({
                    "frame": frame_num,
                    "x": round(x / width, 4),
                    "y": round(y / height, 4),
                    "timestamp": round(frame_num / fps, 3),
                    "confidence": round(confidence, 3),
                })

        prev_frame = frame.copy()
        frame_num += 1

        if frame_num % 300 == 0:
            print(f"Processed {frame_num}/{total_frames} frames...")

    cap.release()

    return {
        "video": str(video_path),
        "fps": fps,
        "width": width,
        "height": height,
        "totalFrames": total_frames,
        "positions": positions,
    }


def main():
    parser = argparse.ArgumentParser(description="Extract cursor positions from video")
    parser.add_argument("video", help="Input video file")
    parser.add_argument("--output", "-o", help="Output JSON file")
    parser.add_argument("--sample-rate", "-s", type=int, default=3,
                        help="Sample every N frames (default: 3)")

    args = parser.parse_args()

    video_path = Path(args.video)
    if not video_path.exists():
        print(f"Error: Video not found: {video_path}")
        sys.exit(1)

    output_path = args.output or video_path.with_suffix(".cursor.json")

    print(f"Extracting cursor positions from: {video_path}")
    print(f"Sample rate: every {args.sample_rate} frames")

    try:
        result = extract_cursor_positions(video_path, args.sample_rate)

        with open(output_path, "w") as f:
            json.dump(result, f, indent=2)

        print(f"\nFound {len(result['positions'])} cursor positions")
        print(f"Output saved to: {output_path}")
        print(f"\nNext step: Generate zoom keyframes")
        print(f"  node scripts/generate-zoom-keyframes.mjs {output_path}")

    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
