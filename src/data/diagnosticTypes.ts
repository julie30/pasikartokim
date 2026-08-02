export type DiagnosticAreaId =
  | "digitalTools"
  | "algorithms"
  | "data"
  | "onlineSafety";

export type DiagnosticDifficulty = "easy" | "medium" | "hard";

export type DiagnosticSkillId =
  | "fileOrganization"
  | "fileNaming"
  | "actionSequence"
  | "sequencePrediction"
  | "loopUnderstanding"
  | "dataInterpretation"
  | "missingValue"
  | "toolSelection"
  | "onlineCommunication"
  | "passwordSafety"
  | "personalData"
  | "healthyWorkstation";

export type DiagnosticGapCode =
  | "folder-purpose"
  | "file-naming"
  | "action-order"
  | "sequence-result"
  | "repeat-loop"
  | "data-vs-information"
  | "missing-table-value"
  | "tool-selection"
  | "cyberbullying-response"
  | "password-safety"
  | "personal-data"
  | "healthy-workstation";

export type DiagnosticRecommendationId =
  | "files-and-folders"
  | "file-names"
  | "command-sequences"
  | "algorithm-results"
  | "repeat-command"
  | "data-and-information"
  | "reading-tables"
  | "digital-tools"
  | "online-bullying"
  | "safe-passwords"
  | "personal-data-safety"
  | "safe-workstation";

export type DiagnosticDirection = "up" | "right" | "down" | "left";

export interface DiagnosticFeedback {
  title: string;
  text: string;
}

export interface DiagnosticImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface DiagnosticAnswerOption {
  id: string;
  label: string;
  feedback: DiagnosticFeedback;
}

export interface DiagnosticImageOption extends DiagnosticAnswerOption {
  image: DiagnosticImage;
}

export interface DiagnosticOrderingItem {
  id: string;
  label: string;
}

export interface DiagnosticGridCell {
  id: string;
  label: string;
}

export interface DiagnosticQuestionBase {
  id: string;
  order: number;
  title: string;
  area: DiagnosticAreaId;
  skill: DiagnosticSkillId;
  difficulty: DiagnosticDifficulty;
  scenario: string[];
  question: string;
  gapCode: DiagnosticGapCode;
  recommendationId: DiagnosticRecommendationId;
}

export interface DiagnosticSingleChoiceQuestion
  extends DiagnosticQuestionBase {
  type: "singleChoice";
  options: DiagnosticAnswerOption[];
  correctAnswerId: string;
  media?: DiagnosticImage;
}

export interface DiagnosticOrderingQuestion
  extends DiagnosticQuestionBase {
  type: "ordering";
  items: DiagnosticOrderingItem[];
  correctOrder: string[];
  correctFeedback: DiagnosticFeedback;
  incorrectFeedback: DiagnosticFeedback;
  hint?: string;
}

export interface DiagnosticGridChoiceQuestion
  extends DiagnosticQuestionBase {
  type: "gridChoice";
  grid: {
    rows: number;
    columns: number;
    cells: DiagnosticGridCell[];
    startCellId: string;
    startDirection: DiagnosticDirection;
    commands: string[];
    accessibilityText: string;
  };
  characterImage?: DiagnosticImage;
  options: DiagnosticAnswerOption[];
  correctAnswerId: string;
}

export interface DiagnosticImageChoiceQuestion
  extends DiagnosticQuestionBase {
  type: "imageChoice";
  options: DiagnosticImageOption[];
  correctAnswerId: string;
}

export type DiagnosticQuestion =
  | DiagnosticSingleChoiceQuestion
  | DiagnosticOrderingQuestion
  | DiagnosticGridChoiceQuestion
  | DiagnosticImageChoiceQuestion;

export interface DiagnosticAreaDefinition {
  id: DiagnosticAreaId;
  title: string;
  description: string;
}

export interface DiagnosticRecommendation {
  id: DiagnosticRecommendationId;
  area: DiagnosticAreaId;
  title: string;
  description: string;
  priority: number;
  targetPath: string;
}

export interface DiagnosticActivityInfo {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  grade: number;
  subject: string;
  expectedQuestionCount: number;
  estimatedMinutes: {
    min: number;
    max: number;
  };
  intro: string;
  checkedSkills: string[];
  instructions: string[];
  exitDialog: {
    title: string;
    message: string;
    continueLabel: string;
    exitLabel: string;
  };
}

export interface DiagnosticData {
  activity: DiagnosticActivityInfo;
  areas: Record<DiagnosticAreaId, DiagnosticAreaDefinition>;
  questions: DiagnosticQuestion[];
  recommendations: DiagnosticRecommendation[];
}