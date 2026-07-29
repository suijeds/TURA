"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      setSuccessMsg("تم إنشاء الحساب بنجاح! يرجى التحقق من بريدك لتفعيل الحساب، أو تسجيل الدخول.");
    } catch (err: any) {
      setErrorMsg(err.message || "خطأ أثناء إنشاء الحساب");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container" dir="rtl">
      <div className="glow-bg glow-one"></div>
      <div className="glow-bg glow-two"></div>
      
      <div className="signin-card">
        <h2 className="card-title">TURA — حساب جديد</h2>
        <p className="card-subtitle">أنشئ حساباً مجانياً للبدء في إنتاج برومبتس سينمائية</p>

        {errorMsg && <div className="feedback-message error">{errorMsg}</div>}
        {successMsg && <div className="feedback-message success">{successMsg}</div>}

        <form onSubmit={handleSignup} className="auth-form">
          <div className="form-group">
            <label className="form-label">الاسم الكامل</label>
            <input
              type="text"
              className="form-input"
              placeholder="مثال: محمد أحمد"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">البريد الإلكتروني</label>
            <input
              type="email"
              className="form-input"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">كلمة المرور</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
          </button>
        </form>

        <p className="footer-text">
          لديك حساب بالفعل؟{" "}
          <Link href="/login" className="auth-link">
            تسجيل الدخول
          </Link>
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap');
        
        body {
          margin: 0;
          background: #06080c;
          font-family: 'Cairo', sans-serif;
          color: #ffffff;
        }

        .signin-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #030406;
        }

        .glow-bg {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          pointer-events: none;
        }

        .glow-one {
          background: #d4a020;
          top: -10%;
          right: 10%;
        }

        .glow-two {
          background: #1a2333;
          bottom: -10%;
          left: 10%;
        }

        .signin-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 400px;
          padding: 32px;
          background: rgba(10, 12, 16, 0.65);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          animation: cardAppear 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 8px;
          color: #ffffff;
          text-align: center;
        }

        .card-subtitle {
          font-size: 0.8rem;
          color: #94a3b8;
          margin: 0 0 24px;
          text-align: center;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.8rem;
          color: #cbd5e1;
        }

        .form-input {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border-radius: 8px;
          padding: 10px 12px;
          outline: none;
          font-size: 0.85rem;
          transition: all 0.2s;
        }

        .form-input:focus {
          border-color: #d4a020;
          box-shadow: 0 0 0 2px rgba(212, 160, 32, 0.15);
        }

        .primary-btn {
          background: linear-gradient(135deg, #d4a020 0%, #b8860b 100%);
          color: #000000;
          font-weight: 700;
          border: none;
          border-radius: 8px;
          padding: 11px;
          cursor: pointer;
          font-size: 0.9rem;
          font-family: inherit;
          transition: all 0.25s ease;
        }

        .primary-btn:hover:not(:disabled) {
          opacity: 0.95;
          transform: translateY(-1px);
        }

        .primary-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .feedback-message {
          padding: 10px;
          border-radius: 8px;
          font-size: 0.8rem;
          margin-bottom: 16px;
          text-align: center;
        }

        .feedback-message.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .feedback-message.success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .footer-text {
          font-size: 0.8rem;
          color: #94a3b8;
          text-align: center;
          margin: 20px 0 0;
        }

        .auth-link {
          color: #d4a020;
          text-decoration: none;
          font-weight: 600;
        }

        .auth-link:hover {
          text-decoration: underline;
        }
      `}} />
    </div>
  );
}
