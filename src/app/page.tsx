'use client';
export const runtime = 'edge';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const l = lang;
  const isAr = l === 'ar';

  const toggleLang = () => setLang(p => p === 'ar' ? 'en' : 'ar');

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    setMousePos({ x, y });
  };

  // Reset offset if mouse leaves window
  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      className="dark-landing-wrapper" 
      dir={isAr ? 'rtl' : 'ltr'}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Background Decorative Spheres with mouse-parallax transform offset */}
      <div 
        className="bg-sphere sphere-top-right float-animation-slow" 
        style={{
          transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)`
        }}
      ></div>
      <div 
        className="bg-sphere sphere-middle-right float-animation-medium"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`
        }}
      ></div>
      <div 
        className="bg-sphere sphere-bottom-left float-animation-fast"
        style={{
          transform: `translate3d(${mousePos.x * -45}px, ${mousePos.y * -45}px, 0)`
        }}
      ></div>
      
      {/* Glowing atmospheric lights */}
      <div className="glow-orb glow-orange"></div>
      <div className="glow-orb glow-blue"></div>

      <nav className="minimal-nav">
        <div className="nav-logo">
          <span className="logo-dot"></span>
          TURA v14
        </div>
        <div className="nav-links">
          <span className="nav-link" onClick={() => window.location.href = '/engine'}>
            {isAr ? 'المحرك' : 'Engine'}
          </span>
          <span className="nav-link" onClick={toggleLang}>
            {isAr ? 'English' : 'العربية'}
          </span>
        </div>
      </nav>

      {/* ── HERO CORE CONTENT ── */}
      <main className="hero-content">
        <h1 className="hero-title-bold">
          {isAr ? 'تكوين وبناء سينمائي' : 'Minimalist'}
          <br />
          <span className="text-glow">{isAr ? 'بأبسط الأساليب' : 'Web Design'}</span>
        </h1>
        <p className="hero-subtitle-light">
          {isAr 
            ? 'نظام هندسة بصري متطور، حديث، وسهل. صمم موجهات سينمائية فائقة الواقعية.'
            : 'Clean. Modern. Effective. Craft cinematic prompts and build visual masterworks.'}
        </p>

        <div className="hero-button-group">
          <Link href="/engine" className="btn-get-started">
            {isAr ? 'ابدأ الآن' : 'Get Started'}
          </Link>
          <Link href="/engine?view=colorlab" className="btn-learn-more">
            {isAr ? 'معمل الألوان' : 'Color Lab'}
          </Link>
        </div>
      </main>

      {/* ── STYLING (Embedded CSS for exact visual matching) ── */}
      <style jsx global>{`
        /* Import Outfit or modern font if desired */
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Cairo:wght@300;400;700&display=swap');

        :root {
          --font-landing: 'Outfit', 'Cairo', sans-serif;
        }

        .dark-landing-wrapper {
          background-color: #121214;
          color: #ffffff;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          font-family: var(--font-landing);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 10%;
          box-sizing: border-box;
        }

        /* 3D Skeuomorphic/Neumorphic Spheres */
        .bg-sphere {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #555860 0%, #1e2025 60%, #0d0e10 100%);
          box-shadow: 
            -10px -10px 30px rgba(255, 255, 255, 0.05),
            15px 15px 40px rgba(0, 0, 0, 0.7),
            inset 2px 2px 5px rgba(255, 255, 255, 0.1),
            inset -5px -5px 15px rgba(0, 0, 0, 0.8);
          z-index: 1;
          transition: transform 0.25s cubic-bezier(0.1, 0.8, 0.25, 1);
          pointer-events: none; /* Let pointer events bubble to container for parallax */
        }

        .sphere-top-right {
          width: 180px;
          height: 180px;
          top: 15%;
          right: 12%;
        }

        .sphere-middle-right {
          width: 45px;
          height: 45px;
          top: 48%;
          right: 25%;
          opacity: 0.8;
          background: radial-gradient(circle at 35% 35%, #444750 0%, #17181c 65%, #08090a 100%);
        }

        .sphere-bottom-left {
          width: 140px;
          height: 140px;
          bottom: 8%;
          left: 10%;
        }

        /* Ambient Glows */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.15;
          z-index: 0;
          pointer-events: none;
        }
        .glow-orange {
          width: 400px;
          height: 400px;
          background: #ff5722;
          bottom: -10%;
          right: -5%;
        }
        .glow-blue {
          width: 350px;
          height: 350px;
          background: #00bcd4;
          top: -5%;
          left: -5%;
        }

        /* Continuous Float Animations (Slightly randomized parameters) */
        @keyframes floatSlow {
          0% { top: 15%; right: 12%; }
          50% { top: 16.5%; right: 11%; }
          100% { top: 15%; right: 12%; }
        }
        @keyframes floatMedium {
          0% { top: 48%; right: 25%; }
          50% { top: 46%; right: 26.5%; }
          100% { top: 48%; right: 25%; }
        }
        @keyframes floatFast {
          0% { bottom: 8%; left: 10%; }
          50% { bottom: 9.5%; left: 9%; }
          100% { bottom: 8%; left: 10%; }
        }

        .float-animation-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
        .float-animation-medium {
          animation: floatMedium 9s ease-in-out infinite;
        }
        .float-animation-fast {
          animation: floatFast 7s ease-in-out infinite;
        }

        /* ── NAVBAR Styles ── */
        .minimal-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 0;
          z-index: 10;
          position: relative;
        }
        .nav-logo {
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #e2e4e9;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .logo-dot {
          width: 10px;
          height: 10px;
          background-color: #a3a7b5;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-link {
          font-size: 0.9rem;
          color: #a0a5b5;
          cursor: pointer;
          transition: color 0.25s ease;
          letter-spacing: 0.3px;
        }
        .nav-link:hover {
          color: #ffffff;
        }

        /* ── HERO Content Styles ── */
        .hero-content {
          margin: auto 0;
          z-index: 10;
          position: relative;
          max-width: 600px;
        }
        .hero-title-bold {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1px;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .text-glow {
          color: #f1f2f5;
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.15);
        }
        .hero-subtitle-light {
          font-size: 1.1rem;
          color: #8f93a3;
          font-weight: 300;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        /* ── BUTTON GROUP Styles ── */
        .hero-button-group {
          display: flex;
          gap: 18px;
          align-items: center;
        }
        .btn-get-started {
          background: linear-gradient(135deg, #4d515a 0%, #2b2e35 100%);
          color: #ffffff;
          padding: 14px 34px;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.35),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);
        }
        .btn-get-started:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.45),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
          background: linear-gradient(135deg, #5c606b 0%, #353841 100%);
        }
        .btn-learn-more {
          color: #e2e5f0;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 14px 34px;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .btn-learn-more:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        /* ── RESPONSIVE TWEAKS ── */
        @media (max-width: 768px) {
          .dark-landing-wrapper {
            padding: 0 6%;
          }
          .hero-title-bold {
            font-size: 2.8rem;
          }
          .bg-sphere {
            opacity: 0.5;
          }
          .sphere-top-right {
            width: 120px;
            height: 120px;
            right: 5%;
          }
          .sphere-bottom-left {
            width: 90px;
            height: 90px;
            left: 5%;
          }
        }
      `}</style>
    </div>
  );
}
