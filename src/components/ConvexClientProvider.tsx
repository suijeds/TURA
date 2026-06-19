"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "https://placeholder-url.convex.cloud");

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ConvexProvider client={convex}>
        {children}
      </ConvexProvider>
    </SessionProvider>
  );
}
