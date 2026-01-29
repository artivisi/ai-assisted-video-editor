import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type CodeHighlightProps = {
  code: string;
  language?: string;
  highlightLines?: number[];
  title?: string;
  showAt?: number;
  hideAt?: number;
  position?: "center" | "right" | "left";
  size?: "small" | "medium" | "large" | "fullscreen";
};

// Simple syntax highlighting colors
const syntaxColors: Record<string, string> = {
  keyword: "#c678dd",
  string: "#98c379",
  number: "#d19a66",
  comment: "#5c6370",
  function: "#61afef",
  operator: "#56b6c2",
  default: "#abb2bf",
};

// Basic tokenizer for common patterns
const tokenize = (code: string): { text: string; type: string }[] => {
  const tokens: { text: string; type: string }[] = [];
  const patterns = [
    { regex: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, type: "comment" },
    { regex: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, type: "string" },
    { regex: /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|try|catch|throw|new|this|true|false|null|undefined)\b/g, type: "keyword" },
    { regex: /\b(\d+\.?\d*)\b/g, type: "number" },
    { regex: /([=+\-*/<>!&|?:])/g, type: "operator" },
    { regex: /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, type: "function" },
  ];

  let remaining = code;
  let position = 0;

  while (remaining.length > 0) {
    let earliestMatch: { index: number; length: number; type: string; text: string } | null = null;

    for (const { regex, type } of patterns) {
      regex.lastIndex = 0;
      const match = regex.exec(remaining);
      if (match && (!earliestMatch || match.index < earliestMatch.index)) {
        earliestMatch = {
          index: match.index,
          length: match[0].length,
          type,
          text: match[1] || match[0],
        };
      }
    }

    if (earliestMatch && earliestMatch.index === 0) {
      tokens.push({ text: earliestMatch.text, type: earliestMatch.type });
      remaining = remaining.slice(earliestMatch.length);
    } else if (earliestMatch) {
      tokens.push({ text: remaining.slice(0, earliestMatch.index), type: "default" });
      remaining = remaining.slice(earliestMatch.index);
    } else {
      tokens.push({ text: remaining, type: "default" });
      break;
    }
  }

  return tokens;
};

export const CodeHighlight: React.FC<CodeHighlightProps> = ({
  code,
  highlightLines = [],
  title,
  showAt = 0,
  hideAt,
  position = "center",
  size = "medium",
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

  const lines = code.split("\n");

  const sizeStyles = {
    small: { maxWidth: 600, fontSize: 14 },
    medium: { maxWidth: 900, fontSize: 18 },
    large: { maxWidth: 1200, fontSize: 22 },
    fullscreen: { maxWidth: 1800, fontSize: 24 },
  };

  const positionStyles = {
    center: { left: "50%", transform: `translateX(-50%) scale(${scale})` },
    left: { left: 40, transform: `scale(${scale})` },
    right: { right: 40, transform: `scale(${scale})` },
  };

  return (
    <AbsoluteFill
      className="flex items-center justify-center"
      style={{ padding: 40 }}
    >
      <div
        className="rounded-xl overflow-hidden"
        style={{
          ...sizeStyles[size],
          opacity,
          transform: positionStyles[position].transform,
          backgroundColor: "#282c34",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        {/* Title bar */}
        {title && (
          <div
            className="px-4 py-3 flex items-center gap-2"
            style={{ backgroundColor: "#21252b" }}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span
              className="ml-4 font-mono text-gray-400"
              style={{ fontSize: sizeStyles[size].fontSize - 2 }}
            >
              {title}
            </span>
          </div>
        )}

        {/* Code content */}
        <div className="p-6 overflow-hidden">
          <pre
            className="font-mono"
            style={{
              fontSize: sizeStyles[size].fontSize,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {lines.map((line, lineIndex) => {
              const isHighlighted = highlightLines.includes(lineIndex + 1);
              const tokens = tokenize(line || " ");

              return (
                <div
                  key={lineIndex}
                  className="flex"
                  style={{
                    backgroundColor: isHighlighted ? "rgba(255,255,0,0.1)" : "transparent",
                    borderLeft: isHighlighted ? "3px solid #f7df1e" : "3px solid transparent",
                    paddingLeft: 12,
                    marginLeft: -12,
                  }}
                >
                  <span
                    className="select-none mr-6 text-right"
                    style={{
                      color: "#5c6370",
                      minWidth: 30,
                    }}
                  >
                    {lineIndex + 1}
                  </span>
                  <span>
                    {tokens.map((token, i) => (
                      <span
                        key={i}
                        style={{ color: syntaxColors[token.type] || syntaxColors.default }}
                      >
                        {token.text}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </pre>
        </div>
      </div>
    </AbsoluteFill>
  );
};
