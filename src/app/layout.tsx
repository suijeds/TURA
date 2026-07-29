import type { Metadata } from "next";
import "./globals.css";
import SupportWidget from "@/components/SupportWidget";

export const metadata: Metadata = {
  title: "TURA — Cinematic Prompt Engine",
  description: "محرك بناء البرومبت السينمائي — أداة احترافية لإنشاء موجهات الصور والفيديو بجودة سينمائية عالية. أكثر من 400 خيار سينمائي.",
  keywords: "cinematic prompt, AI image generation, Midjourney, Stable Diffusion, Sora, Arabic AI tools, TURA",
  openGraph: {
    title: "TURA — Cinematic Prompt Engine",
    description: "400+ خيار سينمائي. ثنائي اللغة. بدون إنترنت.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>
        {children}
        <SupportWidget />
      </body>
    </html>
  );
}
