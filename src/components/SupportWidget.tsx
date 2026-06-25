"use client";

import React, { useState, useEffect, useRef } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

interface Message {
  sender: "user" | "ai" | "system";
  text: string;
  timestamp: string;
}

export default function SupportWidget() {
  const user = useQuery(api.users.viewer);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isHumanRequested, setIsHumanRequested] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const triggerMutation = useMutation(api.support.createTicket);

  // Initialize with greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          sender: "ai",
          text: "مرحباً بك في الدعم الفني الذكي لـ TURA v14. كيف يمكنني مساعدتك اليوم؟",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsgText = inputText;
    setInputText("");

    const newMsg: Message = {
      sender: "user",
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setIsTyping(true);

    // AI Support Auto-replies simulation
    setTimeout(() => {
      setIsTyping(false);
      let aiResponse = "";
      const lower = userMsgText.toLowerCase();

      if (lower.includes("مشكلة") || lower.includes("خطأ") || lower.includes("عطل")) {
        aiResponse = "يؤسفني سماع ذلك. هل يمكنك تزويدي بمزيد من التفاصيل أو رقم الخطأ؟ كما يمكنك طلب تحويلك للدعم البشري في أي وقت.";
      } else if (lower.includes("اشتراك") || lower.includes("دفع") || lower.includes("كوبون")) {
        aiResponse = "تتوفر خيارات الاشتراك وإدخال الكوبونات من خلال حسابك الشخصي في شريط التنقل العلوي بالضغط على صورتك ثم 'الاشتراكات'.";
      } else if (lower.includes("سلام") || lower.includes("مرحبا") || lower.includes("اهلين")) {
        aiResponse = "أهلاً بك! أنا هنا لمساعدتك في أي استفسار يخص محرك TURA الذكي.";
      } else {
        aiResponse = "شكراً لتواصلك معنا. إذا كنت بحاجة لمساعدة مخصصة أو واجهت مشكلة تقنية، يمكنك الضغط على 'طلب دعم بشري' وسيتواصل معك أحد مطورينا مباشرة.";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1200);
  };

  const handleRequestHuman = async () => {
    if (isHumanRequested) return;

    const userEmail = user?.email || "anonymous@tura.app";
    setIsHumanRequested(true);
    setIsTyping(true);

    const ticketMessages = [
      ...messages,
      {
        sender: "system" as const,
        text: `تم طلب دعم بشري بواسطة البريد: ${userEmail}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ];

    try {
      const res = await triggerMutation({
        email: userEmail,
        messages: ticketMessages,
        status: "open",
        createdAt: new Date().toISOString(),
      });

      setTicketId(res);

      setMessages((prev) => [
        ...prev,
        {
          sender: "system",
          text: "تم تحويل المحادثة إلى دعم بشري بنجاح وتوليد تذكرة دعم للمطورين.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
        {
          sender: "ai",
          text: `تم تسجيل طلبك برقم التذكرة: ${res}. سيتواصل معك المطور الفني عبر البريد الإلكتروني قريباً.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    } catch (error) {
      console.error("Failed to create support ticket", error);
      setIsHumanRequested(false);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 10000, fontFamily: "inherit" }} dir="rtl">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent, #d4a020) 0%, #b8860b 100%)",
          color: "#000000",
          border: "none",
          boxShadow: "0 4px 20px rgba(212, 160, 32, 0.4)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transform: isOpen ? "rotate(135deg) scale(0.9)" : "rotate(0deg) scale(1)",
        }}
        title="الدعم الفني"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat Popup Widget */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "76px",
            right: "0",
            width: "360px",
            height: "480px",
            background: "rgba(10, 12, 16, 0.85)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "widgetFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px",
              background: "rgba(255, 255, 255, 0.03)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: isHumanRequested ? "#3b82f6" : "#10b981",
                  boxShadow: isHumanRequested ? "0 0 8px #3b82f6" : "0 0 8px #10b981",
                }}
              />
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: "var(--text1, #ffffff)" }}>
                  {isHumanRequested ? "الدعم الفني المباشر" : "المساعد الذكي TURA"}
                </div>
                <div style={{ fontSize: "0.68rem", color: "var(--text3, #94a3b8)" }}>
                  {isHumanRequested ? "جاري تحويلك للمطور" : "نشط الآن"}
                </div>
              </div>
            </div>
            
            {!isHumanRequested && (
              <button
                onClick={handleRequestHuman}
                style={{
                  background: "rgba(212, 160, 32, 0.1)",
                  border: "1px solid var(--accent, #d4a020)",
                  color: "var(--accent, #d4a020)",
                  fontSize: "0.72rem",
                  fontWeight: "bold",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                دعم بشري 👨‍💻
              </button>
            )}
          </div>

          {/* Messages List */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {messages.map((msg, idx) => {
              if (msg.sender === "system") {
                return (
                  <div
                    key={idx}
                    style={{
                      alignSelf: "center",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "var(--accent, #d4a020)",
                      fontSize: "0.68rem",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      textAlign: "center",
                    }}
                  >
                    {msg.text}
                  </div>
                );
              }

              const isUser = msg.sender === "user";
              return (
                <div
                  key={idx}
                  style={{
                    alignSelf: isUser ? "flex-start" : "flex-end",
                    maxWidth: "80%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: isUser ? "14px 14px 0 14px" : "14px 14px 14px 0",
                      background: isUser
                        ? "linear-gradient(135deg, var(--accent, #d4a020) 0%, #b8860b 100%)"
                        : "rgba(255, 255, 255, 0.05)",
                      color: isUser ? "#000000" : "#ffffff",
                      fontSize: "0.8rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {msg.text}
                  </div>
                  <span
                    style={{
                      fontSize: "0.62rem",
                      color: "var(--text3, #94a3b8)",
                      alignSelf: isUser ? "flex-start" : "flex-end",
                    }}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div
                style={{
                  alignSelf: "flex-end",
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "10px 14px",
                  borderRadius: "14px 14px 14px 0",
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <span className="dot" style={{ width: "6px", height: "6px", background: "#fff", borderRadius: "50%", display: "inline-block", animation: "bounce 1.4s infinite ease-in-out both" }}></span>
                <span className="dot" style={{ width: "6px", height: "6px", background: "#fff", borderRadius: "50%", display: "inline-block", animation: "bounce 1.4s infinite ease-in-out both 0.2s" }}></span>
                <span className="dot" style={{ width: "6px", height: "6px", background: "#fff", borderRadius: "50%", display: "inline-block", animation: "bounce 1.4s infinite ease-in-out both 0.4s" }}></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            style={{
              padding: "12px",
              background: "rgba(0, 0, 0, 0.2)",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              style={{
                flex: 1,
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "8px 12px",
                color: "#ffffff",
                fontSize: "0.8rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: "var(--accent, #d4a020)",
                border: "none",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#000000",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes widgetFadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      `}} />
    </div>
  );
}
