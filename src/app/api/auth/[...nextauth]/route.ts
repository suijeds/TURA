export const runtime = "edge";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (credentials?.email === "admin@tura.app" && credentials?.password === "admin123") {
          return { id: "1", name: "Admin User", email: "admin@tura.app" };
        }
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "some-default-fallback-secret-key-for-nextauth",
  pages: {
    signIn: "/auth/signin",
  }
});

export const { GET, POST } = handlers;
