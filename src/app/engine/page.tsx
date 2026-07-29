'use client';
export const runtime = 'edge';
import { usePromptEngine } from '@/hooks/usePromptEngine';
import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
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

  // 📁 Import/Export Project Helpers
  const exportProject = (entry: any) => {
    try {
      const dataStr = JSON.stringify([entry], null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `TURA-Project-${entry.title ? entry.title.replace(/\s+/g, '_') : entry.id}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      flash(engine.lang === 'ar' ? 'تم تصدير المشروع بنجاح' : 'Project exported successfully');
    } catch (err) {
      flash(engine.lang === 'ar' ? 'فشل تصدير المشروع' : 'Failed to export project');
    }
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        const entries = Array.isArray(imported) ? imported : [imported];
        
        // Validate entries
        const validEntries = entries.filter(entry => entry && entry.id && entry.prompt && entry.selections);
        if (validEntries.length === 0) {
          flash(engine.lang === 'ar' ? 'ملف غير صالح أو فارغ' : 'Invalid or empty backup file');
          return;
        }
        
        engine.setHistory((prev: any[]) => {
          const merged = [...prev];
          let addedCount = 0;
          validEntries.forEach(entry => {
            const exists = merged.some(h => h.id === entry.id);
            if (!exists) {
              merged.unshift(entry);
              addedCount++;
            } else {
              // Duplicate ID: rename copy title and allocate new unique ID
              const copiedEntry = {
                ...entry,
                id: `${entry.id}_copy_${Date.now()}`,
                title: entry.title ? `${entry.title} (${engine.lang === 'ar' ? 'نسخة' : 'Copy'})` : `${engine.lang === 'ar' ? 'مشروع مستورد نسخة' : 'Imported Copy'}`,
                timestamp: new Date().toISOString()
              };
              merged.unshift(copiedEntry);
              addedCount++;
            }
          });
          flash(engine.lang === 'ar' ? `تم استيراد ${addedCount} من المشاريع` : `Imported ${addedCount} projects successfully`);
          return merged.slice(0, 50);
        });
      } catch (err) {
        flash(engine.lang === 'ar' ? 'فشل قراءة الملف كـ JSON' : 'Failed to parse JSON file');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

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
  
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        window.location.href = "/login";
      } else {
        setCurrentUser(session.user);
      }
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        window.location.href = "/login";
      } else {
        setCurrentUser(session.user);
      }
      setAuthLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const session = currentUser ? {
    user: {
      name: currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'User',
      email: currentUser.email || '',
      image: currentUser.user_metadata?.avatar_url || null
    }
  } : null;

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  if (authLoading || !currentUser) {
    return (
      <div style={{ display: 'flex', height: '100vh', background: '#06080c', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ border: '3px solid rgba(212,160,32,0.1)', borderTop: '3px solid #d4a020', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>جاري التحقق من الهوية...</p>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: scale(1) rotate(360deg); } }
          ` }} />
        </div>
      </div>
    );
  }
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Cinema Assistant states
  const [chatInput, setChatInput] = useState('');
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [apiKeySaved, setApiKeySaved] = useState(false);
  const [settingsAiBrainOpen, setSettingsAiBrainOpen] = useState(false);
  const [showTemplateSelect, setShowTemplateSelect] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const templateSelectRef = useRef<HTMLDivElement>(null);

  // Load API key input display on mount
  useEffect(() => {
    if (engine.aiApiKey) {
      setApiKeyInput(engine.aiApiKey);
      setApiKeySaved(true);
    }
  }, [engine.aiApiKey]);

  // Click outside to close template selector dropdown
  useEffect(() => {
    if (!showTemplateSelect) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (templateSelectRef.current && !templateSelectRef.current.contains(target)) {
        setShowTemplateSelect(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [showTemplateSelect]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [engine.chatMessages, engine.isChatLoading]);

  const handleSendChat = () => {
    if (!chatInput.trim() || engine.isChatLoading) return;
    engine.sendChatMessage(chatInput);
    setChatInput('');
  };

  const handleSaveApiKey = () => {
    engine.saveAiApiKey(apiKeyInput.trim());
    setApiKeySaved(true);
    setTimeout(() => setApiKeySaved(false), 2000);
  };

  // Parse and render assistant messages: if they contain Shot lists, split and style them as custom cards.
  const renderAssistantMessage = (content: string) => {
    const hasShots = /Shot\s*\d+/i.test(content);
    if (!hasShots) {
      return renderMarkdown(content);
    }

    const lines = content.split('\n');
    const introLines: string[] = [];
    
    interface ShotBlock {
      title: string;
      contentLines: string[];
    }
    const shotBlocks: ShotBlock[] = [];
    let currentBlock: ShotBlock | null = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const shotMatch = line.match(/(?:^|\||\b)(Shot\s*\d+)(?:\b|\||$)/i);
      
      if (shotMatch) {
        let title = line.trim();
        if (title.startsWith('|')) {
          title = title.substring(1);
        }
        if (title.endsWith('|')) {
          title = title.substring(0, title.length - 1);
        }
        const titleParts = title.split('|').map(x => x.trim());
        const actualTitle = titleParts[0];
        
        currentBlock = {
          title: actualTitle,
          contentLines: titleParts.slice(1)
        };
        shotBlocks.push(currentBlock);
      } else {
        if (currentBlock) {
          currentBlock.contentLines.push(line);
        } else {
          introLines.push(line);
        }
      }
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        {introLines.length > 0 && (
          <div style={{ marginBottom: '4px' }}>
            {renderMarkdown(introLines.join('\n'))}
          </div>
        )}
        {shotBlocks.map((block, idx) => {
          let formattedContent = '';
          
          // Check if it's formatted as table columns
          const hasColumns = block.contentLines.some(line => line.includes('|')) || block.contentLines.length > 0;
          if (hasColumns) {
            // Flatten all content lines, splitting any internal '|'
            const allTokens: string[] = [];
            block.contentLines.forEach(line => {
              if (line.trim().match(/^[|\s-:]+$/)) return;
              
              let clean = line.trim();
              if (clean.startsWith('|')) clean = clean.substring(1);
              if (clean.endsWith('|')) clean = clean.substring(0, clean.length - 1);
              
              clean.split('|').forEach(token => {
                if (token.trim()) {
                  allTokens.push(token.trim());
                }
              });
            });
            
            if (allTokens.length > 0) {
              const labels = l === 'ar' ? [
                'الكاميرا',
                'العدسة والإعدادات',
                'الإضاءة',
                'حركة الكاميرا',
                'التكوين والزاوية',
                'التركيز والتقنية',
                'الوصف السينمائي',
                'البرومت الإنجليزي (Prompt)'
              ] : [
                'Camera',
                'Lens & Settings',
                'Lighting',
                'Camera Movement',
                'Composition & Angle',
                'Focus & Technique',
                'Description',
                'English Prompt'
              ];
              
              const formattedLines: string[] = [];
              for (let c = 0; c < Math.min(allTokens.length, labels.length); c++) {
                formattedLines.push(`✦ ${labels[c]}: ${allTokens[c]}`);
              }
              if (allTokens.length > labels.length) {
                formattedLines.push(allTokens.slice(labels.length).join('\n'));
              }
              formattedContent = formattedLines.join('\n');
            } else {
              formattedContent = '';
            }
          } else {
            formattedContent = block.contentLines.join('\n').trim();
          }

          if (!formattedContent) return null;

          return (
             <div key={idx} className="prompt-output" style={{ position: 'relative', marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
               <div className="prompt-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <span>🎬 {block.title}</span>
                 <button
                   onClick={() => {
                     navigator.clipboard.writeText(formattedContent);
                     flash(l === 'ar' ? 'تم نسخ تفاصيل اللقطة!' : 'Shot details copied!');
                   }}
                   style={{
                     background: 'rgba(212, 160, 32, 0.12)',
                     border: '1px solid rgba(212, 160, 32, 0.35)',
                     color: 'var(--accent)',
                     borderRadius: '4px',
                     padding: '3px 8px',
                     cursor: 'pointer',
                     fontSize: '0.74rem',
                     display: 'flex',
                     alignItems: 'center',
                     gap: '4px',
                     transition: 'all 0.2s',
                     boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)'
                   }}
                   title={l === 'ar' ? 'نسخ اللقطة' : 'Copy Shot'}
                 >
                   📋 {l === 'ar' ? 'نسخ' : 'Copy'}
                 </button>
               </div>
               <textarea
                 className="prompt-box"
                 readOnly
                 value={formattedContent}
                 rows={Math.max(4, formattedContent.split('\n').length)}
                 style={{
                   minHeight: '100px',
                   background: 'var(--bg2)',
                   borderColor: 'var(--border)',
                   fontFamily: 'inherit',
                   fontSize: '0.85rem'
                 }}
               />
             </div>
          );
        })}
      </div>
    );
  };

  // Simple markdown renderer for assistant messages
  const renderMarkdown = (text: string) => {
    // Split by code blocks first
    const parts = text.split(/(```[\s\S]*?```)/g);
    return parts.map((part, i) => {
      if (part.startsWith('```')) {
        const code = part.replace(/^```\w*\n?/, '').replace(/```$/, '');
        return <pre key={i}>{code}</pre>;
      }
      // Process inline markdown
      const lines = part.split('\n');
      return lines.map((line, j) => {
        // Headers
        if (line.startsWith('### ')) return <h3 key={`${i}-${j}`}>{line.slice(4)}</h3>;
        if (line.startsWith('## ')) return <h2 key={`${i}-${j}`}>{line.slice(3)}</h2>;
        if (line.startsWith('# ')) return <h1 key={`${i}-${j}`}>{line.slice(2)}</h1>;
        if (line.startsWith('---')) return <hr key={`${i}-${j}`} />;
        if (line.trim() === '') return <br key={`${i}-${j}`} />;
        
        // Bold and code inline
        const processed = line
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // List items
        if (line.match(/^\d+\. /)) {
          return <div key={`${i}-${j}`} style={{ paddingInlineStart: 8 }} dangerouslySetInnerHTML={{ __html: processed }} />;
        }
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return <div key={`${i}-${j}`} style={{ paddingInlineStart: 8 }} dangerouslySetInnerHTML={{ __html: '• ' + processed.slice(2) }} />;
        }
        
        return <div key={`${i}-${j}`} style={{ minHeight: '1.2em', marginBottom: '4px' }} dangerouslySetInnerHTML={{ __html: processed }} />;
      });
    });
  };

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
      if (userMenuRef.current && !userMenuRef.current.contains(target)) {
        setUserMenuOpen(false);
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

        <button className={`tb-btn desktop-only ${engine.activeView === 'depth' ? 'active' : ''}`}
          data-tooltip-pos="bottom" data-tooltip={l === 'ar' ? 'طبقات العمق (ثلاثي الأبعاد)' : 'Three-Layer Depth System'}
          onClick={() => { engine.setActiveView('depth'); setMobileView('main'); }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          <span>{l === 'ar' ? 'طبقات العمق' : 'Depth Layers'}</span>
        </button>

        <button className={`tb-btn desktop-only ${engine.activeView === 'assistant' ? 'active' : ''}`}
          data-tooltip-pos="bottom" data-tooltip={l === 'ar' ? 'المساعد السينمائي الذكي' : 'Cinema AI Assistant'}
          onClick={() => { engine.setActiveView('assistant'); setMobileView('main'); }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg>
          <span>{l === 'ar' ? 'المساعد' : 'Assistant'}</span>
        </button>

        {/* Separator to push the settings hamburger button to the far left side */}
        <div className="topbar-sep" />

        {/* Sign Out Button in Header */}
        {session?.user && (
          <button 
            className="tb-btn" 
            onClick={() => signOut()}
            style={{ color: 'var(--red2, #ef4444)', padding: '6px 12px', border: '1px solid rgba(239, 68, 68, 0.2)', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '8px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
            </svg>
            <span className="desktop-only" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{l === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}</span>
          </button>
        )}

        {/* User profile and dropdown */}
        {session?.user && (
          <div className="settings-dropdown-container" ref={userMenuRef}>
            <button 
              className={`tb-btn user-profile-btn ${userMenuOpen ? 'active' : ''}`} 
              onClick={() => setUserMenuOpen(!userMenuOpen)} 
              title={l === 'ar' ? 'الحساب الشخصي' : 'Personal Account'}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px' }}
            >
              {session.user.image ? (
                <img 
                  src={session.user.image} 
                  alt={session.user.name || ""} 
                  style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1.5px solid var(--accent)' }} 
                />
              ) : (
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent-glow)', border: '1.5px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                  {(session.user.name || 'U').charAt(0).toUpperCase()}
                </div>
              )}
              <span className="desktop-only" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text2)' }}>
                {session.user.name}
              </span>
            </button>
            
            <div className={`settings-dropdown-menu ${userMenuOpen ? 'open' : ''}`} style={{ minWidth: '220px' }}>
              <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border)', marginBottom: '4px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--text1)' }}>{session.user.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text3)', wordBreak: 'break-all' }}>{session.user.email}</div>
              </div>

              {/* Subscriptions Option */}
              <div className="settings-menu-item" onClick={() => { setShowPremiumModal(true); setUserMenuOpen(false); }}>
                <div className="settings-menu-label-wrapper">
                  <span className="settings-menu-icon" style={{ color: 'var(--accent)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </span>
                  <span>{l === 'ar' ? 'الاشتراكات' : 'Subscriptions'}</span>
                </div>
              </div>

              {/* Sign Out Option */}
              <div className="settings-menu-item" onClick={() => signOut()}>
                <div className="settings-menu-label-wrapper" style={{ color: 'var(--red2, #ef4444)' }}>
                  <span className="settings-menu-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
                    </svg>
                  </span>
                  <span>{l === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

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

            {/* AI Brain — API Key */}
            <div className="settings-menu-item" onClick={() => setSettingsAiBrainOpen(!settingsAiBrainOpen)}>
              <div className="settings-menu-label-wrapper">
                <span className="settings-menu-icon">🧠</span>
                <span>{l === 'ar' ? 'عقل المساعد' : 'Assistant Brain'}</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: engine.aiApiKey ? '#22c55e' : 'var(--text3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                {engine.aiApiKey ? (l === 'ar' ? '● متصل' : '● Active') : (l === 'ar' ? '○ غير مفعّل' : '○ Inactive')}
                <span>{settingsAiBrainOpen ? '▲' : '▼'}</span>
              </span>
            </div>

            {settingsAiBrainOpen && (
              <div className="settings-ai-brain">
                <div className="settings-ai-brain-title">
                  🔑 {l === 'ar' ? 'مفتاح Gemini API' : 'Gemini API Key'}
                </div>
                <div className="api-key-input-row">
                  <input
                    type="password"
                    className="api-key-input"
                    placeholder={l === 'ar' ? 'أدخل المفتاح هنا...' : 'Enter API key...'}
                    value={apiKeyInput}
                    onChange={(e) => { setApiKeyInput(e.target.value); setApiKeySaved(false); }}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <button
                    className="api-key-save-btn"
                    onClick={(e) => { e.stopPropagation(); handleSaveApiKey(); }}
                    disabled={!apiKeyInput.trim()}
                  >
                    {l === 'ar' ? '💾 حفظ' : '💾 Save'}
                  </button>
                </div>
                {apiKeySaved && (
                  <div className="api-key-status saved">
                    ✅ {l === 'ar' ? 'تم حفظ المفتاح بنجاح' : 'Key saved successfully'}
                  </div>
                )}
                {!engine.aiApiKey && !apiKeySaved && (
                  <div className="api-key-status empty">
                    {l === 'ar' ? 'أدخل مفتاح Gemini API لتفعيل المساعد السينمائي' : 'Enter your Gemini API key to activate the Cinema Assistant'}
                  </div>
                )}
              </div>
            )}

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

                            {/* Narrative Camera Movements & Compositions & Technical Options SVG Blueprint Diagrams */}
                            {['camera_body', 'camera_movement', 'composition_style', 'shot_size', 'lens_type', 'subject_scale', 'advanced_framing', 'aperture', 'focal_length', 'depth_of_field', 'aspect_ratio', 'lighting_setup', 'technique', 'mod_lenses', 'mod_framing', 'mod_color', 'mod_camera'].includes(grp.cat) && (
                              <div className="camera-blueprint-wrapper" style={{
                                width: '100%',
                                height: '110px',
                                background: '#070709',
                                border: '1px solid rgba(255,255,255,0.03)',
                                borderRadius: '10px',
                                marginTop: '10px',
                                marginBottom: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                position: 'relative'
                              }}>
                                {/* Grid Pattern */}
                                <div style={{
                                  position: 'absolute',
                                  inset: 0,
                                  backgroundImage: 'radial-gradient(rgba(212, 160, 32, 0.1) 1px, transparent 0)',
                                  backgroundSize: '12px 12px',
                                  opacity: 0.7
                                }} />
                                
                                <svg width="100%" height="90" viewBox="0 0 240 90" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                                  {/* Blueprint Border and Guides */}
                                  <rect x="15" y="10" width="210" height="70" rx="6" stroke="rgba(212, 160, 32, 0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                                  
                                  {/* ── CAMERA MOVEMENTS ── */}
                                  {item.en === 'Locked Off Static' && (
                                    <>
                                      <rect x="70" y="22" width="100" height="46" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2" opacity="0.8"/>
                                      <circle cx="120" cy="45" r="4" fill="var(--accent)"/>
                                      <path d="M120 28v34M103 45h34" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
                                      <path d="M40 45h20M180 45h20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                                      <circle cx="40" cy="45" r="2" fill="rgba(255,255,255,0.3)"/>
                                      <circle cx="200" cy="45" r="2" fill="rgba(255,255,255,0.3)"/>
                                    </>
                                  )}
                                  
                                  {item.en === 'Horizontal Pan' && (
                                    <>
                                      <rect x="85" y="22" width="70" height="46" rx="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                                      <rect x="85" y="22" width="70" height="46" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M40 45h35M40 45l8-5M40 45l8 5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M200 45h-35M200 45l-8-5M200 45l-8 5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      <line x1="85" y1="45" x2="155" y2="45" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 2" opacity="0.4"/>
                                    </>
                                  )}

                                  {item.en === 'Whip Pan Transition' && (
                                    <>
                                      <rect x="65" y="24" width="50" height="42" rx="3" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.2"/>
                                      <rect x="95" y="24" width="50" height="42" rx="3" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.4"/>
                                      <rect x="125" y="24" width="50" height="42" rx="3" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M30 45h65" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
                                      <path d="M30 45l10-6M30 45l10 6" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                      <line x1="110" y1="35" x2="160" y2="35" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="15 5" opacity="0.6"/>
                                      <line x1="100" y1="55" x2="155" y2="55" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.6"/>
                                    </>
                                  )}

                                  {item.en === 'Camera Tilt' && (
                                    <>
                                      <rect x="85" y="22" width="70" height="46" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M120 78V68M120 78l-4-6M120 78l4-6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
                                      <path d="M120 12V22M120 12l-4 6M120 12l4 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
                                      <path d="M85 32c5-10 65-10 70 0" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5"/>
                                    </>
                                  )}

                                  {item.en === 'Cinematic Parallax Push' && (
                                    <>
                                      <line x1="20" y1="15" x2="70" y2="32" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                                      <line x1="220" y1="15" x2="170" y2="32" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                                      <line x1="20" y1="75" x2="70" y2="58" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                                      <line x1="220" y1="75" x2="170" y2="58" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                                      <rect x="40" y="18" width="160" height="54" rx="4" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 2"/>
                                      <rect x="85" y="28" width="70" height="34" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M50 25l25 6M190 25l-25 6M50 65l25-6M190 65l-25-6" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                                      <polygon points="75,31 67,27 72,33" fill="var(--accent)"/>
                                      <polygon points="165,31 173,27 168,33" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Cinematic Pull-Out' && (
                                    <>
                                      <line x1="85" y1="28" x2="40" y2="18" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3"/>
                                      <line x1="155" y1="28" x2="200" y2="18" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3"/>
                                      <rect x="85" y="28" width="70" height="34" rx="2" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2"/>
                                      <rect x="40" y="18" width="160" height="54" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M78 30L52 24M162 30l26-6" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                                      <polygon points="52,24 60,28 55,22" fill="var(--accent)"/>
                                      <polygon points="188,24 180,28 185,22" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Slow Lens Zoom' && (
                                    <>
                                      <rect x="40" y="18" width="160" height="54" rx="4" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <rect x="65" y="26" width="110" height="38" rx="3" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6"/>
                                      <rect x="90" y="33" width="60" height="24" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M96 37h-4v4M144 37h4v4M96 53h-4v-4M144 53h4v-4" stroke="var(--accent)" strokeWidth="1.5"/>
                                    </>
                                  )}

                                  {item.en === 'Fast Crash Zoom' && (
                                    <>
                                      <rect x="95" y="32" width="50" height="26" rx="2" fill="none" stroke="var(--accent)" strokeWidth="3"/>
                                      <path d="M25 15l50 12M215 15l-50 12M25 75l50-12M215 75l-50-12" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"/>
                                      <polygon points="75,27 65,24 70,30" fill="var(--accent)"/>
                                      <polygon points="165,27 175,24 170,30" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Dolly Zoom Effect' && (
                                    <>
                                      <rect x="95" y="24" width="50" height="42" rx="3" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ zIndex: 3 }}/>
                                      <rect x="40" y="12" width="160" height="66" rx="4" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <rect x="65" y="18" width="110" height="54" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                                      <path d="M45 45l20-8M45 45l20 8M45 45h30" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <path d="M195 45l-20-8M195 45l-20 8M195 45h-30" stroke="var(--accent)" strokeWidth="1.5"/>
                                    </>
                                  )}

                                  {item.en === 'Camera Roll' && (
                                    <>
                                      <g transform="rotate(18, 120, 45)">
                                        <rect x="70" y="20" width="100" height="50" rx="4" fill="none" stroke="var(--accent)" strokeWidth="3.5"/>
                                        <line x1="70" y1="45" x2="170" y2="45" stroke="var(--accent)" strokeWidth="1" opacity="0.4"/>
                                      </g>
                                      <path d="M40 25c-5 10-5 30 0 40M200 65c5-10 5-30 0-40" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
                                      <path d="M40 25l-4 6M40 25l6 2M200 65l4-6M200 65l-6-2" stroke="var(--accent)" strokeWidth="2" fill="none"/>
                                    </>
                                  )}

                                  {item.en === 'Tracking Shot' && (
                                    <>
                                      <circle cx="50" cy="45" r="14" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                                      <circle cx="120" cy="45" r="14" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <circle cx="190" cy="45" r="14" fill="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3"/>
                                      <path d="M30 45h160" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5 3"/>
                                      <polygon points="190,45 180,41 180,49" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Trucking Shot' && (
                                    <>
                                      <line x1="30" y1="65" x2="210" y2="65" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
                                      <line x1="30" y1="70" x2="210" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
                                      <rect x="45" y="30" width="30" height="24" rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                                      <rect x="135" y="30" width="30" height="24" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M80 42h50" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
                                      <polygon points="130,42 122,39 122,45" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Horizontal Arc Shot' && (
                                    <>
                                      <circle cx="120" cy="45" r="12" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                                      <path d="M50 45c0-30 140-30 140 0" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 2"/>
                                      <path d="M190 45c0 10-10 20-30 25" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
                                      <polygon points="190,45 185,53 195,51" fill="var(--accent)"/>
                                      <rect x="105" y="62" width="30" height="16" rx="2" fill="none" stroke="var(--accent)" strokeWidth="1.5" transform="rotate(-15, 120, 70)"/>
                                    </>
                                  )}

                                  {item.en === 'Boom Crane Shot' && (
                                    <>
                                      <line x1="40" y1="65" x2="160" y2="35" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round"/>
                                      <circle cx="40" cy="65" r="6" fill="var(--accent)"/>
                                      <rect x="160" y="20" width="26" height="20" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M200 20v45M200 20l-4 8M200 20l4 8M200 65l-4-8M200 65l4-8" stroke="var(--accent)" strokeWidth="1.5"/>
                                    </>
                                  )}

                                  {item.en === 'Handheld Gritty Tracking' && (
                                    <>
                                      <rect x="75" y="24" width="90" height="42" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M30 35l25 15-10-25 35 15M210 55l-20-15 15 25-30-20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
                                      <path d="M70 15l5 5-3 3M170 65l-5 5 3 3" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                                    </>
                                  )}

                                  {/* ── COMPOSITIONS ── */}
                                  {item.en === 'Rule of Thirds' && (
                                    <>
                                      <line x1="85" y1="10" x2="85" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                                      <line x1="155" y1="10" x2="155" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                                      <line x1="15" y1="33" x2="225" y2="33" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                                      <line x1="15" y1="56" x2="225" y2="56" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                                      <circle cx="85" cy="33" r="5" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <circle cx="155" cy="56" r="5" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <rect x="70" y="20" width="30" height="48" rx="3" fill="rgba(212, 160, 32, 0.08)" stroke="var(--accent)" strokeWidth="1.5"/>
                                    </>
                                  )}

                                  {item.en === 'Symmetric Composition' && (
                                    <>
                                      <line x1="120" y1="10" x2="120" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 2"/>
                                      <circle cx="120" cy="38" r="12" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M102 65c0-8 8-12 18-12s18 4 18 12v5h-36z" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M40 25h15v40H40z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <path d="M185 25h15v40H185z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <path d="M70 45h15M170 45h-15" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <polygon points="85,45 79,41 79,49" fill="var(--accent)"/>
                                      <polygon points="155,45 161,41 161,49" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {(item.en === 'Three-Layer Depth (FG/MG/BG)' || item.en === 'Three-Layer Depth') && (
                                    <>
                                      <path d="M25 55l20-10 30 15 45-20 40 25 30-10 25 15" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none"/>
                                      <circle cx="120" cy="48" r="9" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M107 68c0-5 6-8 13-8s13 3 13 8" stroke="var(--accent)" strokeWidth="2" fill="none"/>
                                      <path d="M15 15c20 10 30 30 15 55" stroke="rgba(255,255,255,0.25)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6"/>
                                    </>
                                  )}

                                  {item.en === 'Eye Level Shot' && (
                                    <>
                                      <circle cx="170" cy="35" r="9" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M156 62c0-7 6-10 14-10s14 3 14 10" stroke="var(--accent)" strokeWidth="2" fill="none"/>
                                      <rect x="45" y="30" width="22" height="14" rx="2" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2"/>
                                      <circle cx="67" cy="37" r="3" fill="rgba(255,255,255,0.35)"/>
                                      <path d="M56 44l-8 25M56 44l8 25" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                                      <line x1="75" y1="37" x2="155" y2="37" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 3"/>
                                      <circle cx="120" cy="37" r="3" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Low Angle Shot' && (
                                    <>
                                      <line x1="40" y1="75" x2="100" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <line x1="200" y1="75" x2="140" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <circle cx="120" cy="28" r="11" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M92 78c4-20 13-28 28-28s24 8 28 28" stroke="var(--accent)" strokeWidth="2.5" fill="none"/>
                                      <path d="M40 60l15-15M55 45v8M55 45H47" stroke="var(--accent)" strokeWidth="2" fill="none"/>
                                    </>
                                  )}

                                  {item.en === "Bird's Eye View" && (
                                    <>
                                      <circle cx="120" cy="38" r="9" fill="rgba(212, 160, 32, 0.15)" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M96 46c0-7 9-11 24-11s24 4 24 11v5H96z" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="40" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                                      <line x1="40" y1="40" x2="200" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                                      <line x1="40" y1="60" x2="200" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                                      <line x1="80" y1="10" x2="80" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                                      <line x1="160" y1="10" x2="160" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                                    </>
                                  )}

                                  {item.en === 'Leading Lines' && (
                                    <>
                                      <line x1="20" y1="15" x2="110" y2="45" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="20" y1="75" x2="110" y2="45" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="220" y1="15" x2="130" y2="45" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="220" y1="75" x2="130" y2="45" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="60" y1="28" x2="60" y2="62" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                                      <line x1="180" y1="28" x2="180" y2="62" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                                      <circle cx="120" cy="45" r="5" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M113 58c0-3 3-4 7-4s7 1 7 4" stroke="var(--accent)" strokeWidth="1.5" fill="none"/>
                                    </>
                                  )}

                                  {item.en === 'Negative Space' && (
                                    <>
                                      <circle cx="185" cy="58" r="5" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M178 72c0-3 3-4 7-4s7 1 7 4" stroke="var(--accent)" strokeWidth="1.5" fill="none"/>
                                      <path d="M30 25h80M30 40h40" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <rect x="25" y="18" width="120" height="44" rx="3" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                                      <path d="M125 35c15 0 35 10 42 16" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3"/>
                                      <polygon points="172,53 170,45 165,50" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Scale Dominance' && (
                                    <>
                                      <polygon points="120,12 210,75 30,75" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
                                      <circle cx="120" cy="70" r="3" fill="var(--accent)"/>
                                      <path d="M116 78c0-2 2-3 4-3s4 1 4 3" stroke="var(--accent)" strokeWidth="1.5" fill="none"/>
                                      <path d="M80 35v30M160 35v30" stroke="var(--accent)" strokeWidth="1.2"/>
                                      <path d="M80 35l-3 6M80 65l-3-6M160 35l3 6M160 65l3-6" stroke="var(--accent)" strokeWidth="1.2"/>
                                    </>
                                  )}

                                  {/* ── LENSES ── */}
                                  {item.en === 'Anamorphic' && (
                                    <>
                                      <ellipse cx="80" cy="45" rx="8" ry="14" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <ellipse cx="160" cy="45" rx="8" ry="14" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6"/>
                                      <ellipse cx="120" cy="45" rx="14" ry="22" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <line x1="20" y1="45" x2="220" y2="45" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <line x1="20" y1="45" x2="220" y2="45" stroke="#fff" strokeWidth="0.5" opacity="0.8"/>
                                    </>
                                  )}

                                  {item.en === 'Spherical Prime' && (
                                    <>
                                      <circle cx="120" cy="45" r="22" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <circle cx="120" cy="45" r="13" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <circle cx="120" cy="45" r="6" fill="var(--accent)"/>
                                      <line x1="50" y1="45" x2="190" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                                    </>
                                  )}

                                  {item.en === 'Fisheye' && (
                                    <>
                                      <circle cx="120" cy="45" r="30" stroke="var(--accent)" strokeWidth="2"/>
                                      <ellipse cx="120" cy="45" rx="18" ry="30" stroke="rgba(212, 160, 32, 0.5)" strokeWidth="1.5"/>
                                      <ellipse cx="120" cy="45" rx="30" ry="12" stroke="rgba(212, 160, 32, 0.5)" strokeWidth="1.5"/>
                                      <path d="M95 28c15-4 35-4 50 0M95 62c15 4 35 4 50 0" stroke="var(--accent)" strokeWidth="1.5"/>
                                    </>
                                  )}

                                  {item.en === 'Macro' && (
                                    <>
                                      <circle cx="100" cy="40" r="16" stroke="var(--accent)" strokeWidth="2" fill="rgba(212, 160, 32, 0.1)"/>
                                      <line x1="112" y1="52" x2="135" y2="75" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round"/>
                                      <path d="M92 40h16M100 32v16" stroke="var(--accent)" strokeWidth="1.2"/>
                                      <path d="M150 25c10 5 35 25 45 40" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                                    </>
                                  )}

                                  {item.en === 'Tilt-Shift' && (
                                    <>
                                      <line x1="20" y1="28" x2="220" y2="28" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3"/>
                                      <line x1="20" y1="62" x2="220" y2="62" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3"/>
                                      <rect x="20" y="32" width="200" height="26" fill="rgba(212,160,32,0.12)" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <circle cx="120" cy="45" r="4" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Vintage Helios 44-2' && (
                                    <>
                                      <circle cx="120" cy="45" r="7" fill="var(--accent)"/>
                                      <path d="M120 45c20-25 50 10 35 25s-50 10-50-15s35-35 45-10" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                      <path d="M120 45c-20 25-50-10-35-25s50-10 50 15s-35 35-45 10" stroke="var(--accent)" strokeWidth="1" opacity="0.5" fill="none"/>
                                    </>
                                  )}

                                  {/* ── FOCAL LENGTHS ── */}
                                  {item.en === 'Extreme Wide' && (
                                    <>
                                      {/* Camera body icon at bottom */}
                                      <rect x="105" y="70" width="30" height="12" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                                      <rect x="114" y="66" width="12" height="4" fill="var(--accent)"/>
                                      {/* Extreme wide projection cone (114 degrees) */}
                                      <path d="M120 70L25 22M120 70L215 22" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M40 25c40-10 120-10 160 0" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3"/>
                                      {/* Visualizing wide distortion */}
                                      <path d="M60 40c30-8 90-8 120 0" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                                      <circle cx="120" cy="22" r="3" fill="var(--accent)"/>
                                      <text x="120" y="52" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">114° (Ultra Wide)</text>
                                    </>
                                  )}
 
                                  {item.en === 'Wide Angle' && (
                                    <>
                                      {/* Camera body icon at bottom */}
                                      <rect x="105" y="70" width="30" height="12" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                                      <rect x="114" y="66" width="12" height="4" fill="var(--accent)"/>
                                      {/* Wide angle projection cone (84 degrees) */}
                                      <path d="M120 70L55 20M120 70L185 20" stroke="var(--accent)" strokeWidth="2.2"/>
                                      <path d="M65 22c25-5 85-5 110 0" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3"/>
                                      <circle cx="120" cy="22" r="3" fill="var(--accent)"/>
                                      <text x="120" y="52" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">84° (Wide)</text>
                                    </>
                                  )}
 
                                  {item.en === '50mm Normal' && (
                                    <>
                                      {/* Camera body icon at bottom */}
                                      <rect x="105" y="70" width="30" height="12" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                                      <rect x="114" y="66" width="12" height="4" fill="var(--accent)"/>
                                      {/* Normal perspective cone (46 degrees - human eye) */}
                                      <path d="M120 70L85 18M120 70L155 18" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M90 20c15-3 45-3 60 0" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3"/>
                                      <circle cx="120" cy="20" r="3.5" fill="var(--accent)"/>
                                      <text x="120" y="52" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">46° (Human Eye)</text>
                                    </>
                                  )}
 
                                  {item.en === 'Portrait 85mm' && (
                                    <>
                                      {/* Camera body icon at bottom */}
                                      <rect x="105" y="70" width="30" height="12" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                                      <rect x="114" y="66" width="12" height="4" fill="var(--accent)"/>
                                      {/* Portrait compression cone (28 degrees) */}
                                      <path d="M120 70L98 15M120 70L142 15" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="98" y1="15" x2="142" y2="15" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3"/>
                                      <circle cx="120" cy="18" r="4.5" fill="var(--accent)"/>
                                      <text x="120" y="52" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">28° (Portrait)</text>
                                    </>
                                  )}
 
                                  {item.en === '135mm Telephoto' && (
                                    <>
                                      <line x1="105" y1="20" x2="105" y2="80" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="135" y1="20" x2="135" y2="80" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="85" y1="45" x2="155" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3"/>
                                      <circle cx="120" cy="45" r="4" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {/* ── APERTURES ── */}
                                  {item.en === 'f/1.2' && (
                                    <>
                                      <circle cx="120" cy="45" r="28" stroke="var(--accent)" strokeWidth="2"/>
                                      <circle cx="120" cy="45" r="24" fill="rgba(212,160,32,0.15)" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="2 2"/>
                                      {/* Wide open iris blades representation */}
                                      <path d="M100 25l10-5M140 25l-10-5M100 65l10 5M140 65l-10 5" stroke="var(--accent)" strokeWidth="1.5"/>
                                    </>
                                  )}

                                  {item.en === 'f/1.4' && (
                                    <>
                                      <circle cx="120" cy="45" r="28" stroke="var(--accent)" strokeWidth="2"/>
                                      <circle cx="120" cy="45" r="20" fill="rgba(212,160,32,0.08)" stroke="var(--accent)" strokeWidth="1.5"/>
                                    </>
                                  )}

                                  {item.en === 'f/2.8' && (
                                    <>
                                      <circle cx="120" cy="45" r="28" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                                      <circle cx="120" cy="45" r="14" stroke="var(--accent)" strokeWidth="2.5" fill="rgba(212,160,32,0.05)"/>
                                    </>
                                  )}

                                  {item.en === 'f/8 Deep Focus' && (
                                    <>
                                      <circle cx="120" cy="45" r="28" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                                      <circle cx="120" cy="45" r="4" stroke="var(--accent)" strokeWidth="3" fill="var(--accent)"/>
                                      <path d="M120 15v10M120 65v10M90 45h10M140 45h10" stroke="var(--accent)" strokeWidth="1.5"/>
                                    </>
                                  )}

                                  {/* ── DEPTH OF FIELD ── */}
                                  {item.en === 'Deep Focus / Infinite Depth' && (
                                    <>
                                      <circle cx="60" cy="45" r="5" fill="var(--accent)"/>
                                      <circle cx="120" cy="45" r="5" fill="var(--accent)"/>
                                      <circle cx="180" cy="45" r="5" fill="var(--accent)"/>
                                      <line x1="30" y1="45" x2="210" y2="45" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <rect x="25" y="15" width="190" height="60" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                                    </>
                                  )}

                                  {item.en === 'Razor-Thin DOF / Extreme Bokeh' && (
                                    <>
                                      <line x1="120" y1="15" x2="120" y2="75" stroke="var(--accent)" strokeWidth="3"/>
                                      <circle cx="120" cy="45" r="8" fill="var(--accent)"/>
                                      <circle cx="60" cy="30" r="12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2"/>
                                      <circle cx="180" cy="60" r="16" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2"/>
                                    </>
                                  )}

                                  {item.en === 'Split Diopter Effect' && (
                                    <>
                                      <line x1="120" y1="10" x2="120" y2="80" stroke="var(--accent)" strokeWidth="2"/>
                                      {/* Left side: Near Object */}
                                      <circle cx="70" cy="35" r="12" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      {/* Right side: Far Object */}
                                      <circle cx="170" cy="55" r="6" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                    </>
                                  )}

                                  {item.en === 'Rack Focus / Focus Pull Simulation' && (
                                    <>
                                      <circle cx="70" cy="45" r="9" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3"/>
                                      <circle cx="170" cy="45" r="9" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M90 45h60" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
                                      <polygon points="150,45 142,41 142,49" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {/* ── SHOT SIZES ── */}
                                  {item.en === 'Extreme Close-Up' && (
                                    <>
                                      <ellipse cx="120" cy="45" rx="35" ry="18" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <circle cx="120" cy="45" r="12" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <circle cx="120" cy="45" r="5" fill="var(--accent)"/>
                                      <path d="M50 20h20v-5H50zM170 20h20v-5h-20zM50 70h20v5H50zM170 70h20v5h-20z" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Close-Up' && (
                                    <>
                                      <circle cx="120" cy="32" r="12" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M95 65c0-10 10-15 25-15s25 5 25 15v8H95z" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <rect x="70" y="15" width="100" height="60" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 2"/>
                                    </>
                                  )}

                                  {item.en === 'Medium Shot' && (
                                    <>
                                      <circle cx="120" cy="28" r="9" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M102 55c0-8 8-12 18-12s18 4 18 12v20H102z" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <rect x="55" y="15" width="130" height="60" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 2"/>
                                    </>
                                  )}

                                  {item.en === 'Wide Shot' && (
                                    <>
                                      <circle cx="120" cy="24" r="7" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M106 45c0-6 6-9 14-9s14 3 14 9v24h-28z" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="112" y1="69" x2="112" y2="78" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="128" y1="69" x2="128" y2="78" stroke="var(--accent)" strokeWidth="2"/>
                                    </>
                                  )}

                                  {item.en === 'Establishing Wide' && (
                                    <>
                                      <path d="M25 65l30-20 40 25 50-30 45 25 25-10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                                      <polygon points="130,55 140,65 120,65" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <circle cx="120" cy="25" r="4" fill="none" stroke="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Low Angle' && (
                                    <>
                                      <line x1="40" y1="75" x2="100" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <line x1="200" y1="75" x2="140" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <circle cx="120" cy="28" r="11" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <path d="M92 78c4-20 13-28 28-28s24 8 28 28" stroke="var(--accent)" strokeWidth="2.5" fill="none"/>
                                    </>
                                  )}

                                  {item.en === 'Dutch Angle' && (
                                    <>
                                      <g transform="rotate(-12, 120, 45)">
                                        <rect x="40" y="20" width="160" height="50" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                        <line x1="20" y1="45" x2="220" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                                      </g>
                                    </>
                                  )}

                                  {/* ── ASPECT RATIOS ── */}
                                  {item.en === '2.39:1 Cinemascope' && (
                                    <>
                                      <rect x="20" y="24" width="200" height="42" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <rect x="25" y="29" width="190" height="32" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
                                      <line x1="20" y1="45" x2="220" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                                      <text x="120" y="49" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">2.39:1</text>
                                    </>
                                  )}

                                  {item.en === '16:9 Widescreen' && (
                                    <>
                                      <rect x="35" y="20" width="170" height="50" rx="3" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <rect x="40" y="25" width="160" height="40" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
                                      <line x1="35" y1="45" x2="205" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                                      <text x="120" y="49" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">16:9</text>
                                    </>
                                  )}

                                  {item.en === '4:3 Academy Format' && (
                                    <>
                                      <rect x="60" y="16" width="120" height="58" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <rect x="65" y="21" width="110" height="48" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
                                      <text x="120" y="49" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">4:3</text>
                                    </>
                                  )}

                                  {item.en === '1:1 Square' && (
                                    <>
                                      <rect x="85" y="15" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <rect x="90" y="20" width="60" height="50" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
                                      <text x="120" y="49" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">1:1</text>
                                    </>
                                  )}

                                  {item.en === '9:16 Vertical' && (
                                    <>
                                      <rect x="98" y="12" width="44" height="66" rx="5" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <rect x="103" y="17" width="34" height="56" rx="2" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
                                      <text x="120" y="49" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">9:16</text>
                                    </>
                                  )}

                                  {/* ── SUBJECT SCALES ── */}
                                  {item.en === 'Immense Scale' && (
                                    <>
                                      <rect x="30" y="15" width="180" height="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <circle cx="120" cy="65" r="3" fill="var(--accent)"/>
                                      <path d="M80 20C120 5 120 5 160 20" stroke="var(--accent)" strokeWidth="1.5" fill="none"/>
                                    </>
                                  )}

                                  {item.en === 'Extreme Close-up / Macro' && (
                                    <>
                                      <circle cx="120" cy="45" r="28" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <circle cx="120" cy="45" r="12" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
                                      <circle cx="120" cy="45" r="5" fill="var(--accent)"/>
                                      <path d="M80 45h80M120 10v70" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                                    </>
                                  )}

                                  {item.en === 'Claustrophobic Scale' && (
                                    <>
                                      <rect x="35" y="18" width="170" height="54" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                      {/* Boxing elements */}
                                      <rect x="20" y="10" width="40" height="70" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
                                      <rect x="180" y="10" width="40" height="70" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
                                      <circle cx="120" cy="45" r="8" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                    </>
                                  )}

                                  {item.en === 'Heroic Dominance / Low Angle' && (
                                    <>
                                      <path d="M50 78L120 22L190 78" stroke="var(--accent)" strokeWidth="2.5"/>
                                      <circle cx="120" cy="30" r="10" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
                                    </>
                                  )}

                                  {/* ── ADVANCED FRAMINGS ── */}
                                  {item.en === 'Multi-Layered Peripheral Framing' && (
                                    <>
                                      <path d="M30 15h180v60H30z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      <path d="M15 10c40 10 40 40 40 70M225 10c-40 10-40 40-40 70" stroke="var(--accent)" strokeWidth="3" fill="none"/>
                                      <circle cx="120" cy="45" r="8" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                    </>
                                  )}

                                  {item.en === 'Leading Lines Framing' && (
                                    <>
                                      <line x1="20" y1="15" x2="110" y2="45" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="20" y1="75" x2="110" y2="45" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="220" y1="15" x2="130" y2="45" stroke="var(--accent)" strokeWidth="2"/>
                                      <line x1="220" y1="75" x2="130" y2="45" stroke="var(--accent)" strokeWidth="2"/>
                                      <circle cx="120" cy="45" r="5" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                    </>
                                  )}

                                  {item.en === 'Chiaroscuro Shadow Framing' && (
                                    <>
                                      <rect x="20" y="12" width="200" height="66" rx="4" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                      {/* Shadows */}
                                      <path d="M20 12h80v66H20zM140 12h80v66H140z" fill="rgba(0,0,0,0.6)" stroke="rgba(212,160,32,0.3)" strokeWidth="1.5"/>
                                      <circle cx="120" cy="45" r="9" fill="var(--accent)"/>
                                    </>
                                  )}

                                  {item.en === 'Voyeuristic Over-the-Shoulder' && (
                                    <>
                                      {/* Blurred shoulder foreground */}
                                      <path d="M15 80c10-25 35-35 50-35s25 5 25 35" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" opacity="0.6"/>
                                      {/* Targeted Subject */}
                                      <circle cx="160" cy="38" r="9" fill="none" stroke="var(--accent)" strokeWidth="2"/>
                                      <path d="M146 65c0-6 6-9 14-9s14 3 14 9" stroke="var(--accent)" strokeWidth="2" fill="none"/>
                                    </>
                                  )}

                                  {/* ── LIGHTING SETUPS ── */}
                                  {item.en === 'Natural Light Only' && (
                                    <>
                                      <path d="M25 20 L220 20 M25 35 L220 35 M25 50 L220 50 M25 65 L220 65" stroke="rgba(255,255,255,0.06)" strokeWidth="8" strokeLinecap="round" />
                                      <path d="M25 27 L220 27 M25 42 L220 42 M25 57 L220 57" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" strokeDasharray="5 5" />
                                      <circle cx="65" cy="40" r="14" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
                                      <path d="M50 50h30a8 8 0 000-16h-2a10 10 0 00-18 4" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                                      <rect x="140" y="25" width="70" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <rect x="142" y="27" width="66" height="11" rx="2" fill="rgba(255,255,255,0.05)" />
                                      <text x="175" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">5600K</text>
                                      <text x="175" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">NEUTRAL DAYLIGHT</text>
                                    </>
                                  )}

                                  {item.en === 'Golden Hour' && (
                                    <>
                                      <line x1="25" y1="58" x2="215" y2="58" stroke="rgba(212, 160, 32, 0.3)" strokeWidth="1.5" />
                                      <path d="M80 58 A25 25 0 01130 58 Z" fill="rgba(212, 160, 32, 0.15)" stroke="var(--accent)" strokeWidth="2" />
                                      <line x1="105" y1="58" x2="105" y2="20" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                                      <line x1="90" y1="48" x2="65" y2="30" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                                      <line x1="120" y1="48" x2="145" y2="30" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(212, 160, 32, 0.1)" />
                                      <text x="180" y="36" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">3000K</text>
                                      <text x="180" y="52" fill="var(--accent)" fontSize="7" textAnchor="middle" opacity="0.7">WARM DIFFUSED</text>
                                    </>
                                  )}

                                  {item.en === 'Chiaroscuro' && (
                                    <>
                                      <circle cx="85" cy="45" r="22" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                      <path d="M85 23 A22 22 0 0185 67 Z" fill="rgba(255,255,255,0.03)" />
                                      <path d="M85 23 A22 22 0 0185 67 Z" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeDasharray="2 2" />
                                      <polygon points="25,18 73,38 68,52 25,72" fill="rgba(212, 160, 32, 0.12)" />
                                      <line x1="25" y1="18" x2="73" y2="38" stroke="var(--accent)" strokeWidth="1.5" opacity="0.8" />
                                      <line x1="25" y1="72" x2="68" y2="52" stroke="var(--accent)" strokeWidth="1.5" opacity="0.8" />
                                      <text x="85" y="48" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" opacity="0.8">8:1</text>
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(255,255,255,0.05)" />
                                      <text x="180" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">4000K</text>
                                      <text x="180" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">HIGH CONTRAST</text>
                                    </>
                                  )}

                                  {item.en === 'Neon Lit' && (
                                    <>
                                      <line x1="60" y1="20" x2="60" y2="70" stroke="#ff007f" strokeWidth="5" strokeLinecap="round" opacity="0.3" />
                                      <line x1="60" y1="20" x2="60" y2="70" stroke="#ff007f" strokeWidth="2.5" strokeLinecap="round" />
                                      <line x1="90" y1="20" x2="90" y2="70" stroke="#00ffff" strokeWidth="5" strokeLinecap="round" opacity="0.3" />
                                      <line x1="90" y1="20" x2="90" y2="70" stroke="#00ffff" strokeWidth="2.5" strokeLinecap="round" />
                                      <circle cx="75" cy="45" r="15" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.4" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(255,255,255,0.05)" />
                                      <text x="180" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">6500K</text>
                                      <text x="180" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">NEON GLOW</text>
                                    </>
                                  )}

                                  {item.en === 'Practical Lights' && (
                                    <>
                                      <line x1="85" y1="10" x2="85" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                      <path d="M78 35h14v5h-14zm2 5h10v4H80z" fill="rgba(255,255,255,0.4)" />
                                      <circle cx="85" cy="52" r="11" fill="rgba(212, 160, 32, 0.15)" stroke="var(--accent)" strokeWidth="1.5" />
                                      <path d="M82 52 l2-5 2 5" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
                                      <circle cx="85" cy="52" r="18" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" fill="none" />
                                      <circle cx="85" cy="52" r="25" stroke="var(--accent)" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" fill="none" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(212, 160, 32, 0.1)" />
                                      <text x="180" y="36" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">2800K</text>
                                      <text x="180" y="52" fill="var(--accent)" fontSize="7" textAnchor="middle" opacity="0.7">TUNGSTEN WARM</text>
                                    </>
                                  )}

                                  {item.en === 'Moonlight' && (
                                    <>
                                      <path d="M70 25 A15 15 0 0 1 85 49 A13 13 0 1 0 70 25 Z" fill="rgba(255, 255, 255, 0.08)" stroke="#a5b4fc" strokeWidth="2" />
                                      <line x1="85" y1="50" x2="120" y2="70" stroke="#a5b4fc" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.7" />
                                      <line x1="70" y1="46" x2="105" y2="66" stroke="#a5b4fc" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                                      <line x1="90" y1="36" x2="125" y2="56" stroke="#a5b4fc" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(165, 180, 252, 0.3)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(165, 180, 252, 0.1)" />
                                      <text x="180" y="36" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">4200K</text>
                                      <text x="180" y="52" fill="#a5b4fc" fontSize="7" textAnchor="middle" opacity="0.7">BLUE-SILVER TINT</text>
                                    </>
                                  )}

                                  {item.en === 'Spotlight / High Key Drama' && (
                                    <>
                                      <path d="M110 15 h20 l-3 5 h-14 z" fill="rgba(255,255,255,0.4)" stroke="#ffffff" strokeWidth="1" />
                                      <polygon points="120,20 70,75 170,75" fill="rgba(255,255,255,0.06)" />
                                      <line x1="120" y1="20" x2="70" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
                                      <line x1="120" y1="20" x2="170" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
                                      <ellipse cx="120" cy="74" rx="50" ry="4" fill="rgba(255, 255, 255, 0.15)" />
                                      <rect x="25" y="25" width="40" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="45" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">5000K</text>
                                      <text x="45" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">THEATRICAL</text>
                                    </>
                                  )}

                                  {item.en === 'Low-Key Noir' && (
                                    <>
                                      <rect x="25" y="20" width="100" height="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                      <rect x="25" y="34" width="100" height="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                      <rect x="25" y="48" width="100" height="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                      <rect x="25" y="62" width="100" height="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                      <circle cx="105" cy="45" r="18" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                                      <line x1="25" y1="20" x2="215" y2="65" stroke="rgba(0,0,0,0.8)" strokeWidth="4" opacity="0.6" />
                                      <line x1="25" y1="34" x2="215" y2="79" stroke="rgba(0,0,0,0.8)" strokeWidth="4" opacity="0.6" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(255,255,255,0.05)" />
                                      <text x="180" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">3200K</text>
                                      <text x="180" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">NOIR SHADOWS</text>
                                    </>
                                  )}

                                  {item.en === 'High-Key Studio' && (
                                    <>
                                      <circle cx="100" cy="45" r="14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                                      <path d="M40 25 L50 32 M40 65 L50 58 M150 45 L135 45" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
                                      <circle cx="35" cy="22" r="3" fill="var(--accent)" />
                                      <circle cx="35" cy="68" r="3" fill="var(--accent)" />
                                      <circle cx="155" cy="45" r="3" fill="var(--accent)" />
                                      <circle cx="100" cy="45" r="22" stroke="rgba(212, 160, 32, 0.2)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                                      <rect x="175" y="25" width="45" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="197" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">5200K</text>
                                      <text x="197" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">STUDIO WRAP</text>
                                    </>
                                  )}

                                  {item.en === 'Rembrandt Portraiture' && (
                                    <>
                                      <polygon points="25,15 90,38 75,60 25,45" fill="rgba(212, 160, 32, 0.1)" />
                                      <line x1="25" y1="15" x2="90" y2="38" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 1" />
                                      <line x1="25" y1="45" x2="75" y2="60" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 1" />
                                      <circle cx="120" cy="45" r="16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                      <polygon points="113,44 118,44 115,49" fill="var(--accent)" />
                                      <rect x="165" y="25" width="50" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="190" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">4500K</text>
                                      <text x="190" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">45° KEY LIGHT</text>
                                    </>
                                  )}

                                  {item.en === 'Teal & Orange Split' && (
                                    <>
                                      <circle cx="95" cy="45" r="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                                      <path d="M40 25 L65 38 M40 65 L65 52" stroke="#00ffff" strokeWidth="2" />
                                      <circle cx="35" cy="22" r="3" fill="#00ffff" />
                                      <path d="M95 27 A18 18 0 0 0 95 63 Z" fill="rgba(0, 255, 255, 0.15)" />
                                      <path d="M150 25 L125 38 M150 65 L125 52" stroke="var(--accent)" strokeWidth="2" />
                                      <circle cx="155" cy="22" r="3" fill="var(--accent)" />
                                      <path d="M95 27 A18 18 0 0 1 95 63 Z" fill="rgba(212, 160, 32, 0.15)" />
                                      <rect x="170" y="25" width="55" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="197" y="36" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">6K / 3.2K</text>
                                      <text x="197" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">BI-COLOR</text>
                                    </>
                                  )}

                                  {item.en === 'Candlelit Intimacy' && (
                                    <>
                                      <rect x="80" y="50" width="10" height="25" rx="1" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                                      <line x1="85" y1="50" x2="85" y2="44" stroke="#ffaa44" strokeWidth="1.5" />
                                      <path d="M85 30 C81 37 81 44 85 44 C89 44 89 37 85 30 Z" fill="rgba(212, 160, 32, 0.3)" stroke="var(--accent)" strokeWidth="1.5" />
                                      <circle cx="85" cy="40" r="14" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" fill="none" />
                                      <circle cx="85" cy="40" r="22" stroke="var(--accent)" strokeWidth="1" strokeDasharray="5 5" opacity="0.15" fill="none" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(212, 160, 32, 0.1)" />
                                      <text x="180" y="36" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">1800K</text>
                                      <text x="180" y="52" fill="var(--accent)" fontSize="7" textAnchor="middle" opacity="0.7">CANDLE WARMTH</text>
                                    </>
                                  )}

                                  {item.en === 'Sodium Vapor Streetlights' && (
                                    <>
                                      <path d="M50 75 L50 25 C50 15 75 15 75 22" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                      <rect x="70" y="22" width="10" height="4" rx="1" fill="rgba(212, 160, 32, 0.6)" />
                                      <polygon points="75,26 50,75 120,75" fill="rgba(212, 160, 32, 0.1)" />
                                      <line x1="75" y1="26" x2="50" y2="75" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                                      <line x1="75" y1="26" x2="120" y2="75" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(212, 160, 32, 0.1)" />
                                      <text x="180" y="36" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">2500K</text>
                                      <text x="180" y="52" fill="var(--accent)" fontSize="7" textAnchor="middle" opacity="0.7">SODIUM AMBER</text>
                                    </>
                                  )}

                                  {item.en === 'Mercury Vapor Industrial' && (
                                    <>
                                      <rect x="55" y="20" width="30" height="15" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                                      <line x1="70" y1="20" x2="70" y2="12" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                      <polygon points="70,35 30,75 110,75" fill="rgba(0, 255, 200, 0.08)" />
                                      <line x1="70" y1="35" x2="30" y2="75" stroke="#00ffcc" strokeWidth="1.5" opacity="0.6" />
                                      <line x1="70" y1="35" x2="110" y2="75" stroke="#00ffcc" strokeWidth="1.5" opacity="0.6" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(0, 255, 200, 0.2)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(0, 255, 200, 0.05)" />
                                      <text x="180" y="36" fill="#00ffcc" fontSize="8" fontWeight="bold" textAnchor="middle">7200K</text>
                                      <text x="180" y="52" fill="#00ffcc" fontSize="7" textAnchor="middle" opacity="0.7">MERCURY GREEN-BLUE</text>
                                    </>
                                  )}

                                  {item.en === 'Volumetric God Rays' && (
                                    <>
                                      <polygon points="25,12 85,12 165,78 105,78" fill="rgba(255,255,255,0.06)" />
                                      <line x1="30" y1="12" x2="110" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="6 3" />
                                      <line x1="50" y1="12" x2="130" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="6 3" />
                                      <line x1="70" y1="12" x2="150" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="6 3" />
                                      <circle cx="65" cy="30" r="1.5" fill="#ffffff" opacity="0.8" />
                                      <circle cx="95" cy="45" r="1" fill="#ffffff" opacity="0.6" />
                                      <circle cx="125" cy="60" r="1.2" fill="#ffffff" opacity="0.7" />
                                      <rect x="165" y="25" width="50" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="190" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">5600K</text>
                                      <text x="190" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">GOD RAYS</text>
                                    </>
                                  )}

                                  {item.en === 'Flickering Firelight' && (
                                    <>
                                      <line x1="70" y1="68" x2="100" y2="60" stroke="#8b5a2b" strokeWidth="3" strokeLinecap="round" />
                                      <line x1="100" y1="68" x2="70" y2="60" stroke="#8b5a2b" strokeWidth="3" strokeLinecap="round" />
                                      <path d="M85 32 C78 45 72 58 85 58 C98 58 92 45 85 32 Z" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="1.5" />
                                      <path d="M85 40 C80 48 76 56 85 56 C94 56 90 48 85 40 Z" fill="rgba(249, 115, 22, 0.25)" stroke="#f97316" strokeWidth="1.5" />
                                      <circle cx="82" cy="25" r="1" fill="#f97316" />
                                      <circle cx="89" cy="20" r="1" fill="#f97316" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(239, 68, 68, 0.3)" />
                                      <rect x="152" y="27" width="56" height="11" rx="2" fill="rgba(239, 68, 68, 0.05)" />
                                      <text x="180" y="36" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">2000K</text>
                                      <text x="180" y="52" fill="#ef4444" fontSize="7" textAnchor="middle" opacity="0.7">FIRELIGHT GLOW</text>
                                    </>
                                  )}

                                  {item.en === 'Dappled Gobo Moonlight' && (
                                    <>
                                      <circle cx="55" cy="30" r="12" fill="rgba(165, 180, 252, 0.08)" stroke="#a5b4fc" strokeWidth="1.5" />
                                      <path d="M60 21 A12 12 0 0 0 60 39 Z" fill="#a5b4fc" opacity="0.3" />
                                      <path d="M80 20 Q95 25 90 40 Q75 35 80 20 Z" fill="rgba(0,0,0,0.45)" stroke="rgba(165,180,252,0.15)" strokeWidth="1" />
                                      <path d="M100 45 Q115 50 110 65 Q95 60 100 45 Z" fill="rgba(0,0,0,0.45)" stroke="rgba(165,180,252,0.15)" strokeWidth="1" />
                                      <path d="M65 50 Q80 55 75 70 Q60 65 65 50 Z" fill="rgba(0,0,0,0.45)" stroke="rgba(165,180,252,0.15)" strokeWidth="1" />
                                      <line x1="55" y1="42" x2="120" y2="78" stroke="#a5b4fc" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(165,180,252,0.3)" />
                                      <text x="180" y="36" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">4200K</text>
                                      <text x="180" y="52" fill="#a5b4fc" fontSize="7" textAnchor="middle" opacity="0.7">DAPPLED SHADOWS</text>
                                    </>
                                  )}

                                  {item.en === 'Emergency Strobe Flash' && (
                                    <>
                                      <polygon points="60,15 20,75 80,75" fill="rgba(239, 68, 68, 0.12)" />
                                      <line x1="60" y1="15" x2="20" y2="75" stroke="#ef4444" strokeWidth="1.5" opacity="0.7" />
                                      <line x1="60" y1="15" x2="80" y2="75" stroke="#ef4444" strokeWidth="1.5" opacity="0.7" />
                                      <polygon points="120,15 100,75 160,75" fill="rgba(59, 130, 246, 0.12)" />
                                      <line x1="120" y1="15" x2="100" y2="75" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7" />
                                      <line x1="120" y1="15" x2="160" y2="75" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7" />
                                      <circle cx="60" cy="15" r="4" fill="#ef4444" />
                                      <circle cx="120" cy="15" r="4" fill="#3b82f6" />
                                      <rect x="175" y="25" width="45" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="197" y="36" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">RED/BLUE</text>
                                      <text x="197" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">DYNAMIC FLASH</text>
                                    </>
                                  )}

                                  {item.en === 'Bioluminescent Glow' && (
                                    <>
                                      <path d="M40 75 Q60 40 85 45 T130 20" fill="none" stroke="rgba(0, 255, 200, 0.2)" strokeWidth="3" />
                                      <path d="M40 75 Q60 40 85 45 T130 20" fill="none" stroke="#00ffcc" strokeWidth="1.5" />
                                      <circle cx="60" cy="52" r="3" fill="#00ffcc" opacity="0.8" />
                                      <circle cx="85" cy="45" r="4" fill="#00ffff" opacity="0.9" />
                                      <circle cx="108" cy="33" r="3" fill="#00ffcc" opacity="0.8" />
                                      <circle cx="70" cy="25" r="1.5" fill="#00ffff" opacity="0.7" />
                                      <circle cx="100" cy="15" r="1.2" fill="#00ffcc" opacity="0.6" />
                                      <circle cx="120" cy="45" r="2" fill="#00ffff" opacity="0.5" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(0, 255, 200, 0.2)" />
                                      <text x="180" y="36" fill="#00ffcc" fontSize="8" fontWeight="bold" textAnchor="middle">4800K</text>
                                      <text x="180" y="52" fill="#00ffcc" fontSize="7" textAnchor="middle" opacity="0.7">ORGANIC GLOW</text>
                                    </>
                                  )}

                                  {item.en === 'Urban Sodium & Cyan Contrast' && (
                                    <>
                                      <circle cx="95" cy="45" r="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                                      <polygon points="40,15 15,75 75,75" fill="rgba(212, 160, 32, 0.12)" />
                                      <line x1="40" y1="15" x2="15" y2="75" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
                                      <line x1="40" y1="15" x2="75" y2="75" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
                                      <circle cx="40" cy="15" r="3" fill="var(--accent)" />
                                      <polygon points="150,15 120,75 180,75" fill="rgba(0, 255, 255, 0.1)" />
                                      <line x1="150" y1="15" x2="120" y2="75" stroke="#00ffff" strokeWidth="1.5" opacity="0.6" />
                                      <line x1="150" y1="15" x2="180" y2="75" stroke="#00ffff" strokeWidth="1.5" opacity="0.6" />
                                      <circle cx="150" cy="15" r="3" fill="#00ffff" />
                                      <rect x="175" y="25" width="45" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="197" y="36" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">2.5K / 6K</text>
                                      <text x="197" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">URBAN SPLIT</text>
                                    </>
                                  )}

                                  {item.en === 'Handheld Flashlight Beam' && (
                                    <>
                                      <rect x="30" y="42" width="20" height="6" rx="1" fill="rgba(255,255,255,0.4)" />
                                      <polygon points="50,40 54,38 54,52 50,50" fill="rgba(255,255,255,0.6)" />
                                      <polygon points="54,45 180,15 180,75" fill="rgba(255,255,255,0.06)" />
                                      <line x1="54" y1="45" x2="180" y2="15" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
                                      <line x1="54" y1="45" x2="180" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
                                      <circle cx="85" cy="40" r="1.2" fill="#ffffff" opacity="0.8" />
                                      <circle cx="120" cy="50" r="1" fill="#ffffff" opacity="0.6" />
                                      <circle cx="150" cy="35" r="1.5" fill="#ffffff" opacity="0.7" />
                                      <rect x="180" y="25" width="40" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="200" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">5000K</text>
                                      <text x="200" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">SEARCH LIGHT</text>
                                    </>
                                  )}

                                  {item.en === 'Motivated TV Glow' && (
                                    <>
                                      <rect x="30" y="25" width="25" height="18" rx="2" fill="none" stroke="#00a8ff" strokeWidth="1.5" />
                                      <line x1="38" y1="43" x2="35" y2="48" stroke="#00a8ff" strokeWidth="1.5" />
                                      <line x1="47" y1="43" x2="50" y2="48" stroke="#00a8ff" strokeWidth="1.5" />
                                      <path d="M65 25 Q75 35 65 45 T65 65" fill="none" stroke="rgba(0, 168, 255, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                                      <path d="M75 20 Q88 35 75 50 T75 70" fill="none" stroke="rgba(0, 168, 255, 0.2)" strokeWidth="1.5" strokeDasharray="5 5" />
                                      <circle cx="125" cy="45" r="15" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                                      <path d="M125 30 A15 15 0 0 0 125 60 Z" fill="rgba(0, 168, 255, 0.1)" />
                                      <rect x="160" y="25" width="50" height="15" rx="3" fill="none" stroke="rgba(0, 168, 255, 0.3)" />
                                      <text x="185" y="36" fill="#00a8ff" fontSize="8" fontWeight="bold" textAnchor="middle">6500K</text>
                                      <text x="185" y="52" fill="#00a8ff" fontSize="7" textAnchor="middle" opacity="0.7">TV REFLECTION</text>
                                    </>
                                  )}

                                  {item.en === 'Golden Rim Light Glow' && (
                                    <>
                                      <polygon points="40,15 15,45 40,75" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
                                      <line x1="20" y1="45" x2="80" y2="45" stroke="var(--accent)" strokeWidth="2" />
                                      <polygon points="80,45 72,41 72,49" fill="var(--accent)" />
                                      <circle cx="110" cy="45" r="18" fill="rgba(0, 0, 0, 0.6)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                      <path d="M92 45 A18 18 0 0 1 110 27" fill="none" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" />
                                      <path d="M92 45 A18 18 0 0 1 110 27" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                      <text x="180" y="36" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">3000K</text>
                                      <text x="180" y="52" fill="var(--accent)" fontSize="7" textAnchor="middle" opacity="0.7">GOLDEN HALO</text>
                                    </>
                                  )}

                                  {item.en === 'Monochrome Pure Silhouette' && (
                                    <>
                                      <polygon points="120,10 60,80 180,80" fill="rgba(255,255,255,0.08)" />
                                      <circle cx="120" cy="45" r="16" fill="#070709" stroke="#ffffff" strokeWidth="2" />
                                      <circle cx="120" cy="45" r="16" fill="#000000" />
                                      <path d="M95 78c0-10 10-15 25-15s25 5 25 15v2H95z" fill="#000000" stroke="#ffffff" strokeWidth="2" />
<path d="M95 78c0-10 10-15 25-15s25 5 25 15v2H95z" fill="#000000" />
                                      <rect x="25" y="25" width="45" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="47" y="36" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">BACKLIT</text>
                                      <text x="47" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">SILHOUETTE</text>
                                    </>
                                  )}

                                  {item.en === 'Overcast Flat Diffusion' && (
                                    <>
                                      <path d="M25 25 Q35 15 45 25 T65 25 T85 25 T105 25 T125 25 T145 25 T165 25 T185 25 T205 25" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                                      <path d="M20 32 Q30 22 40 32 T60 32 T80 32 T100 32 T120 32 T140 32 T160 32 T180 32 T200 32" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                                      <line x1="30" y1="50" x2="210" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                      <line x1="30" y1="58" x2="210" y2="58" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                      <line x1="30" y1="66" x2="210" y2="66" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                      <rect x="150" y="25" width="60" height="15" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" />
                                      <text x="180" y="36" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">6000K</text>
                                      <text x="180" y="52" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle">GLOOMY DIFFUSED</text>
                                    </>
                                  )}
                                   {item.en === 'Time-Lapse' && (
                                     <>
                                       <path d="M 40 60 A 80 80 0 0 1 200 60" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" />
                                       <circle cx="40" cy="60" r="3" fill="var(--accent)" />
                                       <circle cx="80" cy="30" r="3" fill="var(--accent)" opacity="0.4" />
                                       <circle cx="120" cy="20" r="5" fill="var(--accent)" />
                                       <circle cx="160" cy="30" r="3" fill="var(--accent)" opacity="0.4" />
                                       <circle cx="200" cy="60" r="3" fill="var(--accent)" />
                                       <path d="M 60 70 L 180 70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 5" />
                                       <path d="M 170 66 L 180 70 L 170 74" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <circle cx="35" cy="25" r="10" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <path d="M 35 20 V 25 H 40" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                     </>
                                   )}

                                   {item.en === 'Slow Motion' && (
                                     <>
                                       <line x1="30" y1="70" x2="210" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <path d="M 120 15 V 70" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                                       <circle cx="120" cy="25" r="2" fill="var(--accent)" opacity="0.3" />
                                       <circle cx="120" cy="40" r="3.5" fill="var(--accent)" opacity="0.6" />
                                       <circle cx="120" cy="55" r="5" fill="var(--accent)" />
                                       <path d="M 105 70 Q 110 60 112 62 Q 115 50 120 70 Q 125 50 128 62 Q 135 70 135 70" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <rect x="155" y="20" width="55" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                       <text x="182.5" y="30" fill="var(--accent)" fontSize="7" fontWeight="bold" textAnchor="middle">120 FPS</text>
                                       <text x="182.5" y="42" fill="var(--accent)" fontSize="6" textAnchor="middle" opacity="0.7">HIGH SPEED</text>
                                     </>
                                   )}

                                   {item.en === 'Surreal Reflection' && (
                                     <>
                                       <path d="M 70 45 L 95 20 L 120 45 L 145 25 L 170 45" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <line x1="40" y1="45" x2="200" y2="45" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                                       <path d="M 70 45 Q 80 58 95 70 Q 110 58 120 45 Q 130 58 145 65 Q 160 58 170 45" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
                                       <path d="M 50 52 H 190 M 65 60 H 175 M 80 68 H 160" fill="none" stroke="rgba(212, 160, 32, 0.2)" strokeWidth="1" />
                                     </>
                                   )}

                                   {item.en === 'Double Exposure' && (
                                     <>
                                       <path d="M 70 75 C 70 55, 85 45, 90 40 C 85 35, 85 20, 100 20 C 115 20, 120 30, 120 45 C 120 55, 125 65, 130 75" fill="none" stroke="var(--accent)" strokeWidth="2" />
                                       <path d="M 50 60 L 80 40 L 110 65 L 140 35 L 190 70" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
                                       <path d="M 60 70 L 95 50 L 130 70 L 160 55" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" strokeDasharray="2 2" />
                                       <text x="175" y="32" fill="var(--accent)" fontSize="8" fontWeight="bold">EXPOSURE A</text>
                                       <text x="175" y="44" fill="rgba(255,255,255,0.4)" fontSize="8">EXPOSURE B</text>
                                       <circle cx="165" cy="29" r="3" fill="var(--accent)" />
                                       <circle cx="165" cy="41" r="3" fill="rgba(255,255,255,0.4)" />
                                     </>
                                   )}

                                   {item.en === 'Dramatic Silhouette' && (
                                     <>
                                       <circle cx="120" cy="45" r="25" fill="none" stroke="rgba(212, 160, 32, 0.15)" strokeWidth="1" />
                                       <line x1="120" y1="45" x2="70" y2="15" stroke="rgba(212, 160, 32, 0.2)" strokeWidth="1.5" />
                                       <line x1="120" y1="45" x2="170" y2="15" stroke="rgba(212, 160, 32, 0.2)" strokeWidth="1.5" />
                                       <line x1="120" y1="45" x2="60" y2="45" stroke="rgba(212, 160, 32, 0.2)" strokeWidth="1.5" />
                                       <line x1="120" y1="45" x2="180" y2="45" stroke="rgba(212, 160, 32, 0.2)" strokeWidth="1.5" />
                                       <path d="M 100 75 C 100 60, 110 55, 120 55 C 130 55, 140 60, 140 75 Z" fill="#070709" stroke="var(--accent)" strokeWidth="2.5" />
                                       <circle cx="120" cy="40" r="10" fill="#070709" stroke="var(--accent)" strokeWidth="2.5" />
                                       <rect x="25" y="25" width="45" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                       <text x="47.5" y="35" fill="var(--accent)" fontSize="7" fontWeight="bold" textAnchor="middle">BACKLIT</text>
                                     </>
                                   )}

                                   {item.en === 'Long Exposure' && (
                                     <>
                                       <path d="M 20 70 L 220 70" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                                       <path d="M 20 50 Q 70 30 120 55 T 220 35" fill="none" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
                                       <path d="M 20 50 Q 70 30 120 55 T 220 35" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                                       <path d="M 20 62 Q 80 45 140 65 T 220 50" fill="none" stroke="rgba(212, 160, 32, 0.5)" strokeWidth="2" strokeLinecap="round" />
                                       <rect x="155" y="15" width="55" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                       <text x="182.5" y="25" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">BULB</text>
                                       <text x="182.5" y="37" fill="var(--accent)" fontSize="6" textAnchor="middle" opacity="0.7">SLOW SHUTTER</text>
                                     </>
                                   )}
                                   {item.en === 'Cooke S4/i Prime' && (
                                     <>
                                       <path d="M 60 20 H 130 V 70 H 60 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                                       <path d="M 75 25 Q 85 45 75 65" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                       <path d="M 105 25 Q 95 45 105 65" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                       <path d="M 30 30 L 77 35 Q 90 45 120 45 L 180 45" fill="none" stroke="rgba(212, 160, 32, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                                       <path d="M 30 60 L 77 55 Q 90 45 120 45 L 180 45" fill="none" stroke="rgba(212, 160, 32, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                                       <text x="180" y="32" fill="var(--accent)" fontSize="8" fontWeight="bold">COOKE LOOK</text>
                                       <text x="180" y="44" fill="rgba(255,255,255,0.4)" fontSize="7">WARM SKIN</text>
                                     </>
                                   )}

                                   {item.en === 'Vintage Anamorphic' && (
                                     <>
                                       <line x1="20" y1="45" x2="220" y2="45" stroke="rgba(100, 180, 255, 0.7)" strokeWidth="2.5" />
                                       <line x1="20" y1="45" x2="220" y2="45" stroke="#ffffff" strokeWidth="1" />
                                       <ellipse cx="80" cy="45" rx="8" ry="14" fill="none" stroke="rgba(100, 180, 255, 0.3)" strokeWidth="1.5" />
                                       <ellipse cx="140" cy="45" rx="10" ry="18" fill="none" stroke="var(--accent)" strokeWidth="2" />
                                       <ellipse cx="180" cy="45" rx="6" ry="11" fill="none" stroke="rgba(100, 180, 255, 0.2)" strokeWidth="1.5" />
                                       <rect x="25" y="20" width="45" height="15" rx="3" fill="none" stroke="rgba(100, 180, 255, 0.4)" />
                                       <text x="47.5" y="30" fill="rgba(100, 180, 255, 0.9)" fontSize="7" fontWeight="bold" textAnchor="middle">ANAMORPHIC</text>
                                     </>
                                   )}

                                   {item.en === 'Pristine Cinema Glass' && (
                                     <>
                                       <line x1="30" y1="25" x2="160" y2="25" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                       <line x1="30" y1="65" x2="160" y2="65" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                       <path d="M 30 45 H 170" stroke="var(--accent)" strokeWidth="2" />
                                       <path d="M 170 45 L 210 25 M 170 45 L 210 65" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 2" />
                                       <circle cx="170" cy="45" r="3" fill="var(--accent)" />
                                       <rect x="60" y="20" width="80" height="50" rx="4" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
                                       <line x1="100" y1="20" x2="100" y2="70" stroke="var(--accent)" strokeWidth="1.5" />
                                       <text x="180" y="18" fill="var(--accent)" fontSize="8" fontWeight="bold">0% ABERR</text>
                                       <text x="180" y="78" fill="rgba(255,255,255,0.4)" fontSize="7">ULTRA SHARP</text>
                                     </>
                                   )}

                                   {item.en === 'Peripheral Framing' && (
                                     <>
                                       <path d="M 15 10 C 45 20, 40 50, 15 80 Z" fill="none" stroke="var(--accent)" strokeWidth="2" />
                                       <path d="M 225 10 C 195 20, 200 50, 225 80 Z" fill="none" stroke="var(--accent)" strokeWidth="2" />
                                       <path d="M 15 10 Q 120 25 225 10" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                                       <circle cx="120" cy="48" r="8" fill="none" stroke="var(--accent)" strokeWidth="2" />
                                       <path d="M 110 70 C 110 60, 130 60, 130 70 Z" fill="none" stroke="var(--accent)" strokeWidth="2" />
                                       <path d="M 35 45 L 90 45 M 205 45 L 150 45" stroke="rgba(212, 160, 32, 0.4)" strokeWidth="1" strokeDasharray="2 2" />
                                     </>
                                   )}

                                   {item.en === 'Architectural Cohesion' && (
                                     <>
                                       <line x1="20" y1="15" x2="120" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <line x1="220" y1="15" x2="120" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <line x1="20" y1="75" x2="120" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <line x1="220" y1="75" x2="120" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <line x1="60" y1="27" x2="60" y2="63" stroke="var(--accent)" strokeWidth="2" />
                                       <line x1="180" y1="27" x2="180" y2="63" stroke="var(--accent)" strokeWidth="2" />
                                       <line x1="90" y1="36" x2="90" y2="54" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
                                       <line x1="150" y1="36" x2="150" y2="54" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
                                       <circle cx="120" cy="45" r="3" fill="var(--accent)" />
                                       <text x="120" y="22" fill="var(--accent)" fontSize="7" fontWeight="bold" textAnchor="middle">VANISHING POINT</text>
                                     </>
                                   )}

                                   {item.en === 'Unconventional Cinematography' && (
                                     <>
                                       <rect x="50" y="20" width="140" height="50" rx="3" fill="none" stroke="var(--accent)" strokeWidth="2" transform="rotate(-15 120 45)" />
                                       <line x1="25" y1="45" x2="215" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                                       <path d="M 190 20 A 40 40 0 0 1 205 50" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <path d="M 201 46 L 205 50 L 209 43" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <text x="175" y="76" fill="var(--accent)" fontSize="8" fontWeight="bold">DUTCH TILT</text>
                                     </>
                                   )}

                                   {item.en === 'Kodak 35mm Analog Film' && (
                                     <>
                                       <rect x="25" y="15" width="190" height="60" rx="2" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <line x1="25" y1="25" x2="215" y2="25" stroke="rgba(212, 160, 32, 0.3)" strokeWidth="1" />
                                       <line x1="25" y1="65" x2="215" y2="65" stroke="rgba(212, 160, 32, 0.3)" strokeWidth="1" />
                                       <rect x="35" y="17" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="75" y="17" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="115" y="17" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="155" y="17" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="195" y="17" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="35" y="68" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="75" y="68" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="115" y="68" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="155" y="68" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="195" y="68" width="8" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <text x="120" y="49" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">KODAK 35MM</text>
                                     </>
                                   )}

                                   {item.en === 'Bleach Bypass' && (
                                     <>
                                       <line x1="60" y1="75" x2="60" y2="15" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <line x1="60" y1="75" x2="180" y2="75" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <path d="M 60 75 Q 110 75 120 45 T 180 15" fill="none" stroke="var(--accent)" strokeWidth="3" />
                                       <path d="M 60 75 Q 110 75 120 45 T 180 15" fill="none" stroke="#ffffff" strokeWidth="1" />
                                       <text x="135" y="35" fill="var(--accent)" fontSize="8" fontWeight="bold">BLEACH</text>
                                       <text x="135" y="47" fill="rgba(255,255,255,0.4)" fontSize="7">HIGH CONTRAST</text>
                                     </>
                                   )}

                                   {item.en === 'Gritty Realism' && (
                                     <>
                                       <circle cx="120" cy="35" r="10" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <path d="M 115 44 H 125 M 117 48 H 123" stroke="var(--accent)" strokeWidth="1.5" />
                                       <path d="M 120 48 L 120 75" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
                                       <circle cx="50" cy="30" r="1" fill="rgba(255,255,255,0.4)" />
                                       <circle cx="70" cy="60" r="1.5" fill="rgba(255,255,255,0.4)" />
                                       <circle cx="170" cy="25" r="1.2" fill="rgba(255,255,255,0.4)" />
                                       <circle cx="185" cy="55" r="1" fill="rgba(255,255,255,0.4)" />
                                       <text x="35" y="25" fill="var(--accent)" fontSize="8" fontWeight="bold">RAW</text>
                                       <text x="35" y="37" fill="rgba(255,255,255,0.4)" fontSize="7">PRACTICAL</text>
                                     </>
                                   )}

                                   {item.en === 'ARRI Alexa LF' && (
                                     <>
                                       <rect x="75" y="20" width="90" height="50" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                       <rect x="85" y="26" width="70" height="38" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                       <line x1="85" y1="45" x2="155" y2="45" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5" />
                                       <line x1="120" y1="26" x2="120" y2="64" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5" />
                                       <text x="35" y="30" fill="var(--accent)" fontSize="8" fontWeight="bold">ARRI</text>
                                       <text x="35" y="42" fill="rgba(255,255,255,0.4)" fontSize="7">ALEXA LF</text>
                                       <text x="180" y="30" fill="var(--accent)" fontSize="8" fontWeight="bold">4.5K</text>
                                       <text x="180" y="42" fill="rgba(255,255,255,0.4)" fontSize="7">L-FORMAT</text>
                                     </>
                                   )}

                                   {item.en === 'Sony VENICE 2 (Modifier)' && (
                                     <>
                                       <rect x="75" y="20" width="90" height="50" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                       <rect x="85" y="26" width="70" height="38" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                       <rect x="25" y="20" width="45" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                       <text x="47.5" y="30" fill="var(--accent)" fontSize="7" fontWeight="bold" textAnchor="middle">ISO 800</text>
                                       <rect x="25" y="40" width="45" height="15" rx="3" fill="none" stroke="rgba(212, 160, 32, 0.3)" />
                                       <text x="47.5" y="50" fill="var(--accent)" fontSize="7" fontWeight="bold" textAnchor="middle">ISO 3200</text>
                                       <text x="180" y="30" fill="var(--accent)" fontSize="8" fontWeight="bold">SONY</text>
                                       <text x="180" y="42" fill="rgba(255,255,255,0.4)" fontSize="7">VENICE 2</text>
                                     </>
                                   )}
                                   {item.en === 'ARRI Alexa 35' && (
                                     <>
                                       <path d="M 50 25 H 130 V 65 H 50 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                                       <rect x="80" y="30" width="60" height="30" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                       <path d="M 30 45 H 75" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
                                       <circle cx="30" cy="45" r="3" fill="var(--accent)" />
                                       <text x="180" y="32" fill="var(--accent)" fontSize="8" fontWeight="bold">ALEXA 35</text>
                                       <text x="180" y="44" fill="rgba(255,255,255,0.4)" fontSize="7">17 STOPS DR</text>
                                     </>
                                   )}

                                   {item.en === 'ARRI Alexa Mini LF' && (
                                     <>
                                       <path d="M 50 25 H 120 V 65 H 50 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                       <rect x="75" y="27" width="75" height="36" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                       <text x="180" y="32" fill="var(--accent)" fontSize="8" fontWeight="bold">MINI LF</text>
                                       <text x="180" y="44" fill="rgba(255,255,255,0.4)" fontSize="7">LARGE FORMAT</text>
                                     </>
                                   )}

                                   {item.en === 'Sony VENICE 2' && (
                                     <>
                                       <rect x="70" y="22" width="100" height="46" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                       <rect x="80" y="27" width="80" height="36" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                       <text x="35" y="30" fill="var(--accent)" fontSize="8" fontWeight="bold">SONY</text>
                                       <text x="35" y="42" fill="rgba(255,255,255,0.4)" fontSize="7">8.6K FF</text>
                                       <text x="180" y="30" fill="var(--accent)" fontSize="8" fontWeight="bold">DUAL ISO</text>
                                       <text x="180" y="42" fill="rgba(255,255,255,0.4)" fontSize="7">800/3200</text>
                                     </>
                                   )}

                                   {item.en === 'RED V-RAPTOR' && (
                                     <>
                                       <path d="M 60 25 L 115 20 V 70 L 60 65 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                       <rect x="85" y="30" width="55" height="30" rx="1.5" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                       <line x1="30" y1="35" x2="55" y2="35" stroke="var(--accent)" strokeWidth="1.5" />
                                       <line x1="25" y1="45" x2="55" y2="45" stroke="var(--accent)" strokeWidth="1.5" />
                                       <line x1="30" y1="55" x2="55" y2="55" stroke="var(--accent)" strokeWidth="1.5" />
                                       <text x="175" y="32" fill="var(--accent)" fontSize="8" fontWeight="bold">RED 8K</text>
                                       <text x="175" y="44" fill="rgba(255,255,255,0.4)" fontSize="7">V-RAPTOR</text>
                                     </>
                                   )}

                                   {item.en === 'Blackmagic URSA Cinema' && (
                                     <>
                                       <rect x="65" y="20" width="110" height="50" rx="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                       <rect x="80" y="25" width="80" height="40" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                       <line x1="106" y1="25" x2="106" y2="65" stroke="rgba(212, 160, 32, 0.4)" strokeWidth="1" strokeDasharray="2 2" />
                                       <line x1="133" y1="25" x2="133" y2="65" stroke="rgba(212, 160, 32, 0.4)" strokeWidth="1" strokeDasharray="2 2" />
                                       <line x1="80" y1="45" x2="160" y2="45" stroke="rgba(212, 160, 32, 0.4)" strokeWidth="1" strokeDasharray="2 2" />
                                       <text x="35" y="32" fill="var(--accent)" fontSize="8" fontWeight="bold">URSA</text>
                                       <text x="35" y="44" fill="rgba(255,255,255,0.4)" fontSize="7">12K INDIE</text>
                                     </>
                                   )}

                                   {item.en === '35mm Film' && (
                                     <>
                                       <rect x="35" y="15" width="170" height="60" rx="2" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <rect x="45" y="18" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="90" y="18" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="135" y="18" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="180" y="18" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="45" y="68" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="90" y="68" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="135" y="68" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="180" y="68" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <line x1="75" y1="15" x2="75" y2="75" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <line x1="165" y1="15" x2="165" y2="75" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <text x="120" y="47" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">ANALOG 35MM</text>
                                     </>
                                   )}

                                   {item.en === '16mm Film' && (
                                     <>
                                       <rect x="45" y="15" width="150" height="60" rx="1.5" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <rect x="55" y="18" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="105" y="18" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="155" y="18" width="6" height="4" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <line x1="90" y1="15" x2="90" y2="75" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <line x1="140" y1="15" x2="140" y2="75" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <text x="120" y="47" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">INDIE 16MM</text>
                                     </>
                                   )}

                                   {item.en === 'IMAX 70mm' && (
                                     <>
                                       <rect x="25" y="12" width="190" height="66" rx="3" fill="none" stroke="var(--accent)" strokeWidth="2" />
                                       <rect x="29" y="18" width="4" height="6" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="29" y="30" width="4" height="6" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="29" y="42" width="4" height="6" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="29" y="54" width="4" height="6" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="207" y="18" width="4" height="6" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="207" y="30" width="4" height="6" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="207" y="42" width="4" height="6" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="207" y="54" width="4" height="6" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <text x="120" y="47" fill="var(--accent)" fontSize="9" fontWeight="800" textAnchor="middle" letterSpacing="1">IMAX 70MM</text>
                                     </>
                                   )}

                                   {item.en === 'Super 8 Film' && (
                                     <>
                                       <rect x="55" y="15" width="130" height="60" rx="1.5" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                                       <rect x="62" y="22" width="4" height="5" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="62" y="42" width="4" height="5" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <rect x="62" y="62" width="4" height="5" rx="0.5" fill="none" stroke="var(--accent)" strokeWidth="1" />
                                       <line x1="80" y1="15" x2="80" y2="75" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <line x1="140" y1="15" x2="140" y2="75" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                       <text x="125" y="47" fill="var(--accent)" fontSize="8" fontWeight="bold" textAnchor="middle">SUPER 8</text>
                                     </>
                                   )}



                                </svg>
                              </div>
                            )}

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

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {/* Import Button */}
                <label className="hist-btn" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                  <span>{l === 'ar' ? 'استيراد' : 'Import'}</span>
                  <input
                    type="file"
                    accept=".json"
                    style={{ display: 'none' }}
                    onChange={handleImport}
                  />
                </label>

                {engine.history.length > 0 && (
                  <button className="hist-btn danger" onClick={() => { engine.clearHistory(); flash(l === 'ar' ? 'تم مسح جميع المشاريع' : 'All projects cleared'); }}>
                    {getIcon('trash')}
                    <span>{tUI('clearAll')}</span>
                  </button>
                )}
              </div>
            </div>

            {engine.history.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '2.5rem' }}>📁</span>
                <div style={{ color: 'var(--text3)' }}>
                  {l === 'ar' ? 'لا توجد مشاريع محفوظة بعد' : 'No saved projects yet'}
                </div>
                <label className="action-btn primary" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '0.85rem', width: 'auto' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                  <span>{l === 'ar' ? 'استيراد مشاريع من ملف JSON' : 'Import projects from JSON file'}</span>
                  <input
                    type="file"
                    accept=".json"
                    style={{ display: 'none' }}
                    onChange={handleImport}
                  />
                </label>
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
                      <button className="hist-btn" title={l === 'ar' ? 'تصدير المشروع' : 'Export Project'} onClick={() => exportProject(entry)}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
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

          {/* 5. CINEMA ASSISTANT VIEW */}
          <div className={`view ${engine.activeView === 'assistant' ? 'active' : ''}`}>
            <div className="assistant-view">
              <div className="assistant-header">
                <h2 className="assistant-title">
                  🎬 {l === 'ar' ? 'المساعد السينمائي' : 'Cinema Assistant'}
                </h2>
                <p className="assistant-subtitle">
                  {l === 'ar'
                    ? 'خبير دكوباج سينمائي يصنع لك Shot Lists احترافية ويفهم كل إعدادات TURA'
                    : 'Professional cinematic decoupage expert — creates Shot Lists and understands all TURA settings'}
                </p>
              </div>

              {!engine.aiApiKey ? (
                <div className="chat-no-key">
                  <div className="chat-no-key-icon">🧠</div>
                  <div className="chat-no-key-title">
                    {l === 'ar' ? 'عقل المساعد غير مفعّل' : 'Assistant Brain Not Active'}
                  </div>
                  <div className="chat-no-key-desc">
                    {l === 'ar'
                      ? 'أضف مفتاح Gemini API من الإعدادات ← عقل المساعد لتفعيل المساعد السينمائي الذكي'
                      : 'Add your Gemini API key from Settings → Assistant Brain to activate the AI Cinema Assistant'}
                  </div>
                </div>
              ) : (
                <>
                  <div className="assistant-toolbar">
                    <div
                      className={`color-lab-toggle ${engine.isColorLabLinked ? 'active' : ''}`}
                      onClick={() => engine.setIsColorLabLinked(!engine.isColorLabLinked)}
                    >
                      <div className="toggle-switch" />
                      <span>
                        {l === 'ar'
                          ? (engine.isColorLabLinked ? '🎨 معمل الألوان مربوط' : '🎨 ربط معمل الألوان')
                          : (engine.isColorLabLinked ? '🎨 Color Lab Linked' : '🎨 Link Color Lab')}
                      </span>
                    </div>

                    <div
                      className={`color-lab-toggle ${engine.isDepthLinked ? 'active' : ''}`}
                      onClick={() => engine.setIsDepthLinked(!engine.isDepthLinked)}
                      style={{ marginRight: '8px' }}
                    >
                      <div className="toggle-switch" />
                      <span>
                        {l === 'ar'
                          ? (engine.isDepthLinked ? '🎭 العمق مربوط' : '🎭 ربط العمق')
                          : (engine.isDepthLinked ? '🎭 Depth Linked' : '🎭 Link Depth')}
                      </span>
                    </div>

                    {engine.chatMessages.length > 0 && (
                      <button className="clear-chat-btn" onClick={engine.clearChat}>
                        {getIcon('trash')}
                        {l === 'ar' ? 'مسح المحادثة' : 'Clear Chat'}
                      </button>
                    )}
                  </div>

                  <div className="chat-messages">
                    {engine.chatMessages.length === 0 ? (
                      <div className="chat-welcome">
                        <div className="chat-welcome-icon">🎬</div>
                        <div className="chat-welcome-title">
                          {l === 'ar' ? 'مرحباً! أنا خبير الدكوباج السينمائي' : 'Hello! I\'m your Cinema Decoupage Expert'}
                        </div>
                        <div className="chat-welcome-subtitle">
                          {l === 'ar'
                            ? 'صف لي المشهد وسأصنع لك Shot List كامل مع كل التفاصيل التقنية والبرومتات الجاهزة'
                            : 'Describe your scene and I\'ll create a complete Shot List with all technical details and ready-to-use prompts'}
                        </div>
                        <div className="chat-welcome-suggestions">
                          {(l === 'ar'
                            ? ['مشهد مطاردة في شوارع ضيقة ليلاً', 'حوار درامي بين شخصيتين في مقهى', 'مشهد افتتاحي لفيلم خيال علمي']
                            : ['Night chase scene in narrow streets', 'Dramatic dialogue in a café', 'Opening scene for a sci-fi film']
                          ).map((suggestion, i) => (
                            <button
                              key={i}
                              className="chat-suggestion"
                              onClick={() => { setChatInput(suggestion); }}
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      engine.chatMessages.map(msg => (
                        <div key={msg.id} className={`chat-bubble ${msg.role}`}>
                          {msg.role === 'assistant' ? renderAssistantMessage(msg.content) : msg.content}
                        </div>
                      ))
                    )}

                    {engine.isChatLoading && (
                      <div className="chat-loading">
                        <div className="chat-loading-dots">
                          <span /><span /><span />
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  <div className="chat-input-area">
                    {/* Color Template Selector Dropdown Trigger */}
                    <div className="chat-template-select-container" ref={templateSelectRef}>
                      <button
                        className={`chat-template-btn ${engine.activeColorTemplate ? 'active' : ''}`}
                        onClick={() => setShowTemplateSelect(!showTemplateSelect)}
                        title={l === 'ar' ? 'اختيار قالب ألوان من المشاريع' : 'Select color template from projects'}
                      >
                        🎨 {l === 'ar' ? 'قالب' : 'Template'}
                      </button>

                      {showTemplateSelect && (
                        <div className="chat-template-dropdown">
                          <div className="chat-template-dropdown-header">
                            {l === 'ar' ? 'اختر قالب ألوان' : 'Select Color Template'}
                          </div>
                          <div className="chat-template-dropdown-list">
                            {engine.history.length === 0 ? (
                              <div className="chat-template-empty">
                                {l === 'ar' ? 'لا توجد مشاريع محفوظة. احفظ مشروعاً أولاً لاستخدامه كقالب!' : 'No saved projects. Save a project first to use as a template!'}
                              </div>
                            ) : (
                              engine.history.map(entry => (
                                <div
                                  key={entry.id}
                                  className={`chat-template-item ${engine.activeColorTemplate?.id === entry.id ? 'selected' : ''}`}
                                  onClick={() => {
                                    engine.setActiveColorTemplate(entry);
                                    setShowTemplateSelect(false);
                                    flash(l === 'ar' ? `تم ربط ألوان قالب: ${entry.title || 'بدون عنوان'}` : `Linked colors from template: ${entry.title || 'Untitled'}`);
                                    // Make sure Color Lab linking is toggled ON when selecting a template
                                    if (!engine.isColorLabLinked) {
                                      engine.setIsColorLabLinked(true);
                                    }
                                  }}
                                >
                                  <span className="template-item-icon">📁</span>
                                  <div className="template-item-info">
                                    <span className="template-item-title">{entry.title || (l === 'ar' ? 'مشروع بدون عنوان' : 'Untitled Project')}</span>
                                    <span className="template-item-details">
                                      {entry.colorRule60 || entry.activePreset || entry.colorGrading ? (l === 'ar' ? 'يحتوي على ألوان' : 'Contains colors') : (l === 'ar' ? 'لا يحتوي على ألوان' : 'No colors')}
                                    </span>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="chat-input-wrapper">
                      <textarea
                        className="chat-input"
                        placeholder={l === 'ar' ? 'صف المشهد أو اسأل سؤالاً سينمائياً...' : 'Describe a scene or ask a cinematic question...'}
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendChat();
                          }
                        }}
                        rows={1}
                      />
                      {engine.activeColorTemplate && (
                        <div className="active-template-badge">
                          <span>🎨 {engine.activeColorTemplate.title || 'Template'}</span>
                          <button
                            className="clear-template-btn"
                            onClick={() => {
                              engine.setActiveColorTemplate(null);
                              flash(l === 'ar' ? 'تم إلغاء ربط قالب الألوان' : 'Color template unlinked');
                            }}
                            title={l === 'ar' ? 'إلغاء ربط القالب' : 'Unlink template'}
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <button
                      className="chat-send-btn"
                      onClick={handleSendChat}
                      disabled={!chatInput.trim() || engine.isChatLoading}
                      title={l === 'ar' ? 'إرسال' : 'Send'}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </button>
                  </div>

                </>
              )}
            </div>
          </div>

          {/* 6. COLOR LAB VIEW */}
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

          {/* 7. DEPTH LAYERS VIEW */}
          <div className={`view ${engine.activeView === 'depth' ? 'active' : ''}`}>
            <div className="depth-layers-view">
              <div className="depth-layers-header">
                <h2 className="depth-layers-title">
                  {l === 'ar' ? '🎭 طبقات العمق (ثلاثي الأبعاد)' : '🎭 Three-Layer Depth System'}
                </h2>
                <p className="depth-layers-description">
                  {l === 'ar' 
                    ? 'تحكم بتوزيع التركيز البصري والوضوح ببرمجة دقيقة لطبقات الكادر الثلاث (المقدمة والوسط والخلفية) مع تحديد تفاصيل وكثافة كل طبقة.' 
                    : 'Control visual focus and clarity distribution across the three frame planes (Foreground, Midground, and Background) with density and description controls.'}
                </p>
              </div>

              {/* Presets */}
              <div className="depth-presets-section">
                <div className="depth-presets-label">
                  🎬 {l === 'ar' ? 'توزيعات عمق سينمائية جاهزة' : 'Cinematic Depth Presets'}
                </div>
                <div className="depth-preset-bar">
                  {engine.depthPresets?.map((p) => (
                    <button
                      key={p.id}
                      className={`depth-preset-btn ${engine.activeDepthPreset === p.id ? 'active' : ''}`}
                      onClick={() => engine.applyDepthPreset(p.id)}
                    >
                      <span className="depth-preset-icon">{p.icon}</span>
                      <span>{l === 'ar' ? p.ar : p.en}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Layer Cards */}
              {(['foreground', 'midground', 'background'] as const).map((layerKey) => {
                const layer = engine.depthLayering[layerKey];
                const title = layerKey === 'foreground' 
                  ? (l === 'ar' ? 'المقدمة (Foreground)' : 'Foreground')
                  : layerKey === 'midground'
                  ? (l === 'ar' ? 'المنتصف (Midground)' : 'Midground')
                  : (l === 'ar' ? 'الخلفية (Background)' : 'Background');
                
                const icon = layerKey === 'foreground' ? '🌿' : layerKey === 'midground' ? '👤' : '🌄';
                const placeholder = layerKey === 'foreground'
                  ? (l === 'ar' ? 'مثال: أوراق شجر قريبة، قطرات مطر على نافذة، سياج...' : 'e.g., close leaves, raindrops on glass, window frame...')
                  : layerKey === 'midground'
                  ? (l === 'ar' ? 'مثال: البطل يتحدث بالهاتف، سيارة متوقفة...' : 'e.g., main character talking on phone, car parked...')
                  : (l === 'ar' ? 'مثال: جبال مغطاة بالضباب، أضواء نيون بعيدة للمدينة...' : 'e.g., misty mountains, distant neon city skyline...');

                return (
                  <div className="depth-layer-card" key={layerKey}>
                    <div className="depth-layer-header">
                      <span className="depth-layer-icon">{icon}</span>
                      <span className="depth-layer-name">{title}</span>
                      <span className="depth-layer-value">{layer.focus}%</span>
                    </div>

                    {/* Focus Slider */}
                    <div className="depth-slider-row">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={layer.focus}
                        onChange={(e) => engine.setDepthFocus(layerKey, parseInt(e.target.value))}
                        className="depth-slider-input"
                        style={{
                          background: l === 'ar'
                            ? `linear-gradient(to left, var(--accent) 0%, var(--accent) ${layer.focus}%, rgba(255,255,255,0.08) ${layer.focus}%, rgba(255,255,255,0.08) 100%)`
                            : `linear-gradient(to right, var(--accent) 0%, var(--accent) ${layer.focus}%, rgba(255,255,255,0.08) ${layer.focus}%, rgba(255,255,255,0.08) 100%)`
                        }}
                      />
                    </div>

                    {/* Density Buttons */}
                    <div className="depth-density-row">
                      <span className="depth-density-label">{l === 'ar' ? 'كثافة العناصر:' : 'Density:'}</span>
                      <div className="depth-density-btns">
                        {(['minimal', 'sparse', 'moderate', 'dense', 'packed'] as const).map((d) => {
                          const dLabel = d === 'minimal' ? (l === 'ar' ? 'خفيف جداً' : 'Minimal')
                            : d === 'sparse' ? (l === 'ar' ? 'خفيف' : 'Sparse')
                            : d === 'moderate' ? (l === 'ar' ? 'متوسط' : 'Moderate')
                            : d === 'dense' ? (l === 'ar' ? 'كثيف' : 'Dense')
                            : (l === 'ar' ? 'مزدحم جداً' : 'Packed');
                          return (
                            <button
                              key={d}
                              className={`depth-density-btn ${layer.density === d ? 'active' : ''}`}
                              onClick={() => engine.setDepthDensity(layerKey, d)}
                            >
                              {dLabel}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Description Text area */}
                    <div className="depth-desc-row">
                      <textarea
                        className="depth-desc-input"
                        placeholder={placeholder}
                        value={layer.description}
                        onChange={(e) => engine.setDepthDescription(layerKey, e.target.value)}
                        rows={2}
                      />
                    </div>
                  </div>
                );
              })}

              {/* Horizontal Graphical Preview */}
              <div className="depth-preview-section">
                <div className="depth-preview-label">
                  📊 {l === 'ar' ? 'مخطط التوزيع الهندسي للعمق' : 'Geometric Depth Distribution Chart'}
                </div>
                <div className="depth-preview-bars">
                  {(['foreground', 'midground', 'background'] as const).map((key) => {
                    const pct = engine.depthLayering[key].focus;
                    const color = key === 'foreground' ? '#ff9f43' : key === 'midground' ? 'var(--accent)' : '#54a0ff';
                    const label = key === 'foreground' ? 'FG' : key === 'midground' ? 'MG' : 'BG';
                    return (
                      <div className="depth-preview-row" key={key}>
                        <span className="depth-preview-key">{label}</span>
                        <div className="depth-preview-track">
                          <div
                            className="depth-preview-fill"
                            style={{
                              width: `${pct}%`,
                              backgroundColor: color
                            }}
                          />
                        </div>
                        <span className="depth-preview-pct">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Prompt Output Preview */}
              <div className="depth-prompt-preview-box">
                <span className="depth-prompt-preview-title">
                  📝 {l === 'ar' ? 'موجه العمق المضاف للبرومت' : 'Generated Depth prompt segment'}
                </span>
                <div className="depth-prompt-preview-text">
                  {engine.depthPrompt ? (
                    engine.depthPrompt
                  ) : (
                    <span className="depth-prompt-preview-empty">
                      {l === 'ar' ? 'عدل قيم السلايدرات لإنتاج برومت العمق...' : 'Adjust sliders to generate depth prompt...'}
                    </span>
                  )}
                </div>
              </div>

              {/* Reset Action */}
              <div className="depth-actions">
                <button className="depth-reset-btn" onClick={engine.resetDepthLayering}>
                  {getIcon('trash')}
                  <span>{l === 'ar' ? 'إعادة ضبط طبقات العمق' : 'Reset Depth Layers'}</span>
                </button>
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

        <button className={`mob-nav-btn ${(mobileView === 'main' && engine.activeView === 'depth') ? 'active' : ''}`}
          onClick={() => { setMobileView('main'); engine.setActiveView('depth'); }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          <span>{l === 'ar' ? 'العمق' : 'Depth'}</span>
        </button>

        <button className={`mob-nav-btn ${(mobileView === 'main' && engine.activeView === 'assistant') ? 'active' : ''}`}
          onClick={() => { setMobileView('main'); engine.setActiveView('assistant'); }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          <span>{l === 'ar' ? 'المساعد' : 'AI'}</span>
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
