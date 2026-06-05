// ═══════════════════════════════════════
// TURA v14 — Type Definitions
// ═══════════════════════════════════════

export type Difficulty = 'easy' | 'medium' | 'hard';
export type Language = 'ar' | 'en' | 'fr' | 'es' | 'ko' | 'zh';
export type ThemeMode = 'cinema' | 'void' | 'studio';

export interface OptionItem {
  ar: string;
  en: string;
  prompt: string;
  descAr: string;
  descEn: string;
  tooltipAr?: string;
  tooltipEn?: string;
  difficulty: Difficulty;
}

export interface OptionGroup {
  cat: string;
  ar: string;
  en: string;
  tooltipAr?: string;
  tooltipEn?: string;
  items: OptionItem[];
}

export interface Section {
  key: string;
  ar: string;
  en: string;
  icon: string;
  grp: string;
  tooltipAr?: string;
  tooltipEn?: string;
  groups: OptionGroup[];
}



export interface Platform {
  id: string;
  ar: string;
  en: string;
  tooltipAr?: string;
  tooltipEn?: string;
  prefix?: string;
  suffix?: string;
  neg?: string;
}

export interface Conflict {
  a: string;
  va: string;
  b: string;
  vb: string;
  msgAr: string;
  msgEn: string;
}

export interface ScoreCategory {
  key: string;
  ar: string;
  en: string;
  keys: string[];
  pts: number;
}

export interface AIGuideRule {
  condition: Record<string, string>;
  sugAr: string;
  sugEn: string;
  chips: string[];
}

export interface ColorGradingState {
  shadows: { hue: number; sat: number };      // 0-360, 0-100
  midtones: { hue: number; sat: number };
  highlights: { hue: number; sat: number };
  temperature: number;   // -100 to +100
  tint: number;          // -100 to +100
  contrast: number;      // -100 to +100
  saturation: number;    // -100 to +100
  vibrance: number;      // 0 to +100
  fade: number;          // 0 to +100
  grain: number;         // 0 to +100
  bloom: number;         // 0 to +100
}

export interface ShotListItem {
  shotNumber: number;
  shotType: string;
  camera: string;
  lens: string;
  focalLength: string;
  lighting: string;
  movement: string;
  composition: string;
  prompt: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  shotList?: ShotListItem[];
}

