'use client';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { SECTIONS, PLATFORMS, SCORE_CATS, CONFLICTS } from '@/data/sections';
import { COLOR_PRESETS, PRESET_CATEGORIES } from '@/data/colorPresets';
import type { PresetCategory } from '@/data/colorPresets';
import type { Language, ColorGradingState, ChatMessage } from '@/types';
import { buildSystemPrompt } from '@/lib/systemPrompt';

interface HistoryEntry {
  id: string;
  prompt: string;
  selections: Record<string, string | string[]>;
  subject: string;
  platform: string;
  score: number;
  timestamp: number;
  colorGrading?: ColorGradingState;
  activePreset?: string | null;
  colorRule60?: string | null;
  colorRule30?: string | null;
  colorRule10?: string | null;
  title?: string;
}

const initialColorGrading: ColorGradingState = {
  shadows: { hue: 0, sat: 0 },
  midtones: { hue: 0, sat: 0 },
  highlights: { hue: 0, sat: 0 },
  temperature: 0,
  tint: 0,
  contrast: 0,
  saturation: 0,
  vibrance: 0,
  fade: 0,
  grain: 0,
  bloom: 0,
};

function getHueColor(hue: number): string {
  if (hue < 20 || hue >= 340) return 'warm red-tinted';
  if (hue < 50) return 'golden amber-toned';
  if (hue < 80) return 'warm yellow-tinted';
  if (hue < 160) return 'green-tinted';
  if (hue < 260) return 'cool blue-tinted';
  if (hue < 295) return 'indigo-tinted';
  return 'magenta-tinted';
}

function generateColorPrompt(state: ColorGradingState): string {
  const parts: string[] = [];
  if (state.shadows.sat > 0) {
    const color = getHueColor(state.shadows.hue);
    if (state.shadows.sat <= 15) parts.push(`subtly ${color} shadows`);
    else if (state.shadows.sat <= 50) parts.push(`${color} shadows`);
    else parts.push(`deeply ${color} shadows`);
  }
  if (state.midtones.sat > 0) {
    const color = getHueColor(state.midtones.hue);
    if (state.midtones.sat <= 15) parts.push(`subtly ${color} midtones`);
    else if (state.midtones.sat <= 50) parts.push(`${color} midtones`);
    else parts.push(`vividly ${color} midtones`);
  }
  if (state.highlights.sat > 0) {
    const color = getHueColor(state.highlights.hue);
    if (state.highlights.sat <= 15) parts.push(`softly ${color} highlights`);
    else if (state.highlights.sat <= 50) parts.push(`${color} highlights`);
    else parts.push(`intensely ${color} highlights`);
  }
  if (state.temperature > 0) {
    if (state.temperature <= 40) parts.push("warm color temperature");
    else if (state.temperature <= 75) parts.push("warm color temperature with golden undertones");
    else parts.push("intensely warm golden hour color palette");
  } else if (state.temperature < 0) {
    const abs = Math.abs(state.temperature);
    if (abs <= 40) parts.push("cool color temperature");
    else if (abs <= 75) parts.push("cool color temperature with blue undertones");
    else parts.push("frosty cool-toned color palette");
  }
  if (state.tint > 0) {
    if (state.tint <= 50) parts.push("slight magenta tint shift");
    else parts.push("stylized magenta-purple tinting");
  } else if (state.tint < 0) {
    const abs = Math.abs(state.tint);
    if (abs <= 50) parts.push("slight green tint shift");
    else parts.push("cinematic green-cyan color grading");
  }
  if (state.contrast > 0) {
    if (state.contrast <= 50) parts.push("high contrast");
    else parts.push("high contrast with deep crushed blacks");
  } else if (state.contrast < 0) {
    const abs = Math.abs(state.contrast);
    if (abs <= 50) parts.push("low contrast");
    else parts.push("low contrast, flat profile with soft details");
  }
  if (state.saturation > 0) {
    if (state.saturation <= 50) parts.push("richly saturated colors");
    else parts.push("highly saturated, vibrant color palette");
  } else if (state.saturation < 0) {
    if (state.saturation === -100) parts.push("monochrome, pure black and white");
    else if (Math.abs(state.saturation) <= 50) parts.push("desaturated colors");
    else parts.push("heavily desaturated muted palette");
  }
  if (state.vibrance > 0) {
    if (state.vibrance <= 50) parts.push("vibrant selective color boost");
    else parts.push("strikingly vivid color accents");
  }
  if (state.fade > 0) {
    if (state.fade <= 50) parts.push("lifted blacks, vintage film fade");
    else parts.push("heavy matte look, faded film aesthetics");
  }
  if (state.grain > 0) {
    if (state.grain <= 35) parts.push("subtle analog film grain");
    else if (state.grain <= 70) parts.push("cinematic film grain");
    else parts.push("heavy coarse analog film grain");
  }
  if (state.bloom > 0) {
    if (state.bloom <= 50) parts.push("soft diffused bloom");
    else parts.push("dreamy diffused glow, halation bloom");
  }
  return parts.join(', ');
}

export function usePromptEngine() {
  const [lang, setLang] = useState<Language>('ar');
  const [selections, setSelections] = useState<Record<string, string | string[]>>({});
  const [activeSection, setActiveSection] = useState(SECTIONS[0].key);
  const [activePlatform, setActivePlatform] = useState('kling3');
  const [subject, setSubject] = useState('');
  const [activeView, setActiveView] = useState<'main' | 'history' | 'colorlab' | 'assistant'>('main');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [colorGrading, setColorGradingRaw] = useState<ColorGradingState>(initialColorGrading);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [presetCategory, setPresetCategory] = useState<PresetCategory>('hollywood');
  const [colorRule60, setColorRule60] = useState<string | null>(null);
  const [colorRule30, setColorRule30] = useState<string | null>(null);
  const [colorRule10, setColorRule10] = useState<string | null>(null);

  // ═══ CINEMA ASSISTANT STATE ═══
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [isColorLabLinked, setIsColorLabLinked] = useState(false);
  const [aiApiKey, setAiApiKeyRaw] = useState('');
  const [activeColorTemplate, setActiveColorTemplate] = useState<HistoryEntry | null>(null);

  // Wrap setColorGrading to clear active preset on manual edits
  const setColorGrading: typeof setColorGradingRaw = useCallback((action) => {
    setActivePreset(null);
    setColorGradingRaw(action);
  }, []);

  const setColorRule = useCallback((slot: 'colorRule60' | 'colorRule30' | 'colorRule10', colorName: string | null) => {
    if (slot === 'colorRule60') setColorRule60(colorName);
    else if (slot === 'colorRule30') setColorRule30(colorName);
    else if (slot === 'colorRule10') setColorRule10(colorName);
  }, []);

  const resetColorRule = useCallback(() => {
    setColorRule60(null);
    setColorRule30(null);
    setColorRule10(null);
  }, []);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tura-history');
      if (saved) {
        const parsed = JSON.parse(saved);
        setTimeout(() => setHistory(parsed), 0);
      }
    } catch {}
  }, []);

  // Save history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tura-history', JSON.stringify(history));
    } catch {}
  }, [history]);

  // Load AI API key from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tura-ai-key');
      if (saved) setAiApiKeyRaw(saved);
    } catch {}
  }, []);

  const saveAiApiKey = useCallback((key: string) => {
    setAiApiKeyRaw(key);
    try { localStorage.setItem('tura-ai-key', key); } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const langs: Language[] = ['ar', 'en', 'fr', 'es', 'ko', 'zh'];
      const idx = langs.indexOf(prev);
      return langs[(idx + 1) % langs.length];
    });
  }, []);

  const toggleOption = useCallback((cat: string, val: string) => {
    const MULTI_SELECT_CATS = [
      'technique',
      'mod_lenses',
      'mod_framing',
      'mod_color',
      'camera_motion_dynamics',
      'lighting_setup'
    ];
    setSelections(prev => {
      const next = { ...prev };
      const isMulti = MULTI_SELECT_CATS.includes(cat);
      if (isMulti) {
        const currentList = Array.isArray(next[cat]) ? (next[cat] as string[]) : next[cat] ? [next[cat] as string] : [];
        if (currentList.includes(val)) {
          const updated = currentList.filter(v => v !== val);
          if (updated.length === 0) {
            delete next[cat];
          } else {
            next[cat] = updated;
          }
        } else {
          next[cat] = [...currentList, val];
        }
      } else {
        if (next[cat] === val) {
          delete next[cat];
        } else {
          next[cat] = val;
        }
      }
      return next;
    });
  }, []);

  const applySelections = useCallback((
    sel: Record<string, string | string[]>,
    grading?: ColorGradingState,
    preset?: string | null,
    c60?: string | null,
    c30?: string | null,
    c10?: string | null
  ) => {
    setSelections(sel);
    if (grading) {
      setColorGradingRaw(grading);
    } else {
      setColorGradingRaw(initialColorGrading);
    }
    setActivePreset(preset !== undefined ? preset : null);
    setColorRule60(c60 || null);
    setColorRule30(c30 || null);
    setColorRule10(c10 || null);
    setActiveView('main');
  }, []);

  const clearAll = useCallback(() => {
    setSelections({});
    setSubject('');
    setColorGradingRaw(initialColorGrading);
    setActivePreset(null);
    setColorRule60(null);
    setColorRule30(null);
    setColorRule10(null);
  }, []);

  const resetColorGrading = useCallback(() => {
    setColorGradingRaw(initialColorGrading);
    setActivePreset(null);
  }, []);

  const applyColorPreset = useCallback((presetId: string) => {
    const preset = COLOR_PRESETS.find(p => p.id === presetId);
    if (!preset) return;
    if (activePreset === presetId) {
      // Toggle off: reset to default
      setColorGradingRaw(initialColorGrading);
      setActivePreset(null);
    } else {
      setColorGradingRaw(preset.values);
      setActivePreset(presetId);
    }
  }, [activePreset]);

  const selectionCount = Object.keys(selections).length;

  const colorPrompt = useMemo(() => {
    return generateColorPrompt(colorGrading);
  }, [colorGrading]);

  const colorRulePrompt = useMemo(() => {
    const parts: string[] = [];
    if (colorRule60) parts.push(`60% dominant [${colorRule60}]`);
    if (colorRule30) parts.push(`30% secondary [${colorRule30}]`);
    if (colorRule10) parts.push(`10% vivid accent [${colorRule10}]`);
    if (parts.length === 0) return '';
    return `strict 60-30-10 color palette: ${parts.join(', ')}`;
  }, [colorRule60, colorRule30, colorRule10]);

  const score = useMemo(() => {
    const cats = SCORE_CATS.map(sc => {
      const filled = sc.keys.some(k => {
        const val = selections[k];
        if (Array.isArray(val)) return val.length > 0;
        return !!val;
      });
      return { ...sc, filled };
    });
    const total = cats.reduce((sum, sc) => sum + (sc.filled ? sc.pts : 0), 0);
    return { total, cats };
  }, [selections]);

  const prompt = useMemo(() => {
    const parts: string[] = [];
    if (subject.trim()) parts.push(subject.trim());
    const order = [
      'camera_body', 'lens_type', 'focal_length', 'aperture', 'depth_of_field',
      'shot_size', 'subject_scale', 'advanced_framing', 'camera_movement', 'camera_motion_dynamics',
      'lighting_setup', 'env_lighting_texture',
      'composition_style',
      'technique',
      'aspect_ratio',
      'mod_lenses', 'mod_framing', 'mod_color', 'mod_camera'
    ];
    for (const key of order) {
      const val = selections[key];
      if (!val) continue;
      const values = Array.isArray(val) ? val : [val];
      for (const singleVal of values) {
        for (const sec of SECTIONS) {
          for (const grp of sec.groups) {
            if (grp.cat !== key) continue;
            const item = grp.items.find(i => i.ar === singleVal);
            if (item) parts.push(item.prompt);
          }
        }
      }
    }
    for (const [key, val] of Object.entries(selections)) {
      if (order.includes(key)) continue;
      if (!val) continue;
      const values = Array.isArray(val) ? val : [val];
      for (const singleVal of values) {
        for (const sec of SECTIONS) {
          for (const grp of sec.groups) {
            if (grp.cat !== key) continue;
            const item = grp.items.find(i => i.ar === singleVal);
            if (item) parts.push(item.prompt);
          }
        }
      }
    }
    let result = parts.join(', ').trim();
    if (colorPrompt) {
      if (result) {
        result += ', ' + colorPrompt;
      } else {
        result = colorPrompt;
      }
    }
    if (colorRulePrompt) {
      if (result) {
        result += ', ' + colorRulePrompt;
      } else {
        result = colorRulePrompt;
      }
    }
    return result;
  }, [selections, subject, colorPrompt, colorRulePrompt]);

  const conflicts = useMemo(() => {
    return CONFLICTS.filter(c => {
      const valA = selections[c.a];
      const valB = selections[c.b];
      const hasA = Array.isArray(valA) ? valA.includes(c.va) : valA === c.va;
      const hasB = Array.isArray(valB) ? valB.includes(c.vb) : valB === c.vb;
      return hasA && hasB;
    });
  }, [selections]);

  const saveToHistory = useCallback((title: string) => {
    if (!prompt) return false;
    const entry: HistoryEntry = {
      id: Date.now().toString(36),
      prompt, selections: { ...selections }, subject,
      platform: activePlatform,
      score: score.total,
      timestamp: Date.now(),
      colorGrading: { ...colorGrading },
      activePreset,
      colorRule60,
      colorRule30,
      colorRule10,
      title: title || undefined
    };
    setHistory(prev => [entry, ...prev].slice(0, 50));
    return true;
  }, [prompt, selections, subject, activePlatform, score.total, colorGrading, activePreset, colorRule60, colorRule30, colorRule10]);

  const deleteHistoryEntry = useCallback((id: string) => {
    setHistory(prev => prev.filter(e => e.id !== id));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const currentSection = SECTIONS.find(s => s.key === activeSection) || SECTIONS[0];

  // ═══ CINEMA ASSISTANT: SEND MESSAGE ═══
  const sendChatMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim() || !aiApiKey) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(36) + 'u',
      role: 'user',
      content: userMessage.trim(),
      timestamp: Date.now(),
    };

    setChatMessages(prev => [...prev, userMsg]);
    setIsChatLoading(true);

    try {
      // Build color lab data string if linked
      let colorData: string | null = null;
      if (isColorLabLinked) {
        const parts: string[] = [];
        if (activeColorTemplate) {
          parts.push(`--- SELECTED COLOR TEMPLATE (from Project: ${activeColorTemplate.title || 'Untitled'}) ---`);
          // Extract color grading details from the template
          if (activeColorTemplate.colorGrading) {
            const tempGradingParts = [];
            const cg = activeColorTemplate.colorGrading;
            if (cg.shadows.sat > 0) tempGradingParts.push(`Shadows: Hue ${cg.shadows.hue}°, Saturation ${cg.shadows.sat}%`);
            if (cg.midtones.sat > 0) tempGradingParts.push(`Midtones: Hue ${cg.midtones.hue}°, Saturation ${cg.midtones.sat}%`);
            if (cg.highlights.sat > 0) tempGradingParts.push(`Highlights: Hue ${cg.highlights.hue}°, Saturation ${cg.highlights.sat}%`);
            if (cg.temperature !== 0) tempGradingParts.push(`Temperature Shift: ${cg.temperature}`);
            if (cg.tint !== 0) tempGradingParts.push(`Tint Shift: ${cg.tint}`);
            if (cg.contrast !== 0) tempGradingParts.push(`Contrast Shift: ${cg.contrast}`);
            if (cg.saturation !== 0) tempGradingParts.push(`Saturation: ${cg.saturation}`);
            if (cg.vibrance !== 0) tempGradingParts.push(`Vibrance: ${cg.vibrance}`);
            if (cg.fade !== 0) tempGradingParts.push(`Fade: ${cg.fade}`);
            if (cg.grain !== 0) tempGradingParts.push(`Film Grain: ${cg.grain}`);
            if (cg.bloom !== 0) tempGradingParts.push(`Bloom: ${cg.bloom}`);
            if (tempGradingParts.length > 0) parts.push(`Color Grading: ${tempGradingParts.join(', ')}`);
          }
          if (activeColorTemplate.activePreset) {
            const pr = COLOR_PRESETS.find(p => p.id === activeColorTemplate.activePreset);
            if (pr) parts.push(`Cinematic Color Preset: ${pr.nameEn} (${pr.descEn})`);
          }
          const rules = [];
          if (activeColorTemplate.colorRule60) rules.push(`60% dominant [${activeColorTemplate.colorRule60}]`);
          if (activeColorTemplate.colorRule30) rules.push(`30% secondary [${activeColorTemplate.colorRule30}]`);
          if (activeColorTemplate.colorRule10) rules.push(`10% accent [${activeColorTemplate.colorRule10}]`);
          if (rules.length > 0) parts.push(`60-30-10 Palette Rule: ${rules.join(', ')}`);
        } else {
          if (colorPrompt) parts.push(colorPrompt);
          if (colorRulePrompt) parts.push(colorRulePrompt);
          if (activePreset) {
            const preset = COLOR_PRESETS.find(p => p.id === activePreset);
            if (preset) parts.push(`Active Preset: ${preset.nameEn}`);
          }
        }
        if (parts.length > 0) colorData = parts.join('\n');
      }

      const sysPrompt = buildSystemPrompt(lang, colorData);

      // Build messages array (last 20 messages for context window)
      const recentMessages = [...chatMessages, userMsg].slice(-20).map(m => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey: aiApiKey,
          messages: recentMessages,
          systemPrompt: sysPrompt,
          lang,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errMsg: ChatMessage = {
          id: Date.now().toString(36) + 'e',
          role: 'assistant',
          content: data.error || (lang === 'ar' ? 'حدث خطأ في الاتصال' : 'Connection error'),
          timestamp: Date.now(),
        };
        setChatMessages(prev => [...prev, errMsg]);
      } else {
        const assistantMsg: ChatMessage = {
          id: Date.now().toString(36) + 'a',
          role: 'assistant',
          content: data.content,
          timestamp: Date.now(),
        };
        setChatMessages(prev => [...prev, assistantMsg]);
      }
    } catch {
      const errMsg: ChatMessage = {
        id: Date.now().toString(36) + 'x',
        role: 'assistant',
        content: lang === 'ar' ? 'خطأ في الاتصال بالخادم. تأكد من اتصالك بالإنترنت.' : 'Server connection error. Check your internet connection.',
        timestamp: Date.now(),
      };
      setChatMessages(prev => [...prev, errMsg]);
    } finally {
      setIsChatLoading(false);
    }
  }, [aiApiKey, chatMessages, isColorLabLinked, colorPrompt, colorRulePrompt, activePreset, lang, activeColorTemplate]);

  const clearChat = useCallback(() => {
    setChatMessages([]);
  }, []);

  return {
    lang, toggleLang, setLang,
    selections, toggleOption, applySelections, clearAll, selectionCount,
    activeSection, setActiveSection, currentSection,
    activeView, setActiveView,
    activePlatform, setActivePlatform,
    subject, setSubject,
    score, prompt, conflicts,
    sections: SECTIONS, platforms: PLATFORMS,
    // Color Lab
    colorGrading, setColorGrading, resetColorGrading, colorPrompt,
    // Color Presets
    activePreset, applyColorPreset,
    presetCategory, setPresetCategory,
    colorPresets: COLOR_PRESETS, presetCategories: PRESET_CATEGORIES,
    // 60-30-10 Color Rule
    colorRule60, colorRule30, colorRule10, setColorRule, resetColorRule, colorRulePrompt,
    // History
    history, saveToHistory, deleteHistoryEntry, clearHistory,
    // Cinema Assistant
    chatMessages, isChatLoading, sendChatMessage, clearChat,
    isColorLabLinked, setIsColorLabLinked,
    aiApiKey, saveAiApiKey,
    activeColorTemplate, setActiveColorTemplate,
  };
}
