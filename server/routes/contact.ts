import { RequestHandler } from "express";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(5).max(5000),
  subject: z.string().max(200).optional().default("Website contact"),
  source: z.string().max(100).optional().default("website"),
});

export const handleContact: RequestHandler = (req, res) => {
  const parse = schema.safeParse(req.body);
  if (!parse.success) {
    return res
      .status(400)
      .json({ error: "Invalid request", issues: parse.error.issues });
  }
  const payload = parse.data;

  // For demo purposes, log to server. In production, integrate with email/CRM.
  console.info("New contact submission", {
    at: new Date().toISOString(),
    ...payload,
    ip: req.ip,
    ua: req.get("user-agent"),
  });

  return res.status(200).json({ ok: true, received: true });
};
