// Types for tutorial video structure

// Re-export transcript types for backward compatibility
export type { Transcript, TranscriptSegment, TranscriptWord, SubtitleCue } from "./transcript-types";

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

export type CaseStudySection = {
  title: string; // "Finance Tracker"
  episodeGoal: string; // What we're adding this episode
  starterCode?: string; // Code from previous episode (reference)
  newCode: string; // Code to add this episode
  explanation: string[]; // Key points about what's new
};

export type AIPrompt = {
  exercisePrompt: string; // Prompt to generate practice exercises
  reviewPrompt?: string; // Prompt for code review
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

  // Incremental case study (Finance Tracker)
  caseStudy?: CaseStudySection;

  // AI prompts for homework
  aiPrompts?: AIPrompt;
};

export type OutlineSection = {
  timestamp: string; // "00:00" format for recording reference
  title: string;
  talkingPoints: string[];
  notes?: string;
  showOnScreen?: "code" | "slide" | "demo" | "webcam";
};
