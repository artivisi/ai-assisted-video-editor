// Types for tutorial video structure

export type VideoSegment = {
  id: string;
  title: string;
  description: string;
  startFrame: number;
  endFrame: number;
  type: "intro" | "screencast" | "webcam" | "slide" | "code" | "outro";
};

export type LowerThirdCue = {
  title: string;
  subtitle?: string;
  link?: string;
  showAtFrame: number;
  hideAtFrame?: number;
};

export type ZoomCue = {
  frame: number;
  x: number;
  y: number;
  scale: number;
};

export type CodeCue = {
  code: string;
  title?: string;
  highlightLines?: number[];
  showAtFrame: number;
  hideAtFrame?: number;
};

export type VideoOutline = {
  episodeId: string;
  seriesId: string;
  title: string;
  description: string;
  duration: number; // in seconds
  fps: number;

  // Recording guidelines
  outline: OutlineSection[];

  // Cues for overlays during editing
  lowerThirds?: LowerThirdCue[];
  zoomPoints?: ZoomCue[];
  codeSnippets?: CodeCue[];

  // Reference links to show
  references?: {
    label: string;
    url: string;
    showAtFrame?: number;
  }[];
};

export type OutlineSection = {
  timestamp: string; // "00:00" format for recording reference
  title: string;
  talkingPoints: string[];
  notes?: string;
  showOnScreen?: "code" | "slide" | "demo" | "webcam";
};
