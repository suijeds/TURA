'use client';
import { usePromptEngine } from '@/hooks/usePromptEngine';
import React, { useState, useEffect, useRef } from 'react';
import { COLOR_DATABASE } from '@/data/colorDatabase';
import { CONFLICTS } from '@/data/sections';
import Link from 'next/link';
import type { Conflict, OptionItem, OptionGroup, Language } from '@/types';
import {
  UI_TRANSLATIONS,
  SECTION_TRANSLATIONS,
  GROUP_TRANSLATIONS,
  ITEM_TRANSLATIONS,
  CONFLICT_TRANSLATIONS
} from '@/data/translations';

// ═══ SVG ICONS ═══
const Icons: Record<string, React.JSX.Element> = {
  camera: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  lens: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  frame: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><line x1="8" y1="2" x2="8" y2="22"/></svg>,
  movement: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 9l7-7 7 7"/><path d="M12 2v14"/><circle cx="12" cy="21" r="1"/></svg>,
  eye: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>,
  moon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
  palette: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r="2"/><circle cx="17.5" cy="10.5" r="2"/><circle cx="8.5" cy="7.5" r="2"/><circle cx="6.5" cy="12.5" r="2"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.4-1.2-.3-.4-.5-.8-.5-1.3 0-.9.8-1.7 1.7-1.7H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.8-10-10z"/></svg>,
  light: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/></svg>,
  sun: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>,
  cloud: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
  map: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
  copy: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>,
  trash: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>,
  save: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>,
  globe: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z"/></svg>,
  settings: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  build: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>,
  palette_icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  history: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
};

function getIcon(name: string) {
  return Icons[name] || Icons.camera;
}

// ═══ TOAST ═══
function useToast() {
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);
  const flash = (text: string) => {
    setMsg(text);
    setShow(true);
    setTimeout(() => setShow(false), 2000);
  };
  return { msg, show, flash };
}

// ═══ MAIN ENGINE PAGE ═══
export default function EnginePage() {
  const engine = usePromptEngine();
  const { msg: toastMsg, show: toastShow, flash } = useToast();
  const [mobileView, setMobileView] = useState<'sections' | 'main' | 'prompt'>('main');
  const [langOpen, setLangOpen] = useState(false);
  const l = engine.lang;
  const isConflicting = (cat: string, valueAr: string): { conflicting: boolean; reason?: string } => {
    for (const conflict of CONFLICTS) {
      let itemEn = '';
      for (const sec of engine.sections) {
        for (const g of sec.groups) {
          if (g.cat === cat) {
            const found = g.items.find(i => i.ar === valueAr);
            if (found) {
              itemEn = found.en;
              break;
            }
          }
        }
      }

      const matchesA = (conflict.a === cat) && (conflict.va === valueAr || conflict.va === itemEn);
      const matchesB = (conflict.b === cat) && (conflict.vb === valueAr || conflict.vb === itemEn);

      const hasMatch = (selectedVal: string | string[] | undefined, targetVal: string): boolean => {
        if (!selectedVal) return false;
        const vals = Array.isArray(selectedVal) ? selectedVal : [selectedVal];
        for (const v of vals) {
          if (v === targetVal) return true;
          let resolvedEn = '';
          for (const sec of engine.sections) {
            for (const g of sec.groups) {
              const found = g.items.find(i => i.ar === v);
              if (found) {
                resolvedEn = found.en;
                break;
              }
            }
          }
          if (targetVal === resolvedEn) return true;
        }
        return false;
      };

      if (matchesA) {
        if (hasMatch(engine.selections[conflict.b], conflict.vb)) {
          return { conflicting: true, reason: l === 'ar' ? conflict.msgAr : conflict.msgEn };
        }
      }

      if (matchesB) {
        if (hasMatch(engine.selections[conflict.a], conflict.va)) {
          return { conflicting: true, reason: l === 'ar' ? conflict.msgAr : conflict.msgEn };
        }
      }
    }
    return { conflicting: false };
  };

  // Coupon & Premium Plan States
  const [couponCode, setCouponCode] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  // Save Project States
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [projectNameInput, setProjectNameInput] = useState('');

  // Settings & Theme states
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsLangOpen, setSettingsLangOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Load and apply theme on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('tura-theme');
      if (savedTheme === 'light') {
        setIsDarkTheme(false);
        document.body.classList.add('light');
      } else {
        setIsDarkTheme(true);
        document.body.classList.remove('light');
      }
    } catch {}
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(prev => {
      const next = !prev;
      try {
        localStorage.setItem('tura-theme', next ? 'dark' : 'light');
      } catch {}
      if (next) {
        document.body.classList.remove('light');
      } else {
        document.body.classList.add('light');
      }
      return next;
    });
  };

  // Load premium state on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tura-premium');
      if (saved === 'true') {
        setIsPremium(true);
      }
    } catch {}
  }, []);

  const handleApplyCoupon = (code: string) => {
    if (code.trim().toUpperCase() === 'SUIJEDS') {
      setIsPremium(true);
      setCouponSuccess(l === 'ar' ? 'تم تفعيل كوبون الوصول الكامل المجاني بنجاح! ✦' : 'Free Full Access Coupon Activated Successfully! ✦');
      setCouponError('');
      try {
        localStorage.setItem('tura-premium', 'true');
      } catch {}
    } else {
      setCouponError(l === 'ar' ? 'كود الكوبون غير صحيح' : 'Invalid coupon code');
      setCouponSuccess('');
    }
  };

  // 60-30-10 Color Rule Local States
  const [searchQuery60, setSearchQuery60] = useState('');
  const [searchQuery30, setSearchQuery30] = useState('');
  const [searchQuery10, setSearchQuery10] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState<{ c60: boolean; c30: boolean; c10: boolean }>({
    c60: false,
    c30: false,
    c10: false
  });

  const dropdownRef60 = useRef<HTMLDivElement>(null);
  const dropdownRef30 = useRef<HTMLDivElement>(null);
  const dropdownRef10 = useRef<HTMLDivElement>(null);

  // Sync inputs with selected values from usePromptEngine hook
  useEffect(() => {
    setSearchQuery60(engine.colorRule60 ? (l === 'ar' ? (COLOR_DATABASE.find(c => c.name === engine.colorRule60)?.nameAr || engine.colorRule60) : engine.colorRule60) : '');
  }, [engine.colorRule60, l]);

  useEffect(() => {
    setSearchQuery30(engine.colorRule30 ? (l === 'ar' ? (COLOR_DATABASE.find(c => c.name === engine.colorRule30)?.nameAr || engine.colorRule30) : engine.colorRule30) : '');
  }, [engine.colorRule30, l]);

  useEffect(() => {
    setSearchQuery10(engine.colorRule10 ? (l === 'ar' ? (COLOR_DATABASE.find(c => c.name === engine.colorRule10)?.nameAr || engine.colorRule10) : engine.colorRule10) : '');
  }, [engine.colorRule10, l]);

  // Click outside to close color rule dropdowns & settings
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (dropdownRef60.current && !dropdownRef60.current.contains(target)) {
        setDropdownOpen(prev => ({ ...prev, c60: false }));
        setSearchQuery60(engine.colorRule60 ? (l === 'ar' ? (COLOR_DATABASE.find(c => c.name === engine.colorRule60)?.nameAr || engine.colorRule60) : engine.colorRule60) : '');
      }
      
      if (dropdownRef30.current && !dropdownRef30.current.contains(target)) {
        setDropdownOpen(prev => ({ ...prev, c30: false }));
        setSearchQuery30(engine.colorRule30 ? (l === 'ar' ? (COLOR_DATABASE.find(c => c.name === engine.colorRule30)?.nameAr || engine.colorRule30) : engine.colorRule30) : '');
      }
      
      if (dropdownRef10.current && !dropdownRef10.current.contains(target)) {
        setDropdownOpen(prev => ({ ...prev, c10: false }));
        setSearchQuery10(engine.colorRule10 ? (l === 'ar' ? (COLOR_DATABASE.find(c => c.name === engine.colorRule10)?.nameAr || engine.colorRule10) : engine.colorRule10) : '');
      }

      if (settingsRef.current && !settingsRef.current.contains(target)) {
        setSettingsOpen(false);
        setSettingsLangOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [engine.colorRule60, engine.colorRule30, engine.colorRule10, l]);

  const getFilteredColors = (query: string) => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return COLOR_DATABASE;
    return COLOR_DATABASE.filter(c =>
      c.name.toLowerCase().includes(cleanQuery) ||
      c.nameAr.toLowerCase().includes(cleanQuery)
    );
  };

  const getCategoryTitle = (cat: string) => {
    const titles: Record<string, Record<string, string>> = {
      basic: { ar: 'ألوان أساسية', en: 'Basic Colors', fr: 'Couleurs de Base', es: 'Colores Básicos', ko: '기본 색상', zh: '基本颜色' },
      cinematic: { ar: 'ألوان سينمائية', en: 'Cinematic Colors', fr: 'Couleurs Cinématographiques', es: 'Colores Cinematográficos', ko: '시네마틱 색상', zh: '电影色彩' },
      nature: { ar: 'ألوان الطبيعة والمواد', en: 'Nature & Materials', fr: 'Nature & Matériaux', es: 'Naturaleza y Materiales', ko: '자연 및 소재 색상', zh: '自然与材质色彩' },
      pastel: { ar: 'ألوان باستيل', en: 'Pastel Colors', fr: 'Couleurs Pastel', es: 'Colores Pastel', ko: '파스텔 색상', zh: '马卡龙/粉彩色' },
      neon: { ar: 'ألوان نيون', en: 'Neon Colors', fr: 'Couleurs Néon', es: 'Colores Neón', ko: '네온 색상', zh: '霓虹色' },
      metallic: { ar: 'ألوان معدنية', en: 'Metallic Colors', fr: 'Couleurs Métalliques', es: 'Colores Metálicos', ko: '메탈릭 색상', zh: '金属色' },
      warm: { ar: 'ألوان دافئة متقدمة', en: 'Advanced Warm Colors', fr: 'Couleurs Chaudes', es: 'Colores Cálidos', ko: '고급 웜톤 색상', zh: '高级暖色' },
      cool: { ar: 'ألوان باردة متقدمة', en: 'Advanced Cool Colors', fr: 'Couleurs Froides', es: 'Colores Fríos', ko: '고급 쿨톤 색상', zh: '高级冷色' }
    };
    return titles[cat]?.[l] || titles[cat]?.['en'] || cat;
  };

  const [draggingWheel, setDraggingWheel] = useState<'shadows' | 'midtones' | 'highlights' | null>(null);

  const startDrag = (wheelKey: 'shadows' | 'midtones' | 'highlights') => {
    setDraggingWheel(wheelKey);
  };

  useEffect(() => {
    if (!draggingWheel) return;

    const handleMove = (clientX: number, clientY: number) => {
      const container = document.getElementById(`wheel-${draggingWheel}`);
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const clickX = clientX - cx;
      const clickY = clientY - cy;
      const r = rect.width / 2;

      const dist = Math.sqrt(clickX * clickX + clickY * clickY);
      const sat = Math.min(100, Math.round((dist / r) * 100));

      let angle = Math.atan2(clickY, clickX) * (180 / Math.PI);
      let hue = Math.round(angle + 90);
      if (hue < 0) hue += 360;
      if (hue >= 360) hue -= 360;

      engine.setColorGrading(prev => ({
        ...prev,
        [draggingWheel]: { hue, sat }
      }));
    };

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onMouseUp = () => {
      setDraggingWheel(null);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [draggingWheel, engine]);

  const renderColorWheel = (wheelKey: 'shadows' | 'midtones' | 'highlights', label: string) => {
    const val = engine.colorGrading[wheelKey];
    const r = 65; // wheel radius (130px / 2)
    const mathAngle = (val.hue - 90) * (Math.PI / 180);
    const x = Math.cos(mathAngle) * (val.sat / 100) * r;
    const y = Math.sin(mathAngle) * (val.sat / 100) * r;

    return (
      <div className="color-wheel-wrapper" key={wheelKey}>
        <span className="color-wheel-label">{label}</span>
        <div
          id={`wheel-${wheelKey}`}
          className="color-wheel-container"
          onDoubleClick={() => {
            engine.setColorGrading(prev => ({ ...prev, [wheelKey]: { hue: 0, sat: 0 } }));
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            startDrag(wheelKey);
            const rect = e.currentTarget.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const clickX = e.clientX - cx;
            const clickY = e.clientY - cy;
            const dist = Math.sqrt(clickX * clickX + clickY * clickY);
            const sat = Math.min(100, Math.round((dist / (rect.width / 2)) * 100));
            let angle = Math.atan2(clickY, clickX) * (180 / Math.PI);
            let hue = Math.round(angle + 90);
            if (hue < 0) hue += 360;
            if (hue >= 360) hue -= 360;
            engine.setColorGrading(prev => ({ ...prev, [wheelKey]: { hue, sat } }));
          }}
          onTouchStart={(e) => {
            startDrag(wheelKey);
            if (e.touches.length > 0) {
              const rect = e.currentTarget.getBoundingClientRect();
              const cx = rect.left + rect.width / 2;
              const cy = rect.top + rect.height / 2;
              const clickX = e.touches[0].clientX - cx;
              const clickY = e.touches[0].clientY - cy;
              const dist = Math.sqrt(clickX * clickX + clickY * clickY);
              const sat = Math.min(100, Math.round((dist / (rect.width / 2)) * 100));
              let angle = Math.atan2(clickY, clickX) * (180 / Math.PI);
              let hue = Math.round(angle + 90);
              if (hue < 0) hue += 360;
              if (hue >= 360) hue -= 360;
              engine.setColorGrading(prev => ({ ...prev, [wheelKey]: { hue, sat } }));
            }
          }}
        >
          <div
            className="wheel-handle"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`
            }}
          />
        </div>
        <div className="color-wheel-readout">
          {val.hue}° / {val.sat}%
        </div>
      </div>
    );
  };

  const isDarkColor = (hex: string | null) => {
    if (!hex) return false;
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  const renderColorRuleSlot = (
    slotKey: 'colorRule60' | 'colorRule30' | 'colorRule10',
    label: string,
    searchQuery: string,
    setSearchQuery: (q: string) => void,
    isOpen: boolean,
    setOpen: (open: boolean) => void,
    dropdownRef: React.RefObject<HTMLDivElement | null>
  ) => {
    const selectedColorName = engine[slotKey];
    const selectedColor = COLOR_DATABASE.find(c => c.name === selectedColorName);
    const filtered = getFilteredColors(searchQuery);
    const categories = Array.from(new Set(filtered.map(c => c.category)));

    return (
      <div className="color-rule-slot" ref={dropdownRef}>
        <label className="color-rule-label">{label}</label>
        <div className="color-search-wrapper">
          <input
            type="text"
            className="color-search-input"
            placeholder={tUI('searchColor')}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
          />
          {selectedColor && (
            <div
              className="input-swatch-indicator"
              style={{ backgroundColor: selectedColor.hex }}
            />
          )}
        </div>

        {isOpen && (
          <div className="color-dropdown">
            {categories.map(cat => {
              const catColors = filtered.filter(c => c.category === cat);
              if (catColors.length === 0) return null;
              return (
                <div key={cat}>
                  <div className="color-dropdown-category-header">
                    {getCategoryTitle(cat)}
                  </div>
                  {catColors.map(color => (
                    <div
                      key={color.name}
                      className={`color-dropdown-item ${selectedColorName === color.name ? 'selected' : ''}`}
                      onClick={() => {
                        engine.setColorRule(slotKey, color.name);
                        setSearchQuery(l === 'ar' ? color.nameAr : color.name);
                        setOpen(false);
                        flash(tUI('colorRuleApplied'));
                      }}
                    >
                      <div
                        className="color-swatch-circle"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="color-dropdown-item-names">
                        <span className="color-dropdown-item-name">
                          {l === 'ar' ? color.nameAr : color.name}
                        </span>
                        {l === 'ar' ? (
                          <span className="color-dropdown-item-en">{color.name}</span>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
            {filtered.length === 0 && (
              <div style={{ padding: '12px', fontSize: '0.8rem', color: 'var(--text4)', textAlign: 'center' }}>
                {l === 'ar' ? 'لا توجد ألوان مطابقة' : 'No matching colors'}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Click outside to close language dropdown
  useEffect(() => {
    if (!langOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.lang-dropdown-container')) {
        setLangOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [langOpen]);

  // Translation helpers
  const tUI = (key: string): string => {
    const trans = UI_TRANSLATIONS[key];
    if (!trans) return key;
    return (trans[l] as string) || (trans['en'] as string) || key;
  };

  const tSectionName = (key: string, defaultName: string): string => {
    return SECTION_TRANSLATIONS[key]?.name?.[l] || defaultName;
  };

  const tSectionTooltip = (key: string, defaultTooltip?: string): string => {
    return SECTION_TRANSLATIONS[key]?.tooltip?.[l] || defaultTooltip || '';
  };

  const tGroupName = (key: string, defaultName: string): string => {
    return GROUP_TRANSLATIONS[key]?.name?.[l] || defaultName;
  };

  const tGroupTooltip = (key: string, defaultTooltip?: string): string => {
    return GROUP_TRANSLATIONS[key]?.tooltip?.[l] || defaultTooltip || '';
  };

  const tItemName = (item: OptionItem): string => {
    return ITEM_TRANSLATIONS[item.en]?.name?.[l] || (l === 'ar' ? item.ar : item.en);
  };

  const tItemTooltip = (item: OptionItem): string => {
    return ITEM_TRANSLATIONS[item.en]?.tooltip?.[l] || (l === 'ar' ? item.tooltipAr || item.descAr : item.tooltipEn || item.descEn);
  };

  const tItemDesc = (item: OptionItem): string => {
    return ITEM_TRANSLATIONS[item.en]?.desc?.[l] || (l === 'ar' ? item.descAr : item.descEn);
  };

  const tConflict = (c: Conflict): string => {
    const key = c.msgEn.replace('⚠ ', '').trim();
    const trans = CONFLICT_TRANSLATIONS[key];
    if (trans) {
      return trans[l] || (l === 'ar' ? c.msgAr : c.msgEn);
    }
    return l === 'ar' ? c.msgAr : c.msgEn;
  };

  const tSelectionCount = (count: number): string => {
    switch (l) {
      case 'ar':
        return `${count} ${count <= 2 ? 'خيار' : 'خيارات'}`;
      case 'fr':
        return `${count} ${count === 1 ? 'option' : 'options'}`;
      case 'es':
        return `${count} ${count === 1 ? 'opción' : 'opciones'}`;
      case 'ko':
        return `${count}개 옵션`;
      case 'zh':
        return `${count} 个选项`;
      default:
        return `${count} ${count === 1 ? 'option' : 'options'}`;
    }
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    flash(tUI('copied'));
  };

  const copyPrompt = () => {
    if (!engine.prompt) { flash(tUI('noPromptCopy')); return; }
    copyText(engine.prompt);
  };

  const handleSave = () => {
    if (!engine.prompt) { flash(tUI('selectOptionsFirst')); return; }
    setProjectNameInput('');
    setShowSaveModal(true);
  };

  const confirmSave = () => {
    if (!engine.prompt) return;
    const title = projectNameInput.trim() || (l === 'ar' ? `مشروع سينمائي ${formatDate(Date.now())}` : `Cinematic Project ${formatDate(Date.now())}`);
    if (engine.saveToHistory(title)) {
      flash(l === 'ar' ? 'تم حفظ المشروع بنجاح!' : 'Project saved successfully!');
      setShowSaveModal(false);
    }
  };

  const clearAll = () => {
    engine.clearAll();
    flash(tUI('clearedMsg'));
  };



  // Format timestamp helper
  const formatDate = (ts: number) => {
    const d = new Date(ts);
    const localeMap: Record<string, string> = {
      ar: 'ar-EG',
      en: 'en-US',
      fr: 'fr-FR',
      es: 'es-ES',
      ko: 'ko-KR',
      zh: 'zh-CN'
    };
    return d.toLocaleDateString(localeMap[l] || 'en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div dir="rtl" style={{ direction: 'rtl' }}>
      {/* ══════ TOPBAR ══════ */}
      <header className="topbar">
        <Link href="/" className="logo" title={tUI('backToHome')}>
          TURA <span className="logo-version">v14</span>
        </Link>

        {/* View Switches */}
        <button className={`tb-btn desktop-only ${engine.activeView === 'main' ? 'active' : ''}`}
          data-tooltip-pos="bottom" data-tooltip={tUI('buildTooltip')}
          onClick={() => { engine.setActiveView('main'); setMobileView('main'); }}>
          {getIcon('build')}
          <span>{tUI('build')}</span>
        </button>



        <button className={`tb-btn desktop-only ${engine.activeView === 'colorlab' ? 'active' : ''}`}
          data-tooltip-pos="bottom" data-tooltip={tUI('colorLabTooltip')}
          onClick={() => { engine.setActiveView('colorlab'); setMobileView('main'); }}>
          {getIcon('palette')}
          <span>{tUI('colorLab')}</span>
        </button>

        {/* Separator to push the settings hamburger button to the far left side */}
        <div className="topbar-sep" />

        {/* Settings Hamburger Dropdown Container */}
        <div className="settings-dropdown-container" ref={settingsRef}>
          <button className={`tb-btn ${settingsOpen ? 'active' : ''}`} onClick={() => setSettingsOpen(!settingsOpen)} title={l === 'ar' ? 'الإعدادات والمظهر' : 'Settings & Themes'}>
            {getIcon('menu')}
          </button>
          
          <div className={`settings-dropdown-menu ${settingsOpen ? 'open' : ''}`}>
            {/* Theme switcher option */}
            <div className="settings-menu-item" onClick={toggleTheme}>
              <div className="settings-menu-label-wrapper">
                <span className="settings-menu-icon">{isDarkTheme ? getIcon('moon') : getIcon('sun')}</span>
                <span>{l === 'ar' ? 'المظهر النهاري / الليلي' : 'Day / Night Mode'}</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--accent)' }}>
                {isDarkTheme ? (l === 'ar' ? 'ليلي' : 'Night') : (l === 'ar' ? 'نهاري' : 'Day')}
              </span>
            </div>

            {/* Projects option (Previously History) */}
            <div className="settings-menu-item" onClick={() => { engine.setActiveView('history'); setSettingsOpen(false); setMobileView('main'); }}>
              <div className="settings-menu-label-wrapper">
                <span className="settings-menu-icon">📁</span>
                <span>{l === 'ar' ? 'المشاريع' : 'Projects'}</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--accent)' }}>
                {engine.history.length}
              </span>
            </div>

            {/* Language row */}
            <div className="settings-menu-item" onClick={() => setSettingsLangOpen(!settingsLangOpen)}>
              <div className="settings-menu-label-wrapper">
                <span className="settings-menu-icon">{getIcon('globe')}</span>
                <span>{l === 'ar' ? 'اللغة' : 'Language'}</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 4 }}>
                {
                  l === 'ar' ? '🇸🇦 عربي' :
                  l === 'en' ? '🇺🇸 English' :
                  l === 'fr' ? '🇫🇷 Français' :
                  l === 'es' ? '🇪🇸 Español' :
                  l === 'ko' ? '🇰🇷 한국어' : '🇨🇳 中文'
                }
                <span>{settingsLangOpen ? '▲' : '▼'}</span>
              </span>
            </div>

            {/* Expanded languages list */}
            {settingsLangOpen && (
              <div className="settings-lang-expanded-list" style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '4px 8px', borderTop: '1px solid var(--border)' }}>
                {[
                  { code: 'ar', label: 'عربي', flag: '🇸🇦' },
                  { code: 'en', label: 'English', flag: '🇺🇸' },
                  { code: 'fr', label: 'Français', flag: '🇫🇷' },
                  { code: 'es', label: 'Español', flag: '🇪🇸' },
                  { code: 'ko', label: '한국어', flag: '🇰🇷' },
                  { code: 'zh', label: '中文', flag: '🇨🇳' }
                ].map(item => (
                  <button
                    key={item.code}
                    className={`settings-menu-item ${l === item.code ? 'active' : ''}`}
                    style={{
                      background: l === item.code ? 'var(--accent-glow)' : 'transparent',
                      color: l === item.code ? 'var(--accent)' : 'var(--text2)',
                      padding: '6px 8px',
                      fontSize: '0.76rem'
                    }}
                    onClick={() => {
                      engine.setLang(item.code as Language);
                      setSettingsLangOpen(false);
                      setSettingsOpen(false);
                    }}
                  >
                    <span>{item.flag} {item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ══════ MAIN LAYOUT ══════ */}
      <div className="main-layout">

        {/* ── LEFT: SIDEBAR ── */}
        <nav className={`sidebar ${mobileView === 'sections' ? 'mobile-show' : ''}`}>
          <div className="nav-group-label">{tUI('coreSections')}</div>
          {engine.sections.map(sec => {
            const selCount = sec.groups.reduce((sum, g) => {
              const val = engine.selections[g.cat];
              if (Array.isArray(val)) return sum + (val.length > 0 ? 1 : 0);
              return sum + (val ? 1 : 0);
            }, 0);
            return (
              <div key={sec.key}
                className={`sec-nav-item ${engine.activeSection === sec.key ? 'active' : ''} ${selCount > 0 ? 'has-sel' : ''}`}
                data-tooltip={tSectionTooltip(sec.key, l === 'ar' ? sec.tooltipAr : sec.tooltipEn)}
                onClick={() => { engine.setActiveSection(sec.key); engine.setActiveView('main'); setMobileView('main'); }}>
                <div className="sec-icon">{getIcon(sec.icon)}</div>
                <span className="sec-name">{tSectionName(sec.key, l === 'ar' ? sec.ar : sec.en)}</span>
                <span className="sec-count">{selCount}</span>
              </div>
            );
          })}
        </nav>

        {/* ── CENTER: OPTIONS / PRESETS / TEMPLATES / HISTORY ── */}
        <main className="center-panel">

          {/* 1. MAIN BUILD VIEW */}
          <div className={`view ${engine.activeView === 'main' ? 'active' : ''}`}>
            {/* Section Header */}
            <div className="section-header" data-tooltip-pos="bottom" data-tooltip={tSectionTooltip(engine.currentSection.key, l === 'ar' ? engine.currentSection.tooltipAr : engine.currentSection.tooltipEn)}>
              <div className="section-icon">{getIcon(engine.currentSection.icon)}</div>
              <div>
                <div className="section-title">
                  {tSectionName(engine.currentSection.key, l === 'ar' ? engine.currentSection.ar : engine.currentSection.en)}
                </div>
                <div className="section-subtitle">
                  {(() => { const count = engine.currentSection.groups.reduce((s: number, g: OptionGroup) => s + g.items.length, 0); return tSelectionCount(count); })()}
                </div>
              </div>
            </div>

            {/* Option Groups */}
            {engine.currentSection.groups.map(grp => (
              <div className="option-group" key={grp.cat}>
                <div className="group-header" data-tooltip={tGroupTooltip(grp.cat, l === 'ar' ? grp.tooltipAr : grp.tooltipEn)}>
                  {tGroupName(grp.cat, l === 'ar' ? grp.ar : grp.en)}
                  <span className="group-count">{grp.items.length}</span>
                </div>
                <div className="options-grid">
                  {grp.items.map(item => {
                    const conflictCheck = isConflicting(grp.cat, item.ar);
                    const isConf = conflictCheck.conflicting;
                    return (
                      <div className="tooltip-wrap" key={item.ar}>
                        <div className={`opt-card ${(() => {
                          const val = engine.selections[grp.cat];
                          if (Array.isArray(val)) return val.includes(item.ar) ? 'selected' : '';
                          return val === item.ar ? 'selected' : '';
                        })()} ${isConf ? 'conflicting' : ''}`}
                          onClick={() => {
                            if (isConf) {
                              flash(conflictCheck.reason || '');
                              return;
                            }
                            engine.toggleOption(grp.cat, item.ar);
                          }}
                          style={isConf ? { opacity: 0.35, cursor: 'not-allowed', pointerEvents: 'auto' } : undefined}
                          title={isConf ? conflictCheck.reason : undefined}
                        >
                           <span className="opt-name-ar">{tItemName(item)}</span>
                           {l === 'ar' ? (
                             <span className="opt-name-en">{item.en}</span>
                           ) : l !== 'en' ? (
                             <span className="opt-name-en">{item.en}</span>
                           ) : null}
                           <p className="opt-desc">
                             {isConf ? (
                               <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>{conflictCheck.reason}</span>
                             ) : (
                               tItemTooltip(item)
                             )}
                           </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>



          {/* 4. HISTORY VIEW */}
          <div className={`view ${engine.activeView === 'history' ? 'active' : ''}`}>
            <div className="view-header">
              <div className="view-title-wrap">
                <span className="view-title-icon">📁</span>
                <span className="view-title-text">{l === 'ar' ? 'المشاريع المحفوظة' : 'Saved Projects'}</span>
              </div>

              {engine.history.length > 0 && (
                <button className="hist-btn danger" onClick={() => { engine.clearHistory(); flash(l === 'ar' ? 'تم مسح جميع المشاريع' : 'All projects cleared'); }}>
                  {getIcon('trash')}
                  <span>{tUI('clearAll')}</span>
                </button>
              )}
            </div>

            {engine.history.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text3)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 10 }}>📁</span>
                {l === 'ar' ? 'لا توجد مشاريع محفوظة بعد' : 'No saved projects yet'}
              </div>
            ) : (
              <div className="history-list">
                {engine.history.map(entry => (
                  <div key={entry.id} className="history-item">
                    <div className="history-main">
                      <div className="history-meta" style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}>
                        {entry.title && (
                          <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--accent)', marginBottom: 2 }}>
                            📁 {entry.title}
                          </div>
                        )}
                        <div style={{ display: 'flex', gap: 8, fontSize: '0.72rem', color: 'var(--text3)' }}>
                          <span className="history-time">{formatDate(entry.timestamp)}</span>
                          {entry.subject && <span>✦ {entry.subject}</span>}
                        </div>
                      </div>
                      <div className="history-prompt">{entry.prompt}</div>
                    </div>

                    <div className="history-actions">
                      <button className="hist-btn" title={tUI('copy')} onClick={() => copyText(entry.prompt)}>
                        {getIcon('copy')}
                      </button>
                      <button className="hist-btn" title={tUI('apply')} onClick={() => {
                        engine.applySelections(
                          entry.selections,
                          entry.colorGrading,
                          entry.activePreset,
                          entry.colorRule60,
                          entry.colorRule30,
                          entry.colorRule10
                        );
                        if (entry.subject) engine.setSubject(entry.subject);
                        flash(tUI('historyApplied'));
                      }}>
                        {getIcon('build')}
                        <span>{tUI('apply')}</span>
                      </button>
                      <button className="hist-btn danger" title={tUI('delete')} onClick={() => engine.deleteHistoryEntry(entry.id)}>
                        {getIcon('trash')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 5. COLOR LAB VIEW */}
          <div className={`view ${engine.activeView === 'colorlab' ? 'active' : ''}`}>
            <div className="colorlab-view">
              <div className="colorlab-header">
                <h2 className="colorlab-title">
                  {tUI('colorLab')}
                </h2>
                <p className="colorlab-description">
                  {tUI('colorLabIntro')}
                </p>
              </div>

              {/* ══════ CINEMATIC COLOR DICTIONARY ══════ */}
              <div className="color-presets-section">
                <div className="color-presets-header">
                  <div>
                    <div className="color-presets-title">
                      🎬 {tUI('colorDictionary')}
                    </div>
                    <div className="color-presets-subtitle">
                      {tUI('colorDictDescription')}
                    </div>
                  </div>
                  {engine.activePreset && (() => {
                    const preset = engine.colorPresets.find(p => p.id === engine.activePreset);
                    return preset ? (
                      <span className="preset-active-badge">
                        ✦ {l === 'ar' ? preset.nameAr : preset.nameEn}
                      </span>
                    ) : null;
                  })()}
                </div>

                {/* Category Tabs */}
                <div className="preset-categories-bar">
                  {engine.presetCategories.map(cat => (
                    <button
                      key={cat.id}
                      className={`preset-category-btn ${engine.presetCategory === cat.id ? 'active' : ''}`}
                      onClick={() => engine.setPresetCategory(cat.id)}
                    >
                      <span className="cat-icon">{cat.icon}</span>
                      {l === 'ar' ? cat.nameAr : cat.nameEn}
                    </button>
                  ))}
                </div>

                {/* Preset Cards Grid */}
                <div className="preset-grid" key={engine.presetCategory}>
                  {engine.colorPresets
                    .filter(p => p.category === engine.presetCategory)
                    .map(preset => (
                      <div
                        key={preset.id}
                        className={`preset-card ${engine.activePreset === preset.id ? 'active' : ''}`}
                        onClick={() => {
                          engine.applyColorPreset(preset.id);
                          if (engine.activePreset === preset.id) {
                            flash(tUI('presetRemoved'));
                          } else {
                            flash(tUI('presetApplied'));
                          }
                        }}
                      >
                        <div
                          className="preset-card-gradient"
                          style={{ background: preset.gradientCSS }}
                        />
                        <div className="preset-card-info">
                          <div className="preset-card-name">
                            {l === 'ar' ? preset.nameAr : preset.nameEn}
                          </div>
                          {l === 'ar' ? (
                            <div className="preset-card-name-en">{preset.nameEn}</div>
                          ) : null}
                          <div className="preset-card-desc">
                            {l === 'ar' ? preset.descAr : preset.descEn}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* 60-30-10 COLOR RULE SECTION */}
              <div className="color-rule-section">
                <div className="color-rule-header">
                  <h3 className="color-rule-title">
                    {tUI('colorRuleTitle')}
                  </h3>
                  <p className="color-rule-subtitle">
                    {tUI('colorRuleDescription')}
                  </p>
                </div>

                <div className="color-rule-guide-box">
                  <div className="color-rule-guide-title">
                    <span>💡</span>
                    <span>{tUI('colorRuleExplanationTitle')}</span>
                  </div>
                  <div className="color-rule-guide-list">
                    <div className="color-rule-guide-item">
                      <span className="color-rule-guide-badge b60">60%</span>
                      <span>{tUI('colorRule60Explanation')}</span>
                    </div>
                    <div className="color-rule-guide-item">
                      <span className="color-rule-guide-badge b30">30%</span>
                      <span>{tUI('colorRule30Explanation')}</span>
                    </div>
                    <div className="color-rule-guide-item">
                      <span className="color-rule-guide-badge b10">10%</span>
                      <span>{tUI('colorRule10Explanation')}</span>
                    </div>
                  </div>
                </div>

                <div className="color-rule-grid">
                  {renderColorRuleSlot(
                    'colorRule60',
                    tUI('dominantColor'),
                    searchQuery60,
                    setSearchQuery60,
                    dropdownOpen.c60,
                    (open) => setDropdownOpen(prev => ({ ...prev, c60: open })),
                    dropdownRef60
                  )}
                  {renderColorRuleSlot(
                    'colorRule30',
                    tUI('secondaryColor'),
                    searchQuery30,
                    setSearchQuery30,
                    dropdownOpen.c30,
                    (open) => setDropdownOpen(prev => ({ ...prev, c30: open })),
                    dropdownRef30
                  )}
                  {renderColorRuleSlot(
                    'colorRule10',
                    tUI('accentColor'),
                    searchQuery10,
                    setSearchQuery10,
                    dropdownOpen.c10,
                    (open) => setDropdownOpen(prev => ({ ...prev, c10: open })),
                    dropdownRef10
                  )}
                </div>

                {/* Visual Proportion Bar (WOW effect) */}
                {(() => {
                  const c60Obj = COLOR_DATABASE.find(c => c.name === engine.colorRule60);
                  const c30Obj = COLOR_DATABASE.find(c => c.name === engine.colorRule30);
                  const c10Obj = COLOR_DATABASE.find(c => c.name === engine.colorRule10);

                  return (
                    <div className="color-rule-preview-bar">
                      <div
                        className={`color-rule-preview-segment ${c60Obj ? '' : 'empty'} ${isDarkColor(c60Obj?.hex || null) ? 'dark-bg' : ''}`}
                        style={{
                          width: '60%',
                          backgroundColor: c60Obj ? c60Obj.hex : undefined
                        }}
                      >
                        {c60Obj ? `${l === 'ar' ? c60Obj.nameAr : c60Obj.name} (60%)` : `60% ${tUI('dominantColor')}`}
                      </div>
                      <div
                        className={`color-rule-preview-segment ${c30Obj ? '' : 'empty'} ${isDarkColor(c30Obj?.hex || null) ? 'dark-bg' : ''}`}
                        style={{
                          width: '30%',
                          backgroundColor: c30Obj ? c30Obj.hex : undefined
                        }}
                      >
                        {c30Obj ? `${l === 'ar' ? c30Obj.nameAr : c30Obj.name} (30%)` : `30% ${tUI('secondaryColor')}`}
                      </div>
                      <div
                        className={`color-rule-preview-segment ${c10Obj ? '' : 'empty'} ${isDarkColor(c10Obj?.hex || null) ? 'dark-bg' : ''}`}
                        style={{
                          width: '10%',
                          backgroundColor: c10Obj ? c10Obj.hex : undefined
                        }}
                      >
                        {c10Obj ? `${l === 'ar' ? c10Obj.nameAr : c10Obj.name} (10%)` : `10% ${tUI('accentColor')}`}
                      </div>
                    </div>
                  );
                })()}

                {/* Actions and Prompt Preview */}
                <div className="color-rule-actions">
                  {(engine.colorRule60 || engine.colorRule30 || engine.colorRule10) && (
                    <button
                      className="color-rule-reset-btn"
                      onClick={() => {
                        engine.resetColorRule();
                        flash(tUI('colorRuleResetDone'));
                      }}
                    >
                      {getIcon('trash')}
                      {tUI('resetColorRule')}
                    </button>
                  )}
                  {engine.colorRulePrompt && (
                    <div className="color-rule-prompt-preview">
                      <div className="color-rule-prompt-title">{tUI('colorRulePromptLabel')}</div>
                      <div className="color-rule-prompt-text">{engine.colorRulePrompt}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* LIVE COLOR GRADE PREVIEW CARD */}
              {(() => {
                const { temperature, contrast, saturation, vibrance, fade, bloom } = engine.colorGrading;
                let filterStr = '';
                const cVal = 1 + (contrast / 100) * 0.6;
                filterStr += ` contrast(${cVal})`;
                const sVal = 1 + (saturation / 100) * 0.8 + (vibrance / 100) * 0.2;
                filterStr += ` saturate(${Math.max(0, sVal)})`;
                
                let tempOverlayColor = 'transparent';
                if (temperature > 0) {
                  tempOverlayColor = `rgba(245, 158, 11, ${(temperature / 100) * 0.25})`;
                } else if (temperature < 0) {
                  tempOverlayColor = `rgba(59, 130, 246, ${(Math.abs(temperature) / 100) * 0.25})`;
                }
                const fadeOpacity = (fade / 100) * 0.45;
                const bloomBlur = bloom > 0 ? `${(bloom / 100) * 6}px` : '0px';

                return (
                  <div className="color-preview-card-wrapper" onDoubleClick={engine.resetColorGrading} title={tUI('doubleClickResetAll')}>
                    <div className="color-preview-card" style={{ filter: filterStr.trim() }}>
                      <div className="color-preview-scene-bg" />
                      <div className="color-preview-overlay" style={{ backgroundColor: tempOverlayColor }} />
                      <div className="color-preview-fade" style={{ opacity: fadeOpacity }} />
                      {bloom > 0 && (
                        <div className="color-preview-bloom" style={{ filter: `blur(${bloomBlur})` }} />
                      )}
                      <div className="color-preview-card-overlay-text">
                        {tUI('liveColorPreviewOverlay')}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Color Wheels */}
              <div className="color-wheels-row">
                {renderColorWheel('shadows', tUI('shadowsLift'))}
                {renderColorWheel('midtones', tUI('midtonesGamma'))}
                {renderColorWheel('highlights', tUI('highlightsGain'))}
              </div>

              {/* Sliders Grid */}
              <div className="color-sliders-grid">
                {/* Temperature */}
                <div className="color-slider-item" onDoubleClick={() => engine.setColorGrading(prev => ({ ...prev, temperature: 0 }))} title={tUI('doubleClickReset')}>
                  <div className="color-slider-label-row">
                    <span className="color-slider-title">{tUI('temp')}</span>
                    <span className="color-slider-value">
                      {engine.colorGrading.temperature > 0 ? `+${engine.colorGrading.temperature}` : engine.colorGrading.temperature}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    className="color-slider-input temp"
                    value={engine.colorGrading.temperature}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      engine.setColorGrading(prev => ({ ...prev, temperature: val }));
                    }}
                  />
                </div>

                {/* Tint */}
                <div className="color-slider-item" onDoubleClick={() => engine.setColorGrading(prev => ({ ...prev, tint: 0 }))} title={tUI('doubleClickReset')}>
                  <div className="color-slider-label-row">
                    <span className="color-slider-title">{tUI('tint')}</span>
                    <span className="color-slider-value">
                      {engine.colorGrading.tint > 0 ? `+${engine.colorGrading.tint}` : engine.colorGrading.tint}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    className="color-slider-input tint"
                    value={engine.colorGrading.tint}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      engine.setColorGrading(prev => ({ ...prev, tint: val }));
                    }}
                  />
                </div>

                {/* Contrast */}
                <div className="color-slider-item" onDoubleClick={() => engine.setColorGrading(prev => ({ ...prev, contrast: 0 }))} title={tUI('doubleClickReset')}>
                  <div className="color-slider-label-row">
                    <span className="color-slider-title">{tUI('contrast')}</span>
                    <span className="color-slider-value">
                      {engine.colorGrading.contrast > 0 ? `+${engine.colorGrading.contrast}` : engine.colorGrading.contrast}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    className="color-slider-input contrast"
                    value={engine.colorGrading.contrast}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      engine.setColorGrading(prev => ({ ...prev, contrast: val }));
                    }}
                  />
                </div>

                {/* Saturation */}
                <div className="color-slider-item" onDoubleClick={() => engine.setColorGrading(prev => ({ ...prev, saturation: 0 }))} title={tUI('doubleClickReset')}>
                  <div className="color-slider-label-row">
                    <span className="color-slider-title">{tUI('saturation')}</span>
                    <span className="color-slider-value">
                      {engine.colorGrading.saturation > 0 ? `+${engine.colorGrading.saturation}` : engine.colorGrading.saturation}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    className="color-slider-input saturation"
                    value={engine.colorGrading.saturation}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      engine.setColorGrading(prev => ({ ...prev, saturation: val }));
                    }}
                  />
                </div>

                {/* Vibrance */}
                <div className="color-slider-item" onDoubleClick={() => engine.setColorGrading(prev => ({ ...prev, vibrance: 0 }))} title={tUI('doubleClickReset')}>
                  <div className="color-slider-label-row">
                    <span className="color-slider-title">{tUI('vibrance')}</span>
                    <span className="color-slider-value">+{engine.colorGrading.vibrance}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="color-slider-input gradient-accent"
                    value={engine.colorGrading.vibrance}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      engine.setColorGrading(prev => ({ ...prev, vibrance: val }));
                    }}
                  />
                </div>

                {/* Fade */}
                <div className="color-slider-item" onDoubleClick={() => engine.setColorGrading(prev => ({ ...prev, fade: 0 }))} title={tUI('doubleClickReset')}>
                  <div className="color-slider-label-row">
                    <span className="color-slider-title">{tUI('fade')}</span>
                    <span className="color-slider-value">+{engine.colorGrading.fade}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="color-slider-input gradient-accent"
                    value={engine.colorGrading.fade}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      engine.setColorGrading(prev => ({ ...prev, fade: val }));
                    }}
                  />
                </div>

                {/* Grain */}
                <div className="color-slider-item" onDoubleClick={() => engine.setColorGrading(prev => ({ ...prev, grain: 0 }))} title={tUI('doubleClickReset')}>
                  <div className="color-slider-label-row">
                    <span className="color-slider-title">{tUI('grain')}</span>
                    <span className="color-slider-value">+{engine.colorGrading.grain}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="color-slider-input gradient-accent"
                    value={engine.colorGrading.grain}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      engine.setColorGrading(prev => ({ ...prev, grain: val }));
                    }}
                  />
                </div>

                {/* Bloom */}
                <div className="color-slider-item" onDoubleClick={() => engine.setColorGrading(prev => ({ ...prev, bloom: 0 }))} title={tUI('doubleClickReset')}>
                  <div className="color-slider-label-row">
                    <span className="color-slider-title">{tUI('bloom')}</span>
                    <span className="color-slider-value">+{engine.colorGrading.bloom}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="color-slider-input gradient-accent"
                    value={engine.colorGrading.bloom}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      engine.setColorGrading(prev => ({ ...prev, bloom: val }));
                    }}
                  />
                </div>
              </div>

              {/* Preview & Actions */}
              <div className="colorlab-footer">
                <div className="color-prompt-preview-box">
                  <span className="color-prompt-preview-title">
                    ✦ {tUI('colorPromptPreview')}
                  </span>
                  <div className="color-prompt-preview-text">
                    {engine.colorPrompt ? (
                      engine.colorPrompt
                    ) : (
                      <span className="color-prompt-preview-empty">
                        {tUI('adjustColorsPrompt')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="colorlab-actions">
                  <button className="colorlab-reset-btn" onClick={engine.resetColorGrading}>
                    {getIcon('trash')}
                    <span>{tUI('resetColorGrading')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ── RIGHT: PROMPT PANEL ── */}
        <aside className={`prompt-panel ${mobileView === 'prompt' ? 'mobile-show' : ''}`}>
          {/* Subject */}
          <div className="subject-section">
            <label className="subject-label">
              ✦ {tUI('sceneSubject')}
            </label>
            <textarea className="subject-input" rows={2}
              placeholder={tUI('subjectPlaceholder')}
              value={engine.subject}
              onChange={e => engine.setSubject(e.target.value)} />
          </div>

          {/* Prompt Output */}
          <div className="prompt-output">
            <div className="prompt-label">✦ {tUI('finalPrompt')}</div>
            <div className="prompt-box-wrapper" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <textarea className="prompt-box" readOnly
                value={engine.prompt}
                placeholder={tUI('promptPlaceholder')}
                style={{ paddingBottom: '48px' }}
              />
              {engine.prompt && (
                <button 
                  className="action-btn primary" 
                  onClick={handleSave}
                  style={{ 
                    position: 'absolute', 
                    bottom: '8px', 
                    left: '8px',
                    width: 'auto',
                    padding: '6px 14px',
                    fontSize: '0.78rem',
                    borderRadius: 'calc(var(--radius) - 2px)',
                    boxShadow: '0 2px 8px rgba(212, 160, 32, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  {getIcon('save')}
                  <span>{l === 'ar' ? 'حفظ في المشاريع' : 'Save to Projects'}</span>
                </button>
              )}
            </div>

            {/* Conflicts */}
            {engine.conflicts.length > 0 && (
              <div style={{ marginTop: 12, padding: '10px 14px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 'var(--radius)', fontSize: '0.82rem', color: '#ff7070' }}>
                {engine.conflicts.map((c, i) => (
                  <div key={i}>{tConflict(c)}</div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="action-bar">
            <button className="action-btn primary" onClick={copyPrompt} style={{ flex: 2 }}>
              {getIcon('copy')}
              {tUI('copy')}
            </button>
            <button className="action-btn secondary" onClick={clearAll} style={{ flex: 1 }}>
              {getIcon('trash')}
              {tUI('clear')}
            </button>
          </div>
        </aside>
      </div>

      {/* ══════ MOBILE NAV ══════ */}
      <nav className="mobile-nav">
        <button className={`mob-nav-btn ${mobileView === 'sections' ? 'active' : ''}`}
          onClick={() => setMobileView('sections')}>
          {getIcon('map')}
          <span>{tUI('sections')}</span>
        </button>
        <button className={`mob-nav-btn ${(mobileView === 'main' && engine.activeView === 'main') ? 'active' : ''}`}
          onClick={() => { setMobileView('main'); engine.setActiveView('main'); }}>
          {getIcon('build')}
          <span>{tUI('options')}</span>
        </button>

        <button className={`mob-nav-btn ${(mobileView === 'main' && engine.activeView === 'colorlab') ? 'active' : ''}`}
          onClick={() => { setMobileView('main'); engine.setActiveView('colorlab'); }}>
          {getIcon('palette')}
          <span>{tUI('colorLab')}</span>
        </button>

        <button className={`mob-nav-btn ${mobileView === 'prompt' ? 'active' : ''}`}
          onClick={() => setMobileView('prompt')}>
          {getIcon('copy')}
          <span>{tUI('prompt')}</span>
        </button>
      </nav>

      {/* ══════ PREMIUM PLAN / COUPON MODAL ══════ */}
      {showPremiumModal && (
        <div className="premium-modal-overlay" onClick={() => setShowPremiumModal(false)}>
          <div className="premium-modal" onClick={(e) => e.stopPropagation()}>
            <div className="premium-modal-banner">
              <div className="premium-modal-badge">✨</div>
              <h2 className="premium-modal-title">
                {l === 'ar' ? 'عضوية TURA الاحترافية' : 'TURA Director Pro'}
              </h2>
              <p className="premium-modal-subtitle">
                {l === 'ar' 
                  ? 'أطلق العنان لكامل القدرات البصرية والهندسية للمحرك السينمائي' 
                  : 'Unlock the full cinematic potential of the visual engine'}
              </p>
            </div>
            
            <div className="premium-modal-body">
              {/* Beta notice */}
              <div className="beta-notice-box">
                <span className="beta-notice-icon">🎁</span>
                <div className="beta-notice-text">
                  <strong>{l === 'ar' ? 'فترة تجريبية مجانية مفتوحة:' : 'Open Free Beta Period:'}</strong><br />
                  {l === 'ar'
                    ? 'الموقع حالياً لا يحتوي على نظام دفع. جميع الميزات الاحترافية مفعلة ومجانية بالكامل للجميع مؤقتاً!'
                    : 'The site currently does not have a payment system. All professional features are temporarily active and 100% free for everyone!'}
                </div>
              </div>

              {/* Coupon input */}
              <div className="coupon-input-group">
                <label className="coupon-input-label">
                  {l === 'ar' ? 'هل لديك كوبون خصم أو تفعيل؟' : 'Have a coupon or activation code?'}
                </label>
                <div className="coupon-input-row">
                  <input
                    type="text"
                    placeholder={l === 'ar' ? 'مثال: SUIJEDS' : 'e.g. SUIJEDS'}
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleApplyCoupon(couponCode);
                    }}
                  />
                  <button className="coupon-apply-btn" onClick={() => handleApplyCoupon(couponCode)}>
                    {l === 'ar' ? 'تطبيق' : 'Apply'}
                  </button>
                </div>

                {couponError && (
                  <div className="coupon-feedback error">
                    ❌ {couponError}
                  </div>
                )}
                {couponSuccess && (
                  <div className="coupon-feedback success">
                    ✅ {couponSuccess}
                  </div>
                )}
                {isPremium && !couponSuccess && (
                  <div className="coupon-feedback success">
                    ✅ {l === 'ar' ? 'عضوية PRO نشطة ومفعلة!' : 'PRO Membership is Active & Loaded!'}
                  </div>
                )}
              </div>
            </div>

            <div className="premium-modal-footer">
              <button className="premium-close-btn" onClick={() => setShowPremiumModal(false)}>
                {l === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════ SAVE PROJECT MODAL ══════ */}
      {showSaveModal && (
        <div className="premium-modal-overlay" onClick={() => setShowSaveModal(false)}>
          <div className="premium-modal" onClick={(e) => e.stopPropagation()}>
            <div className="premium-modal-banner" style={{ background: 'linear-gradient(135deg, rgba(212, 160, 32, 0.1), rgba(0, 0, 0, 0)), var(--bg3)' }}>
              <div className="premium-modal-badge">📁</div>
              <h2 className="premium-modal-title">
                {l === 'ar' ? 'حفظ المشروع' : 'Save Project'}
              </h2>
              <p className="premium-modal-subtitle">
                {l === 'ar' 
                  ? 'يرجى إدخال اسم للمشروع للرجوع إليه وتعديله لاحقاً' 
                  : 'Please enter a name for the project to recall and edit later'}
              </p>
            </div>
            
            <div className="premium-modal-body" style={{ gap: 14 }}>
              <div className="coupon-input-group">
                <label className="coupon-input-label">
                  {l === 'ar' ? 'اسم المشروع' : 'Project Name'}
                </label>
                <input
                  type="text"
                  placeholder={l === 'ar' ? 'مثال: مشهد غابة نهارية' : 'e.g. Daylight Forest'}
                  value={projectNameInput}
                  onChange={(e) => setProjectNameInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') confirmSave();
                  }}
                  style={{
                    width: '100%',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: '10px 14px',
                    color: 'var(--text1)',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                  autoFocus
                />
              </div>
            </div>

            <div className="premium-modal-footer" style={{ gap: 10 }}>
              <button className="premium-close-btn" style={{ borderColor: 'transparent' }} onClick={() => setShowSaveModal(false)}>
                {l === 'ar' ? 'إلغاء' : 'Cancel'}
              </button>
              <button className="coupon-apply-btn" onClick={confirmSave}>
                {l === 'ar' ? 'حفظ المشروع' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════ TOAST ══════ */}
      <div className={`toast ${toastShow ? 'show' : ''}`}>{toastMsg}</div>
    </div>
  );
}
