'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // If user is already logged in, redirect to /engine
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        window.location.href = '/engine';
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        window.location.href = '/engine';
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data, error: err } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (err) {
        setError(err.message || 'بيانات الدخول غير صحيحة. جرب admin@tura.app / admin123');
      } else {
        window.location.href = '/engine';
      }
    } catch (err: any) {
      setError('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      const { error: err } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/engine',
        },
      });
      if (err) throw err;
    } catch (err: any) {
      console.error(err);
      setError('فشلت تهيئة الدخول بجوجل. يرجى التأكد من تهيئة متغيرات البيئة لـ Supabase.');
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="glow-bg glow-one"></div>
      <div className="glow-bg glow-two"></div>
      
      <div className="signin-card">
        <div className="card-header">
          <div className="logo-badge">TURA v14</div>
          <h1>تسجيل الدخول</h1>
          <p>ابدأ تصميم الموجهات السينمائية الفاخرة</p>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="btn-google"
        >
          <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-1.14 2.78-2.4 3.62v3.02h3.87c2.26-2.08 3.58-5.14 3.58-8.49z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.87-3.02c-1.08.72-2.45 1.16-4.09 1.16-3.15 0-5.81-2.13-6.76-5.01H1.31v3.11c2 3.97 6.1 6.67 10.69 6.67z"/>
            <path fill="#FBBC05" d="M5.24 14.22c-.25-.72-.39-1.5-.39-2.31 0-.81.14-1.59.39-2.31V6.5H1.31C.48 8.15 0 10.02 0 12s.48 3.85 1.31 5.5l3.93-3.28z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.96 1.19 15.24 0 12 0 7.41 0 3.31 2.7 1.31 6.67l3.93 3.11c.95-2.88 3.61-5.03 6.76-5.03z"/>
          </svg>
          <span>الدخول بواسطة Google</span>
        </button>

        <div className="divider">
          <span>أو بالبريد الإلكتروني</span>
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input 
              type="email" 
              placeholder="admin@tura.app"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>كلمة المرور</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="btn-submit" 
            disabled={loading}
          >
            {loading ? "جاري الدخول..." : "تسجيل الدخول"}
          </button>
        </form>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap');

        .signin-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0d0e12;
          font-family: 'Cairo', sans-serif;
          color: #ffffff;
          overflow: hidden;
          padding: 20px;
          direction: rtl;
        }

        /* Ambient Glow backgrounds */
        .glow-bg {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(160px);
          opacity: 0.12;
          z-index: 1;
          pointer-events: none;
        }
        .glow-one {
          background: #ff5722;
          top: -10%;
          left: -10%;
        }
        .glow-two {
          background: #00bcd4;
          bottom: -10%;
          right: -10%;
        }

        /* Glassmorphic card styling */
        .signin-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 440px;
          background: rgba(22, 23, 30, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          animation: cardAppear 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .logo-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #d4a020;
          background: rgba(212, 160, 32, 0.1);
          border: 1px solid rgba(212, 160, 32, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        .card-header h1 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #ffffff;
        }

        .card-header p {
          font-size: 0.9rem;
          color: #8c8f9f;
          margin: 0;
          font-weight: 300;
        }

        /* Google button styling */
        .btn-google {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 12px;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-google:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }

        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 24px 0;
          color: #5b5e6f;
          font-size: 0.8rem;
        }

        .divider::before, .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .divider span {
          padding: 0 12px;
        }

        /* Form input fields styling */
        .signin-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #a3a7be;
        }

        .form-group input {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.25s ease;
        }

        .form-group input:focus {
          border-color: #d4a020;
          background: rgba(0, 0, 0, 0.35);
          box-shadow: 0 0 12px rgba(212, 160, 32, 0.15);
        }

        .error-message {
          color: #ff5252;
          font-size: 0.85rem;
          text-align: center;
          background: rgba(255, 82, 82, 0.1);
          border: 1px solid rgba(255, 82, 82, 0.25);
          padding: 8px 12px;
          border-radius: 8px;
        }

        .btn-submit {
          background: linear-gradient(135deg, #d4a020 0%, #b8860b 100%);
          color: #000000;
          font-weight: 700;
          padding: 14px;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(212, 160, 32, 0.2);
        }

        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(212, 160, 32, 0.35);
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>
    </div>
  );
}
