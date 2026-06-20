import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createTicket = mutation({
  args: {
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
  },
  handler: async (ctx: any, args: any) => {
    const ticketId = await ctx.db.insert("supportTickets", {
      email: args.email,
      messages: args.messages,
      status: args.status,
      createdAt: args.createdAt,
    });
    return ticketId;
  },
});
