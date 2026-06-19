import { ConvexReactClient } from "convex/react";
import { Adapter } from "next-auth/adapters";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "https://placeholder-url.convex.cloud");

export const ConvexAdapter: Adapter = {
  async createUser(user) {
    // Custom logic to insert user into Convex database using mutation if needed
    return user as any;
  },
  async getUser(id) {
    return null;
  },
  async getUserByEmail(email) {
    return null;
  },
  async getUserByAccount({ providerAccountId, provider }) {
    return null;
  },
  async updateUser(user) {
    return user as any;
  },
  async deleteUser(userId) {
    return;
  },
  async linkAccount(account) {
    return;
  },
  async unlinkAccount({ providerAccountId, provider }) {
    return;
  },
  async createSession({ sessionToken, userId, expires }) {
    return { sessionToken, userId, expires };
  },
  async getSessionAndUser(sessionToken) {
    return null;
  },
  async updateSession(session) {
    return session as any;
  },
  async deleteSession(sessionToken) {
    return;
  },
  async createVerificationToken({ identifier, expires, token }) {
    return { identifier, expires, token };
  },
  async useVerificationToken({ identifier, token }) {
    return null;
  },
};
