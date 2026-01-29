import { AbsoluteFill, OffthreadVideo, Sequence, useVideoConfig } from "remotion";
import { VideoLowerThird, WebcamOverlay, ZoomPan, CodeHighlight } from "../components";
import { VideoOutline, ZoomCue } from "./types";

export type TutorialCompositionProps = {
  mainVideoSrc: string;
  webcamSrc?: string;
  outline: VideoOutline;
  mainVideoVolume?: number;
  webcamVolume?: number;
};

export const TutorialComposition: React.FC<TutorialCompositionProps> = ({
  mainVideoSrc,
  webcamSrc,
  outline,
  mainVideoVolume = 1,
  webcamVolume = 0,
}) => {
  const { fps } = useVideoConfig();

  // Convert zoom points to ZoomPan format
  const zoomKeyframes: ZoomCue[] = outline.zoomPoints || [
    { frame: 0, x: 0.5, y: 0.5, scale: 1 },
  ];

  return (
    <AbsoluteFill className="bg-black">
      {/* Main video with zoom/pan */}
      <ZoomPan keyframes={zoomKeyframes}>
        <AbsoluteFill>
          <OffthreadVideo
            src={mainVideoSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            volume={mainVideoVolume}
          />
        </AbsoluteFill>
      </ZoomPan>

      {/* Webcam overlay */}
      {webcamSrc && (
        <WebcamOverlay
          src={webcamSrc}
          position="bottom-right"
          size="medium"
          shape="rounded"
          volume={webcamVolume}
        />
      )}

      {/* Lower thirds from outline */}
      {outline.lowerThirds?.map((lt, index) => (
        <Sequence
          key={`lt-${index}`}
          from={lt.showAtFrame}
          durationInFrames={lt.hideAtFrame ? lt.hideAtFrame - lt.showAtFrame : fps * 5}
        >
          <VideoLowerThird
            title={lt.title}
            subtitle={lt.subtitle}
            link={lt.link}
            showAt={0}
            hideAt={lt.hideAtFrame ? lt.hideAtFrame - lt.showAtFrame - 30 : undefined}
          />
        </Sequence>
      ))}

      {/* Reference links as lower thirds */}
      {outline.references
        ?.filter((ref) => ref.showAtFrame !== undefined)
        .map((ref, index) => (
          <Sequence
            key={`ref-${index}`}
            from={ref.showAtFrame!}
            durationInFrames={fps * 5}
          >
            <VideoLowerThird
              title={ref.label}
              link={ref.url}
              position="bottom-left"
              accentColor="#3b82f6"
            />
          </Sequence>
        ))}

      {/* Code snippets */}
      {outline.codeSnippets?.map((snippet, index) => (
        <Sequence
          key={`code-${index}`}
          from={snippet.showAtFrame}
          durationInFrames={
            snippet.hideAtFrame
              ? snippet.hideAtFrame - snippet.showAtFrame
              : fps * 10
          }
        >
          <CodeHighlight
            code={snippet.code}
            title={snippet.title}
            highlightLines={snippet.highlightLines}
            showAt={0}
            hideAt={
              snippet.hideAtFrame
                ? snippet.hideAtFrame - snippet.showAtFrame - 30
                : undefined
            }
            size="large"
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
