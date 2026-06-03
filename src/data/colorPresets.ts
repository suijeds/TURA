// ═══════════════════════════════════════
// TURA v14 — Cinematic Color Presets
// Inspired by DaVinci Resolve & Premiere Pro
// ═══════════════════════════════════════

import type { ColorGradingState } from '@/types';

export interface ColorPreset {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  category: PresetCategory;
  gradientCSS: string;
  values: ColorGradingState;
}

export type PresetCategory = 'hollywood' | 'dark' | 'warm' | 'cool' | 'artistic' | 'nature';

export interface PresetCategoryInfo {
  id: PresetCategory;
  nameAr: string;
  nameEn: string;
  icon: string;
}

export const PRESET_CATEGORIES: PresetCategoryInfo[] = [
  { id: 'hollywood', nameAr: 'هوليوود الكلاسيكية', nameEn: 'Hollywood Classic', icon: '🎬' },
  { id: 'dark',      nameAr: 'داكنة وغامضة',      nameEn: 'Dark & Moody',       icon: '🌙' },
  { id: 'warm',      nameAr: 'دفء ونوستالجيا',    nameEn: 'Warm & Nostalgic',   icon: '☀️' },
  { id: 'cool',      nameAr: 'بارد وعصري',        nameEn: 'Cool & Modern',      icon: '🧊' },
  { id: 'artistic',  nameAr: 'فني وإبداعي',       nameEn: 'Artistic & Creative', icon: '🎨' },
  { id: 'nature',    nameAr: 'طبيعة وبيئة',       nameEn: 'Nature & Environment', icon: '🌿' },
];

export const COLOR_PRESETS: ColorPreset[] = [
  // ═══════════════════════════════════════
  // 🎬 HOLLYWOOD CLASSIC
  // ═══════════════════════════════════════
  {
    id: 'teal_orange',
    nameAr: 'أزرق مخضر وبرتقالي',
    nameEn: 'Teal & Orange',
    descAr: 'أشهر تلوين سينمائي — ظلال زرقاء خضراء مع درجات برتقالية دافئة',
    descEn: 'The most iconic cinematic look — teal shadows with warm orange highlights',
    category: 'hollywood',
    gradientCSS: 'linear-gradient(135deg, #0d7377 0%, #1a3a4a 35%, #d4832f 70%, #e8a952 100%)',
    values: {
      shadows:    { hue: 185, sat: 60 },
      midtones:   { hue: 195, sat: 20 },
      highlights: { hue: 30,  sat: 50 },
      temperature: 15,
      tint: 0,
      contrast: 25,
      saturation: 10,
      vibrance: 30,
      fade: 0,
      grain: 0,
      bloom: 0,
    }
  },
  {
    id: 'bleach_bypass',
    nameAr: 'تبييض متجاوز',
    nameEn: 'Bleach Bypass',
    descAr: 'تباين عالي مع ألوان باهتة — مستوحى من أفلام الحرب والإثارة',
    descEn: 'High contrast with desaturated colors — inspired by war and thriller films',
    category: 'hollywood',
    gradientCSS: 'linear-gradient(135deg, #2a2a2a 0%, #5a5a5a 40%, #8a8a7a 70%, #b0b0a0 100%)',
    values: {
      shadows:    { hue: 210, sat: 10 },
      midtones:   { hue: 40,  sat: 8 },
      highlights: { hue: 45,  sat: 12 },
      temperature: -10,
      tint: 0,
      contrast: 55,
      saturation: -55,
      vibrance: 15,
      fade: 10,
      grain: 25,
      bloom: 0,
    }
  },
  {
    id: 'film_noir',
    nameAr: 'فيلم نوار',
    nameEn: 'Film Noir',
    descAr: 'أبيض وأسود مع تباين حاد جداً — سينما الأربعينيات والخمسينيات',
    descEn: 'Pure black & white with extreme contrast — 1940s/50s cinema',
    category: 'hollywood',
    gradientCSS: 'linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #555555 60%, #e0e0e0 100%)',
    values: {
      shadows:    { hue: 0,   sat: 0 },
      midtones:   { hue: 0,   sat: 0 },
      highlights: { hue: 0,   sat: 0 },
      temperature: 0,
      tint: 0,
      contrast: 65,
      saturation: -100,
      vibrance: 0,
      fade: 5,
      grain: 40,
      bloom: 0,
    }
  },
  {
    id: 'golden_hour_epic',
    nameAr: 'الساعة الذهبية الملحمية',
    nameEn: 'Golden Hour Epic',
    descAr: 'ساعة ذهبية ملحمية — دفء شديد مع توهج ناعم وإبرازات ذهبية',
    descEn: 'Epic golden hour — intensely warm with soft bloom and golden highlights',
    category: 'hollywood',
    gradientCSS: 'linear-gradient(135deg, #8b5e1a 0%, #c4892e 30%, #e8b84a 60%, #f5d990 100%)',
    values: {
      shadows:    { hue: 30,  sat: 25 },
      midtones:   { hue: 40,  sat: 30 },
      highlights: { hue: 45,  sat: 40 },
      temperature: 80,
      tint: 5,
      contrast: 10,
      saturation: 15,
      vibrance: 35,
      fade: 0,
      grain: 0,
      bloom: 40,
    }
  },
  {
    id: 'vintage_hollywood',
    nameAr: 'هوليوود الكلاسيكية',
    nameEn: 'Vintage Hollywood',
    descAr: 'تلوين كلاسيكي دافئ مع بهتان خفيف وحبوب — سينما الستينيات',
    descEn: 'Classic warm grading with soft fade and grain — 1960s cinema',
    category: 'hollywood',
    gradientCSS: 'linear-gradient(135deg, #3d2e1e 0%, #7a5c3a 35%, #c9a66a 65%, #e8d4a8 100%)',
    values: {
      shadows:    { hue: 35,  sat: 20 },
      midtones:   { hue: 40,  sat: 15 },
      highlights: { hue: 50,  sat: 18 },
      temperature: 35,
      tint: 8,
      contrast: -10,
      saturation: -15,
      vibrance: 20,
      fade: 25,
      grain: 30,
      bloom: 10,
    }
  },

  // ═══════════════════════════════════════
  // 🌙 DARK & MOODY
  // ═══════════════════════════════════════
  {
    id: 'cyberpunk_night',
    nameAr: 'ليل سايبربانك',
    nameEn: 'Cyberpunk Night',
    descAr: 'ألوان نيون باردة مع ظلال عميقة — أجواء مستقبلية ديستوبية',
    descEn: 'Neon-cold tones with deep shadows — dystopian futuristic atmosphere',
    category: 'dark',
    gradientCSS: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a3a 30%, #6b1fa0 60%, #00e5ff 100%)',
    values: {
      shadows:    { hue: 260, sat: 40 },
      midtones:   { hue: 280, sat: 30 },
      highlights: { hue: 190, sat: 55 },
      temperature: -40,
      tint: 25,
      contrast: 45,
      saturation: 20,
      vibrance: 50,
      fade: 0,
      grain: 10,
      bloom: 15,
    }
  },
  {
    id: 'nordic_noir',
    nameAr: 'نوار اسكندنافي',
    nameEn: 'Nordic Noir',
    descAr: 'ألوان باردة مكتومة مع تباين منخفض — أجواء الدراما الاسكندنافية',
    descEn: 'Muted cool tones with low contrast — Scandinavian drama aesthetic',
    category: 'dark',
    gradientCSS: 'linear-gradient(135deg, #1a2030 0%, #2a3545 35%, #4a5565 65%, #708090 100%)',
    values: {
      shadows:    { hue: 215, sat: 25 },
      midtones:   { hue: 210, sat: 15 },
      highlights: { hue: 200, sat: 10 },
      temperature: -30,
      tint: -8,
      contrast: -20,
      saturation: -40,
      vibrance: 10,
      fade: 15,
      grain: 20,
      bloom: 0,
    }
  },
  {
    id: 'dark_fantasy',
    nameAr: 'خيال مظلم',
    nameEn: 'Dark Fantasy',
    descAr: 'ظلال بنفسجية عميقة مع إبرازات ذهبية — عوالم خيالية ملحمية',
    descEn: 'Deep purple shadows with golden highlights — epic fantasy worlds',
    category: 'dark',
    gradientCSS: 'linear-gradient(135deg, #1a0a2e 0%, #3d1a6e 35%, #7a4a2a 65%, #d4a020 100%)',
    values: {
      shadows:    { hue: 270, sat: 55 },
      midtones:   { hue: 260, sat: 20 },
      highlights: { hue: 45,  sat: 35 },
      temperature: 10,
      tint: 15,
      contrast: 30,
      saturation: 5,
      vibrance: 25,
      fade: 5,
      grain: 0,
      bloom: 20,
    }
  },
  {
    id: 'midnight_blue',
    nameAr: 'أزرق منتصف الليل',
    nameEn: 'Midnight Blue',
    descAr: 'أزرق داكن عميق مع حبوب فيلمية — أجواء ليلية مهيبة',
    descEn: 'Deep dark blue with film grain — imposing nighttime atmosphere',
    category: 'dark',
    gradientCSS: 'linear-gradient(135deg, #050a1a 0%, #0a1535 35%, #1a3060 65%, #3060a0 100%)',
    values: {
      shadows:    { hue: 230, sat: 70 },
      midtones:   { hue: 220, sat: 35 },
      highlights: { hue: 210, sat: 20 },
      temperature: -60,
      tint: 0,
      contrast: 20,
      saturation: -10,
      vibrance: 15,
      fade: 15,
      grain: 25,
      bloom: 0,
    }
  },
  {
    id: 'shadows_ash',
    nameAr: 'ظلال ورماد',
    nameEn: 'Shadows & Ash',
    descAr: 'رمادي بارد مع بهتان قوي — أجواء ما بعد الكارثة',
    descEn: 'Cold grey with heavy fade — post-apocalyptic atmosphere',
    category: 'dark',
    gradientCSS: 'linear-gradient(135deg, #1a1a1e 0%, #2e2e32 35%, #555558 65%, #888890 100%)',
    values: {
      shadows:    { hue: 210, sat: 10 },
      midtones:   { hue: 200, sat: 5 },
      highlights: { hue: 40,  sat: 5 },
      temperature: -20,
      tint: -5,
      contrast: 15,
      saturation: -60,
      vibrance: 0,
      fade: 50,
      grain: 40,
      bloom: 0,
    }
  },

  // ═══════════════════════════════════════
  // ☀️ WARM & NOSTALGIC
  // ═══════════════════════════════════════
  {
    id: 'kodak_portra',
    nameAr: 'كوداك بورترا 400',
    nameEn: 'Kodak Portra 400',
    descAr: 'ألوان دافئة ناعمة مع درجات جلدية — محاكاة أفلام Kodak الشهيرة',
    descEn: 'Soft warm tones with beautiful skin tones — emulating iconic Kodak film',
    category: 'warm',
    gradientCSS: 'linear-gradient(135deg, #4a3a2a 0%, #8a6a4a 30%, #c4a07a 60%, #e8cca8 100%)',
    values: {
      shadows:    { hue: 30,  sat: 15 },
      midtones:   { hue: 25,  sat: 12 },
      highlights: { hue: 40,  sat: 18 },
      temperature: 25,
      tint: 15,
      contrast: -15,
      saturation: -5,
      vibrance: 30,
      fade: 8,
      grain: 15,
      bloom: 5,
    }
  },
  {
    id: '70s_retro',
    nameAr: 'ريترو السبعينيات',
    nameEn: '70s Retro',
    descAr: 'تشبع عالي مع بهتان وحبوب ثقيلة — أجواء السبعينيات الحية',
    descEn: 'High saturation with fade and heavy grain — vibrant 70s vibe',
    category: 'warm',
    gradientCSS: 'linear-gradient(135deg, #5a3a1a 0%, #a06030 30%, #d4943a 55%, #e8c86a 80%, #d0a040 100%)',
    values: {
      shadows:    { hue: 25,  sat: 30 },
      midtones:   { hue: 35,  sat: 25 },
      highlights: { hue: 50,  sat: 30 },
      temperature: 40,
      tint: 10,
      contrast: 10,
      saturation: 50,
      vibrance: 40,
      fade: 35,
      grain: 60,
      bloom: 10,
    }
  },
  {
    id: 'summer_haze',
    nameAr: 'ضباب الصيف',
    nameEn: 'Summer Haze',
    descAr: 'دفء شديد مع توهج ناعم وبهتان — أيام صيف حالمة',
    descEn: 'Intensely warm with soft bloom and fade — dreamy summer days',
    category: 'warm',
    gradientCSS: 'linear-gradient(135deg, #806030 0%, #c09050 30%, #e0b870 55%, #f5e0b0 80%, #fff5e0 100%)',
    values: {
      shadows:    { hue: 35,  sat: 15 },
      midtones:   { hue: 40,  sat: 20 },
      highlights: { hue: 50,  sat: 15 },
      temperature: 50,
      tint: 5,
      contrast: -10,
      saturation: 10,
      vibrance: 40,
      fade: 25,
      grain: 5,
      bloom: 50,
    }
  },
  {
    id: 'sepia_dream',
    nameAr: 'حلم بني داكن',
    nameEn: 'Sepia Dream',
    descAr: 'تدرج بني دافئ مع حبوب وبهتان — أجواء صور قديمة',
    descEn: 'Warm brown tones with grain and fade — antique photo aesthetic',
    category: 'warm',
    gradientCSS: 'linear-gradient(135deg, #3a2a1a 0%, #6a4a2a 35%, #a07a4a 65%, #d4b08a 100%)',
    values: {
      shadows:    { hue: 30,  sat: 25 },
      midtones:   { hue: 35,  sat: 30 },
      highlights: { hue: 40,  sat: 20 },
      temperature: 70,
      tint: -10,
      contrast: 5,
      saturation: -60,
      vibrance: 10,
      fade: 30,
      grain: 50,
      bloom: 5,
    }
  },
  {
    id: 'sunset_glow',
    nameAr: 'توهج الغروب',
    nameEn: 'Sunset Glow',
    descAr: 'برتقالي وأحمر دافئ مع تشبع عالي — غروب شمس سينمائي',
    descEn: 'Warm orange and red with high saturation — cinematic sunset',
    category: 'warm',
    gradientCSS: 'linear-gradient(135deg, #5a1a0a 0%, #a03010 30%, #d46020 55%, #e8a040 80%, #f5d080 100%)',
    values: {
      shadows:    { hue: 15,  sat: 35 },
      midtones:   { hue: 25,  sat: 40 },
      highlights: { hue: 40,  sat: 45 },
      temperature: 65,
      tint: 10,
      contrast: 15,
      saturation: 20,
      vibrance: 45,
      fade: 0,
      grain: 0,
      bloom: 25,
    }
  },

  // ═══════════════════════════════════════
  // 🧊 COOL & MODERN
  // ═══════════════════════════════════════
  {
    id: 'scifi_clean',
    nameAr: 'خيال علمي نظيف',
    nameEn: 'Sci-Fi Clean',
    descAr: 'أزرق نظيف مع تباين عالي — خيال علمي عصري',
    descEn: 'Clean blue with high contrast — modern sci-fi aesthetic',
    category: 'cool',
    gradientCSS: 'linear-gradient(135deg, #0a0a20 0%, #1a2a50 35%, #3a5a90 65%, #80b0e0 100%)',
    values: {
      shadows:    { hue: 220, sat: 35 },
      midtones:   { hue: 215, sat: 20 },
      highlights: { hue: 200, sat: 15 },
      temperature: -45,
      tint: 0,
      contrast: 40,
      saturation: 15,
      vibrance: 20,
      fade: 0,
      grain: 0,
      bloom: 5,
    }
  },
  {
    id: 'winter_frost',
    nameAr: 'صقيع الشتاء',
    nameEn: 'Winter Frost',
    descAr: 'أبيض مائل للأزرق مع ألوان مكتومة — شتاء جليدي هادئ',
    descEn: 'Blue-white with muted colors — calm frosty winter',
    category: 'cool',
    gradientCSS: 'linear-gradient(135deg, #1a2535 0%, #3a5070 35%, #80a0c0 65%, #d0e5f5 100%)',
    values: {
      shadows:    { hue: 210, sat: 20 },
      midtones:   { hue: 205, sat: 15 },
      highlights: { hue: 195, sat: 10 },
      temperature: -60,
      tint: -5,
      contrast: -20,
      saturation: -30,
      vibrance: 10,
      fade: 10,
      grain: 0,
      bloom: 20,
    }
  },
  {
    id: 'medical_drama',
    nameAr: 'دراما طبية',
    nameEn: 'Medical Drama',
    descAr: 'أخضر مائل للأزرق بارد — مستوحى من مسلسلات المستشفيات',
    descEn: 'Cool blue-green — inspired by hospital drama series',
    category: 'cool',
    gradientCSS: 'linear-gradient(135deg, #1a2a2a 0%, #2a4545 35%, #508080 65%, #90b5b5 100%)',
    values: {
      shadows:    { hue: 180, sat: 15 },
      midtones:   { hue: 175, sat: 12 },
      highlights: { hue: 170, sat: 8 },
      temperature: -25,
      tint: -30,
      contrast: 10,
      saturation: -20,
      vibrance: 5,
      fade: 0,
      grain: 0,
      bloom: 0,
    }
  },
  {
    id: 'neon_chrome',
    nameAr: 'نيون كروم',
    nameEn: 'Neon Chrome',
    descAr: 'سماوي ونيون مع ظلال سوداء عميقة — أجواء تقنية مستقبلية',
    descEn: 'Cyan neon with deep black shadows — futuristic tech vibe',
    category: 'cool',
    gradientCSS: 'linear-gradient(135deg, #050510 0%, #0a1525 35%, #005570 65%, #00e5ff 100%)',
    values: {
      shadows:    { hue: 200, sat: 30 },
      midtones:   { hue: 195, sat: 25 },
      highlights: { hue: 190, sat: 60 },
      temperature: -35,
      tint: -10,
      contrast: 45,
      saturation: 15,
      vibrance: 40,
      fade: 0,
      grain: 5,
      bloom: 10,
    }
  },
  {
    id: 'arctic_light',
    nameAr: 'ضوء القطب',
    nameEn: 'Arctic Light',
    descAr: 'أبيض بارد مع إبرازات لؤلؤية وتباين خفيف',
    descEn: 'Cold white with pearly highlights and soft contrast',
    category: 'cool',
    gradientCSS: 'linear-gradient(135deg, #2a3540 0%, #5070a0 35%, #a0c0e0 65%, #e8f0fa 100%)',
    values: {
      shadows:    { hue: 215, sat: 15 },
      midtones:   { hue: 200, sat: 10 },
      highlights: { hue: 190, sat: 8 },
      temperature: -50,
      tint: 0,
      contrast: -15,
      saturation: -40,
      vibrance: 5,
      fade: 10,
      grain: 0,
      bloom: 35,
    }
  },

  // ═══════════════════════════════════════
  // 🎨 ARTISTIC & CREATIVE
  // ═══════════════════════════════════════
  {
    id: 'wes_anderson',
    nameAr: 'ويس أندرسون',
    nameEn: 'Wes Anderson',
    descAr: 'ألوان باستيل متناسقة مع تشبع عالي — الأسلوب المميز لويس أندرسون',
    descEn: 'Harmonized pastel colors with high saturation — the iconic Wes Anderson style',
    category: 'artistic',
    gradientCSS: 'linear-gradient(135deg, #e8a0a0 0%, #f0c0a0 25%, #f5e0b0 50%, #b0d8b0 75%, #a0c8e0 100%)',
    values: {
      shadows:    { hue: 350, sat: 15 },
      midtones:   { hue: 40,  sat: 20 },
      highlights: { hue: 50,  sat: 25 },
      temperature: 20,
      tint: 20,
      contrast: -5,
      saturation: 60,
      vibrance: 50,
      fade: 10,
      grain: 5,
      bloom: 8,
    }
  },
  {
    id: 'blade_runner_2049',
    nameAr: 'بليد رانر 2049',
    nameEn: 'Blade Runner 2049',
    descAr: 'برتقالي مكثف مع أجواء ضبابية — مستقبل ديستوبي حالم',
    descEn: 'Intense orange with hazy atmosphere — dreamy dystopian future',
    category: 'artistic',
    gradientCSS: 'linear-gradient(135deg, #2a1a0a 0%, #6a3010 30%, #c06020 55%, #e89040 80%, #f0b060 100%)',
    values: {
      shadows:    { hue: 25,  sat: 30 },
      midtones:   { hue: 25,  sat: 55 },
      highlights: { hue: 35,  sat: 40 },
      temperature: 75,
      tint: 5,
      contrast: 20,
      saturation: 10,
      vibrance: 30,
      fade: 20,
      grain: 10,
      bloom: 30,
    }
  },
  {
    id: 'euphoria_neon',
    nameAr: 'يوفوريا نيون',
    nameEn: 'Euphoria Neon',
    descAr: 'ألوان نيون حية بنفسجية وزهرية — دراما الشباب العصرية',
    descEn: 'Vivid neon purples and pinks — modern youth drama aesthetic',
    category: 'artistic',
    gradientCSS: 'linear-gradient(135deg, #1a0a2a 0%, #4a1a6a 25%, #8a2aaa 50%, #d04ae0 75%, #ff60ff 100%)',
    values: {
      shadows:    { hue: 280, sat: 35 },
      midtones:   { hue: 300, sat: 50 },
      highlights: { hue: 320, sat: 40 },
      temperature: -5,
      tint: 60,
      contrast: 15,
      saturation: 25,
      vibrance: 60,
      fade: 0,
      grain: 0,
      bloom: 25,
    }
  },
  {
    id: 'desat_drama',
    nameAr: 'دراما مكتومة',
    nameEn: 'Desaturated Drama',
    descAr: 'ألوان مكتومة جداً مع لمسة باردة — دراما واقعية ثقيلة',
    descEn: 'Heavily muted colors with cool touch — heavy realistic drama',
    category: 'artistic',
    gradientCSS: 'linear-gradient(135deg, #202225 0%, #3a3c40 35%, #5a5c62 65%, #8a8c92 100%)',
    values: {
      shadows:    { hue: 215, sat: 8 },
      midtones:   { hue: 210, sat: 5 },
      highlights: { hue: 40,  sat: 5 },
      temperature: 10,
      tint: 0,
      contrast: 15,
      saturation: -70,
      vibrance: 5,
      fade: 5,
      grain: 20,
      bloom: 0,
    }
  },
  {
    id: 'cross_process',
    nameAr: 'تحميض متقاطع',
    nameEn: 'Cross Process',
    descAr: 'ألوان مقلوبة غير تقليدية — تأثير التحميض المتقاطع الكلاسيكي',
    descEn: 'Unconventional inverted colors — classic cross-processing effect',
    category: 'artistic',
    gradientCSS: 'linear-gradient(135deg, #1a3a2a 0%, #4a7a3a 30%, #90c040 55%, #e0e060 80%, #f0d080 100%)',
    values: {
      shadows:    { hue: 150, sat: 35 },
      midtones:   { hue: 100, sat: 30 },
      highlights: { hue: 50,  sat: 40 },
      temperature: 30,
      tint: -50,
      contrast: 20,
      saturation: 40,
      vibrance: 35,
      fade: 10,
      grain: 15,
      bloom: 0,
    }
  },

  // ═══════════════════════════════════════
  // 🌿 NATURE & ENVIRONMENT
  // ═══════════════════════════════════════
  {
    id: 'jungle_canopy',
    nameAr: 'مظلة الغابة',
    nameEn: 'Jungle Canopy',
    descAr: 'أخضر غني ودافئ مع ظلال بنية — غابات استوائية كثيفة',
    descEn: 'Rich warm green with brown shadows — dense tropical forests',
    category: 'nature',
    gradientCSS: 'linear-gradient(135deg, #1a2a0a 0%, #2a4a10 30%, #5a8a20 55%, #80b040 80%, #a0d060 100%)',
    values: {
      shadows:    { hue: 35,  sat: 20 },
      midtones:   { hue: 120, sat: 40 },
      highlights: { hue: 100, sat: 25 },
      temperature: 20,
      tint: -20,
      contrast: 10,
      saturation: 25,
      vibrance: 35,
      fade: 0,
      grain: 0,
      bloom: 5,
    }
  },
  {
    id: 'ocean_deep',
    nameAr: 'أعماق المحيط',
    nameEn: 'Ocean Deep',
    descAr: 'أزرق عميق مع تدرجات سماوية — محيط لا نهائي',
    descEn: 'Deep blue with cyan gradients — infinite ocean depths',
    category: 'nature',
    gradientCSS: 'linear-gradient(135deg, #0a0a2a 0%, #0a2050 30%, #1a5080 55%, #30a0c0 80%, #60d0e0 100%)',
    values: {
      shadows:    { hue: 210, sat: 55 },
      midtones:   { hue: 200, sat: 35 },
      highlights: { hue: 190, sat: 25 },
      temperature: -40,
      tint: -15,
      contrast: 10,
      saturation: 15,
      vibrance: 20,
      fade: 5,
      grain: 0,
      bloom: 10,
    }
  },
  {
    id: 'desert_sand',
    nameAr: 'رمال الصحراء',
    nameEn: 'Desert Sand',
    descAr: 'ألوان ترابية دافئة مع تباين عالي — صحراء سينمائية شاسعة',
    descEn: 'Warm earthy tones with high contrast — vast cinematic desert',
    category: 'nature',
    gradientCSS: 'linear-gradient(135deg, #3a2a10 0%, #7a5a20 30%, #c09040 55%, #e0c070 80%, #f0e0a0 100%)',
    values: {
      shadows:    { hue: 30,  sat: 25 },
      midtones:   { hue: 35,  sat: 40 },
      highlights: { hue: 45,  sat: 30 },
      temperature: 55,
      tint: 5,
      contrast: 30,
      saturation: 5,
      vibrance: 20,
      fade: 5,
      grain: 10,
      bloom: 15,
    }
  },
  {
    id: 'forest_mist',
    nameAr: 'ضباب الغابة',
    nameEn: 'Forest Mist',
    descAr: 'أخضر بارد مع بهتان وضباب — غابة ضبابية ساحرة',
    descEn: 'Cool green with fade and mist — enchanted foggy forest',
    category: 'nature',
    gradientCSS: 'linear-gradient(135deg, #1a2520 0%, #2a4038 35%, #5a8070 65%, #a0c8b8 100%)',
    values: {
      shadows:    { hue: 155, sat: 15 },
      midtones:   { hue: 145, sat: 20 },
      highlights: { hue: 135, sat: 10 },
      temperature: -15,
      tint: -25,
      contrast: -10,
      saturation: -20,
      vibrance: 15,
      fade: 30,
      grain: 5,
      bloom: 25,
    }
  },
  {
    id: 'aurora_borealis',
    nameAr: 'الشفق القطبي',
    nameEn: 'Aurora Borealis',
    descAr: 'ألوان متعددة مع توهج سحري — شفق قطبي مبهر',
    descEn: 'Multi-colored with magical glow — breathtaking aurora',
    category: 'nature',
    gradientCSS: 'linear-gradient(135deg, #0a0a20 0%, #0a2040 20%, #106040 40%, #30a050 55%, #60d080 70%, #a0e0a0 85%, #80c0e0 100%)',
    values: {
      shadows:    { hue: 280, sat: 40 },
      midtones:   { hue: 150, sat: 45 },
      highlights: { hue: 150, sat: 50 },
      temperature: -20,
      tint: -10,
      contrast: 15,
      saturation: 20,
      vibrance: 50,
      fade: 0,
      grain: 0,
      bloom: 45,
    }
  },
];
