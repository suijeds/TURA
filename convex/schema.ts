import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  supportTickets: defineTable({
    email: v.string(),
    messages: v.array(
      v.object({
        sender: v.string(),
        text: v.string(),
        timestamp: v.string(),
      })
    ),
    status: v.string(),
    createdAt: v.string(),
  }),
});
