import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  InfographicContent,
  SlideContent,
  BulletListContent,
  CalloutContent,
  ImageContent,
} from "../tutorials/transcript-types";
import { CodeHighlight } from "./CodeHighlight";

export type InfographicProps = {
  content: InfographicContent;
  showAt?: number;
  hideAt?: number;
  position?: "center" | "right" | "left" | "fullscreen";
};

export const Infographic: React.FC<InfographicProps> = ({
  content,
  showAt = 0,
  hideAt,
  position = "center",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const effectiveHideAt = hideAt ?? durationInFrames - 30;

  const enterSpring = spring({
    frame: frame - showAt,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const exitSpring = spring({
    frame: frame - effectiveHideAt,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const progress = enterSpring - exitSpring;

  if (progress <= 0) return null;

  const scale = interpolate(progress, [0, 1], [0.9, 1]);
  const opacity = progress;

  const positionStyles: Record<string, React.CSSProperties> = {
    center: { alignItems: "center", justifyContent: "center" },
    left: { alignItems: "center", justifyContent: "flex-start", paddingLeft: 80 },
    right: { alignItems: "center", justifyContent: "flex-end", paddingRight: 80 },
    fullscreen: { alignItems: "center", justifyContent: "center" },
  };

  return (
    <AbsoluteFill
      className="flex"
      style={{
        ...positionStyles[position],
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {content.type === "slide" && <SlideInfographic content={content} position={position} />}
      {content.type === "bullet-list" && <BulletListInfographic content={content} frame={frame} showAt={showAt} fps={fps} />}
      {content.type === "callout" && <CalloutInfographic content={content} />}
      {content.type === "image" && <ImageInfographic content={content} />}
      {content.type === "code" && (
        <CodeHighlight
          code={content.code}
          title={content.title}
          highlightLines={content.highlightLines}
          size={position === "fullscreen" ? "fullscreen" : "large"}
        />
      )}
    </AbsoluteFill>
  );
};

const SlideInfographic: React.FC<{ content: SlideContent; position: string }> = ({ content, position }) => {
  const maxWidth = position === "fullscreen" ? 1600 : 900;

  return (
    <div
      className="rounded-2xl p-12"
      style={{
        maxWidth,
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h2
        className="font-bold text-white mb-4"
        style={{ fontSize: 56, lineHeight: 1.2 }}
      >
        {content.title}
      </h2>
      {content.subtitle && (
        <p
          className="text-emerald-400 mb-6"
          style={{ fontSize: 32 }}
        >
          {content.subtitle}
        </p>
      )}
      {content.body && (
        <p
          className="text-gray-300"
          style={{ fontSize: 28, lineHeight: 1.6 }}
        >
          {content.body}
        </p>
      )}
    </div>
  );
};

const BulletListInfographic: React.FC<{
  content: BulletListContent;
  frame: number;
  showAt: number;
  fps: number;
}> = ({ content, frame, showAt, fps }) => {
  return (
    <div
      className="rounded-2xl p-12"
      style={{
        maxWidth: 900,
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {content.title && (
        <h3
          className="font-bold text-white mb-8"
          style={{ fontSize: 44 }}
        >
          {content.title}
        </h3>
      )}
      <ul className="space-y-4">
        {content.items.map((item, index) => {
          // Stagger animation for each item
          const itemDelay = index * 8;
          const itemSpring = spring({
            frame: frame - showAt - itemDelay,
            fps,
            config: { damping: 12, stiffness: 100 },
          });

          const isHighlighted = content.highlightIndex === index;

          return (
            <li
              key={index}
              className="flex items-start gap-4"
              style={{
                opacity: itemSpring,
                transform: `translateX(${(1 - itemSpring) * 30}px)`,
              }}
            >
              <span
                className="mt-2 w-3 h-3 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: isHighlighted ? "#22c55e" : "#64748b",
                }}
              />
              <span
                className={isHighlighted ? "text-white font-semibold" : "text-gray-300"}
                style={{ fontSize: 28, lineHeight: 1.5 }}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CalloutInfographic: React.FC<{ content: CalloutContent }> = ({ content }) => {
  const iconColors = {
    info: { bg: "#3b82f6", icon: "ℹ" },
    warning: { bg: "#f59e0b", icon: "⚠" },
    tip: { bg: "#22c55e", icon: "💡" },
    important: { bg: "#ef4444", icon: "❗" },
  };

  const { bg, icon } = iconColors[content.icon || "info"];

  return (
    <div
      className="rounded-2xl p-8 flex items-center gap-6"
      style={{
        maxWidth: 800,
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
        borderLeft: `6px solid ${bg}`,
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
        style={{ backgroundColor: bg }}
      >
        {icon}
      </div>
      <p
        className="text-white"
        style={{ fontSize: 32, lineHeight: 1.5 }}
      >
        {content.text}
      </p>
    </div>
  );
};

const ImageInfographic: React.FC<{ content: ImageContent }> = ({ content }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="rounded-xl overflow-hidden"
        style={{
          boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
        }}
      >
        <Img
          src={content.src}
          alt={content.alt || ""}
          style={{
            maxWidth: 1200,
            maxHeight: 800,
            objectFit: "contain",
          }}
        />
      </div>
      {content.caption && (
        <p
          className="mt-6 text-gray-300 text-center"
          style={{ fontSize: 24 }}
        >
          {content.caption}
        </p>
      )}
    </div>
  );
};
