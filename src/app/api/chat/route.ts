import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'; // Trigger Cloudflare build with nodejs_compat enabled

export async function POST(req: NextRequest) {
  try {
    const { apiKey, messages, systemPrompt, lang } = await req.json();

    if (!apiKey || typeof apiKey !== 'string') {
      return NextResponse.json(
        { error: lang === 'ar' ? 'مفتاح API مفقود. أضفه من الإعدادات ← عقل المساعد' : 'API key missing. Add it from Settings → Assistant Brain' },
        { status: 400 }
      );
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: lang === 'ar' ? 'لا توجد رسائل للإرسال' : 'No messages to send' },
        { status: 400 }
      );
    }

    // Keep only the last 8 messages to reduce token usage and keep optimal context
    const recentMessages = messages.slice(-8);

    // Format messages for Gemini API
    const contents = recentMessages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: contents,
        systemInstruction: {
          parts: [{ text: systemPrompt || '' }]
        },
        generationConfig: {
          maxOutputTokens: 8192,
        }
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      let errorMsg = lang === 'ar' ? 'خطأ من Gemini API' : 'Gemini API error';
      
      if (response.status === 400 || response.status === 403 || response.status === 401) {
        errorMsg = lang === 'ar' ? 'مفتاح API غير صالح. تأكد من صحته في الإعدادات ← عقل المساعد' : 'Invalid API key. Check it in Settings → Assistant Brain';
      } else if (response.status === 429) {
        errorMsg = lang === 'ar' ? 'تم تجاوز حد الطلبات. انتظر قليلاً ثم حاول مرة أخرى' : 'Rate limit exceeded. Wait a moment and try again';
      }
      
      console.error('Gemini API error:', response.status, errBody);
      try {
        const parsedErr = JSON.parse(errBody);
        const detail = parsedErr.error?.message || errBody;
        errorMsg = `${errorMsg} - Details: ${detail}`;
      } catch {
        errorMsg = `${errorMsg} - Details: ${errBody}`;
      }
      return NextResponse.json({ error: errorMsg }, { status: response.status });
    }

    const data = await response.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return NextResponse.json({ content });
  } catch (err) {
    console.error('Chat API route error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
