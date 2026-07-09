"use client";

import React from "react";
import { SignUp } from "@clerk/nextjs";

export const runtime = 'edge';

export default function SignUpPage() {
  return (
    <div className="signin-container">
      <div className="glow-bg glow-one"></div>
      <div className="glow-bg glow-two"></div>
      
      <div className="signin-card-clerk">
        <SignUp
          routing="hash"
          signInUrl="/sign-in"
          appearance={{
            elements: {
              rootBox: "clerk-root",
              card: "clerk-card",
              headerTitle: "clerk-title",
              headerSubtitle: "clerk-subtitle",
              socialButtonsBlockButton: "clerk-social-btn",
              formButtonPrimary: "clerk-primary-btn",
              footerActionLink: "clerk-link",
              formFieldInput: "clerk-input",
              formFieldLabel: "clerk-label",
            },
          }}
        />
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

        .signin-card-clerk {
          position: relative;
          z-index: 10;
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

        .clerk-root {
          width: 100%;
        }
        
        .clerk-card {
          background: rgba(10, 12, 16, 0.65) !important;
          backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 16px !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
        }

        .clerk-title {
          color: #ffffff !important;
          font-family: 'Cairo', sans-serif !important;
          font-weight: 700 !important;
        }

        .clerk-subtitle {
          color: #94a3b8 !important;
          font-family: 'Cairo', sans-serif !important;
        }

        .clerk-social-btn {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          transition: all 0.25s ease !important;
        }

        .clerk-social-btn:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: #d4a020 !important;
        }

        .clerk-primary-btn {
          background: linear-gradient(135deg, #d4a020 0%, #b8860b 100%) !important;
          color: #000000 !important;
          font-weight: 700 !important;
          font-family: 'Cairo', sans-serif !important;
          transition: all 0.25s ease !important;
        }

        .clerk-primary-btn:hover {
          opacity: 0.9 !important;
          transform: translateY(-1px) !important;
        }

        .clerk-input {
          background: rgba(255, 255, 255, 0.04) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          color: #ffffff !important;
          border-radius: 8px !important;
        }

        .clerk-input:focus {
          border-color: #d4a020 !important;
          box-shadow: 0 0 0 2px rgba(212, 160, 32, 0.15) !important;
        }

        .clerk-label {
          color: #cbd5e1 !important;
          font-family: 'Cairo', sans-serif !important;
        }

        .clerk-link {
          color: #d4a020 !important;
        }

        .clerk-link:hover {
          color: #f7ca5e !important;
        }
      `}} />
    </div>
  );
}
