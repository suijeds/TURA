// ═══════════════════════════════════════
// TURA v14 — Depth Layering Presets
// ═══════════════════════════════════════
import type { DepthPreset } from '@/types';

export const DEPTH_PRESETS: DepthPreset[] = [
  {
    id: 'classic_focus',
    ar: 'تركيز كلاسيكي',
    en: 'Classic Focus',
    descAr: 'الموضوع في الوسط مع إطار أمامي وخلفي خفيف',
    descEn: 'Subject centered with soft foreground and background framing',
    icon: '🎯',
    layers: { foreground: 15, midground: 70, background: 15 }
  },
  {
    id: 'dramatic_depth',
    ar: 'عمق درامي',
    en: 'Dramatic Depth',
    descAr: 'مقدمة قوية تقود العين نحو العمق',
    descEn: 'Strong foreground leading the eye into deep background',
    icon: '🎬',
    layers: { foreground: 40, midground: 35, background: 25 }
  },
  {
    id: 'panoramic_vista',
    ar: 'بانوراما واسعة',
    en: 'Panoramic Vista',
    descAr: 'مناظر طبيعية واسعة مع خلفية مهيمنة',
    descEn: 'Vast landscape with dominant background environment',
    icon: '🌄',
    layers: { foreground: 10, midground: 25, background: 65 }
  },
  {
    id: 'cinematic_portrait',
    ar: 'بورتريه سينمائي',
    en: 'Cinematic Portrait',
    descAr: 'تركيز شديد على الشخصية مع طمس الخلفية',
    descEn: 'Intense subject focus with background blur',
    icon: '👤',
    layers: { foreground: 5, midground: 85, background: 10 }
  },
  {
    id: 'equal_layers',
    ar: 'طبقات متساوية',
    en: 'Equal Layers',
    descAr: 'توازن تام بين الطبقات الثلاث',
    descEn: 'Perfect balance across all three depth layers',
    icon: '⚖️',
    layers: { foreground: 33, midground: 34, background: 33 }
  },
];
