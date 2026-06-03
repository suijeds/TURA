'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [yearly, setYearly] = useState(false);
  const [modal, setModal] = useState<'none' | 'terms' | 'privacy'>('none');

  const l = lang;
  const isAr = l === 'ar';

  const toggleLang = () => setLang(p => p === 'ar' ? 'en' : 'ar');

  return (
    <div className="landing-wrap" dir={isAr ? 'rtl' : 'ltr'} style={{ direction: isAr ? 'rtl' : 'ltr', fontFamily: isAr ? 'var(--font-ar)' : 'var(--font-en)' }}>
      
      {/* ══════ LANDING NAV ══════ */}
      <nav className="landing-nav">
        <div className="logo" style={{ margin: 0 }}>TURA <span className="logo-version">v14</span></div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="ftab" onClick={toggleLang} style={{ padding: '4px 12px', fontSize: '0.75rem' }}>
            🌐 {isAr ? 'EN' : 'عربي'}
          </button>
          <Link href="/engine" className="btn-glow" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            {isAr ? 'البناء ✦' : 'Engine ✦'}
          </Link>
        </div>
      </nav>

      {/* ══════ HERO SECTION ══════ */}
      <header className="landing-hero">
        <div className="hero-badge">
          ✨ {isAr ? 'الجيل القادم من الهندسة البصرية' : 'NEXT-GEN CINEMATIC PROMPT ENGINEERING'}
        </div>
        
        <h1 className="hero-title">
          {isAr ? 'صياغة ' : 'Craft '}
          <span className="hero-title-highlight">{isAr ? 'الرؤية السينمائية' : 'Cinematic Vision'}</span>
          {isAr ? ' بالذكاء الاصطناعي' : ' with AI'}
        </h1>

        <p className="hero-subtitle">
          {isAr 
            ? 'المحرك البصري الأول عالمياً المخصص للمخرجين، مديري التصوير، وصناع الأفلام. حوّل أفكارك إلى موجهات دقيقة لمنصات Midjourney v7 و Sora v2 مع اكتشاف فوري للتعارضات الفنية وتقييم فوري للوزن البصري.'
            : 'The premium visual engine designed for directors, cinematographers, and filmmakers. Transform ideas into precise prompts for Midjourney v7 & Sora v2 with live art conflict detection and cinematic weight scoring.'}
        </p>

        <div className="hero-cta-wrap">
          <Link href="/engine" className="btn-glow" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
            {isAr ? 'ابدأ البناء مجاناً' : 'Start Building Free'} ✦
          </Link>
          <a href="#pricing" className="btn-outline">
            {isAr ? 'عرض الخطط' : 'View Plans'}
          </a>
        </div>
      </header>

      {/* ══════ FEATURES SECTION ══════ */}
      <section className="landing-section">
        <div className="section-tag">{isAr ? 'قدرات المحرك' : 'ENGINE CAPABILITIES'}</div>
        <h2 className="section-head">{isAr ? 'مصمم للتفوق البصري المطلق' : 'Engineered for Absolute Visual Supremacy'}</h2>

        <div className="features-grid">
          <div className="feat-card">
            <span className="feat-icon">🧠</span>
            <h3 className="feat-title">{isAr ? 'اكتشاف التعارضات الذكي' : 'Live Conflict Detection'}</h3>
            <p className="feat-desc">
              {isAr 
                ? 'يحلل المحرك خياراتك الفنية فورياً ليحذرك من أي تضارب بين نوع العدسة، حركة الكاميرا، أو الإضاءة لضمان واقعية المشهد.'
                : 'Analyzes your artistic choices instantly to prevent logic clashes between lens formats, camera weights, and physical lighting.'}
            </p>
          </div>

          <div className="feat-card">
            <span className="feat-icon">📊</span>
            <h3 className="feat-title">{isAr ? 'تقييم الوزن السينمائي' : 'Cinematic Weight Score'}</h3>
            <p className="feat-desc">
              {isAr 
                ? 'نظام نقاط متطور يقيّم اكتمال الموجه من 0 إلى 100 بناءً على المعايير الخمسة: التقنية، الأسلوب، اللون، المزاج، والتأطير.'
                : 'Advanced scoring engine evaluates prompt maturity from 0 to 100 based on core pillars: Tech, Style, Color, Mood, and Framing.'}
            </p>
          </div>

          <div className="feat-card">
            <span className="feat-icon">📜</span>
            <h3 className="feat-title">{isAr ? 'سجل وحفظ الموجهات' : 'Prompt History & Save'}</h3>
            <p className="feat-desc">
              {isAr 
                ? 'احتفظ بأفضل الموجهات التي صممتها في السجل الخاص بك، واسترجعها بضغطة زر واحدة لمتابعة العمل أو التعديل الفوري.'
                : 'Keep your best prompt creations in your local history, and apply or reuse them instantly with a single click.'}
            </p>
          </div>

          <div className="feat-card">
            <span className="feat-icon">🌐</span>
            <h3 className="feat-title">{isAr ? 'تصدير متعدد المنصات' : 'Multi-Platform Syntax'}</h3>
            <p className="feat-desc">
              {isAr 
                ? 'توليد تلقائي للصيغ والأوامر المخصصة لمنصات توليد الصور والفيديو الرائدة مثل Midjourney v7, DALL-E 3, Sora, و Flux.'
                : 'Native auto-formatting and parameter syntax output tailored for Midjourney v7, DALL-E 3, Sora, and Flux generation models.'}
            </p>
          </div>
        </div>
      </section>

      {/* ══════ PRICING SECTION ══════ */}
      <section className="landing-section" id="pricing">
        <div className="section-tag">{isAr ? 'الاستثمار البصري' : 'PREMIUM INVESTMENT'}</div>
        <h2 className="section-head">{isAr ? 'خطط مرنة تناسب طموحك' : 'Flexible Plans for Every Scale'}</h2>

        {/* Toggle */}
        <div className="pricing-toggle">
          <button className={`pt-btn ${!yearly ? 'active' : ''}`} onClick={() => setYearly(false)}>
            {isAr ? 'شهري' : 'Monthly'}
          </button>
          <button className={`pt-btn ${yearly ? 'active' : ''}`} onClick={() => setYearly(true)} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>{isAr ? 'سنوي' : 'Yearly'}</span>
            <span className="discount-badge">{isAr ? 'وفر 20%' : 'SAVE 20%'}</span>
          </button>
        </div>

        {/* Grid */}
        <div className="pricing-grid">
          
          {/* Plan 1: Free */}
          <div className="plan-card">
            <div>
              <h3 className="plan-name">{isAr ? 'الأساسية' : 'Basic'}</h3>
              <div className="plan-price-wrap">
                <span className="plan-price">$0</span>
                <span className="plan-period">{isAr ? '/ للأبد' : '/ forever'}</span>
              </div>
              <ul className="plan-list">
                <li className="plan-item">{isAr ? 'وصول قياسي لكافة الأقسام الـ 10' : 'Access to all 10 engine sections'}</li>
                <li className="plan-item">{isAr ? 'حفظ السجل محلياً في المتصفح' : 'Local browser history storage'}</li>
                <li className="plan-item">{isAr ? 'تصدير النصوص الفوري' : 'Instant plain text prompt export'}</li>
                <li className="plan-item">{isAr ? 'اكتشاف التعارضات الأساسي' : 'Basic live logic checks'}</li>
              </ul>
            </div>
            <Link href="/engine" className="plan-btn secondary" style={{ display: 'block' }}>
              {isAr ? 'ابدأ مجاناً' : 'Get Started'}
            </Link>
          </div>

          {/* Plan 2: Pro */}
          <div className="plan-card pro">
            <div className="plan-badge">{isAr ? 'الأكثر طلباً' : 'POPULAR'}</div>
            <div>
              <h3 className="plan-name" style={{ color: 'var(--accent)' }}>{isAr ? 'المخرجين (Pro)' : 'Director Pro'}</h3>
              <div className="plan-price-wrap">
                <span className="plan-price">${yearly ? '10' : '12'}</span>
                <span className="plan-period">{isAr ? '/ شهر' : '/ month'}</span>
              </div>
              <ul className="plan-list">
                <li className="plan-item" style={{ color: 'var(--text)' }}>{isAr ? 'كافة ميزات الخطة الأساسية' : 'All Basic features included'}</li>
                <li className="plan-item" style={{ color: 'var(--text)' }}>{isAr ? 'حفظ غير محدود وسجل ممتد' : 'Unlock unlimited local storage & history'}</li>
                <li className="plan-item" style={{ color: 'var(--text)' }}>{isAr ? 'أولوية التحديثات للنماذج الجديدة' : 'Priority updates for new AI models'}</li>
                <li className="plan-item" style={{ color: 'var(--text)' }}>{isAr ? 'شارة المخرجين الذهبية الحصرية' : 'Exclusive golden Director badge'}</li>
                <li className="plan-item" style={{ color: 'var(--text)' }}>{isAr ? 'تصدير وتخزين غير محدود في السحابة' : 'Unlimited cloud save & exports'}</li>
              </ul>
            </div>
            <Link href="/engine" className="plan-btn primary" style={{ display: 'block' }}>
              {isAr ? 'تفعيل الخطة الاحترافية' : 'Upgrade to Pro'}
            </Link>
          </div>

          {/* Plan 3: Studio */}
          <div className="plan-card">
            <div>
              <h3 className="plan-name">{isAr ? 'الاستوديوهات' : 'Studio Teams'}</h3>
              <div className="plan-price-wrap">
                <span className="plan-price">${yearly ? '32' : '39'}</span>
                <span className="plan-period">{isAr ? '/ شهر' : '/ month'}</span>
              </div>
              <ul className="plan-list">
                <li className="plan-item">{isAr ? 'حسابات متعددة لفرق العمل (حتى 5)' : 'Multi-seat access for teams (up to 5)'}</li>
                <li className="plan-item">{isAr ? 'تكامل مخصص مع API الداخلي' : 'Custom pipeline API integration'}</li>
                <li className="plan-item">{isAr ? 'مشاركة الموجهات والمساحات المشتركة' : 'Shared team workspace & prompts'}</li>
                <li className="plan-item">{isAr ? 'دعم فني مخصص على مدار الساعة' : '24/7 dedicated visual support'}</li>
              </ul>
            </div>
            <button className="plan-btn secondary" onClick={() => alert(isAr ? 'تم إرسال طلب التواصل مع فريق مبيعات الاستوديوهات!' : 'Contact request sent to Studio sales!')}>
              {isAr ? 'تواصل مع المبيعات' : 'Contact Sales'}
            </button>
          </div>

        </div>
      </section>

      {/* ══════ FOOTER & LEGAL ══════ */}
      <footer className="landing-footer">
        <div className="footer-links">
          <span className="footer-link" onClick={() => setModal('terms')}>
            {isAr ? 'شروط الاستخدام' : 'Terms of Service'}
          </span>
          <span className="footer-link" onClick={() => setModal('privacy')}>
            {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </span>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-link">
            {isAr ? 'تويتر / X' : 'Twitter / X'}
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">
            {isAr ? 'المجتمع' : 'Community'}
          </a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} TURA Cinematic Prompt Engine. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
        </div>
      </footer>

      {/* ══════ LEGAL MODALS ══════ */}
      {modal !== 'none' && (
        <div className="modal-overlay" onClick={() => setModal('none')}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">
                {modal === 'terms' 
                  ? (isAr ? 'شروط الاستخدام والخدمة' : 'Terms of Service')
                  : (isAr ? 'سياسة الخصوصية وحماية البيانات' : 'Privacy Policy')}
              </span>
              <button className="modal-close" onClick={() => setModal('none')}>×</button>
            </div>
            <div className="modal-body" style={{ direction: isAr ? 'rtl' : 'ltr', textAlign: isAr ? 'right' : 'left' }}>
              {modal === 'terms' ? (
                <>
                  <h3>{isAr ? '1. قبول الشروط' : '1. Acceptance of Terms'}</h3>
                  <p>{isAr ? 'باستخدامك لمحرك TURA، فإنك توافق على الالتزام بكافة الشروط والأحكام الموضحة هنا لضمان بيئة إبداعية آمنة.' : 'By accessing the TURA engine, you agree to be bound by these terms to ensure a secure creative environment.'}</p>
                  
                  <h3>{isAr ? '2. الملكية الفكرية للموجهات' : '2. Prompt Intellectual Property'}</h3>
                  <p>{isAr ? 'كافة الموجهات (Prompts) التي تقوم ببنائها وتوليدها باستخدام الأداة تظل ملكيتك الفكرية الكاملة ولك حرية استخدامها تجارياً.' : 'All prompts constructed using the engine remain your exclusive intellectual property for commercial or personal use.'}</p>
                  
                  <h3>{isAr ? '3. إخلاء المسؤولية' : '3. Disclaimer'}</h3>
                  <p>{isAr ? 'الأداة تقدم كمرشد فني لتنسيق الأوامر، ولا نتحمل مسؤولية مخرجات النماذج النهائية للذكاء الاصطناعي.' : 'The engine is provided as an artistic parameters reference guide. We are not liable for ultimate third-party AI image outputs.'}</p>
                </>
              ) : (
                <>
                  <h3>{isAr ? '1. جمع وتخزين البيانات' : '1. Data Collection & Storage'}</h3>
                  <p>{isAr ? 'في الخطة الأساسية، يتم تخزين كافة الموجهات والسجل محلياً في متصفحك (LocalStorage) ولا نقوم برفعها لأي خوادم خارجية.' : 'On the Basic plan, all prompts and history entries are saved purely in your local browser storage. We do not upload them.'}</p>
                  
                  <h3>{isAr ? '2. ملفات تعريف الارتباط (Cookies)' : '2. Cookies'}</h3>
                  <p>{isAr ? 'نستخدم ملفات تعريف ارتباط أساسية فقط لحفظ تفضيلات اللغة والنسق البصري لضمان استمرارية التجربة.' : 'We use strictly necessary cookies solely to persist session settings such as theme styles and locale selections.'}</p>
                  
                  <h3>{isAr ? '3. أمان البيانات' : '3. Data Security'}</h3>
                  <p>{isAr ? 'نتبع أعلى معايير التشفير وحماية البيانات لضمان خصوصية الحسابات المشتركة في الخطط السحابية.' : 'We implement industry-standard security models to guarantee the robust confidentiality of Cloud/Studio persistent accounts.'}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
