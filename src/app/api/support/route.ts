import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { email, messages, status, createdAt } = await request.json();

    const webhookUrl = process.env.SUPPORT_WEBHOOK_URL;
    if (webhookUrl) {
      const formattedMessages = messages
        .map((m: any) => `**[${m.sender}]**: ${m.text} (${m.timestamp})`)
        .join('\n');

      const content = `🔔 **تذكرة دعم فني جديدة (TURA Human Support)**\n\n**البريد**: ${email}\n**الحالة**: ${status}\n**التاريخ**: ${createdAt}\n\n**المحادثة**:\n${formattedMessages}`;

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });
    }

    const ticketId = `TK-${Math.floor(100000 + Math.random() * 900000)}`;
    return NextResponse.json({ success: true, ticketId });
  } catch (error: any) {
    console.error('Support API error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
