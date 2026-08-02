import { CHAT } from "@/config/content";

// Deliver a website form into the church's Slack channel (#victory-cof) through
// the WBC Chat backend — the same connection the chat bubble uses.
//
// Why Slack and not email: this path needs no API key or verified domain, so it
// works the day it ships, and it reaches the pastor's phone in seconds. See the
// README for which forms use this vs. Resend.

type SendResult = { ok: true } | { ok: false; status: number; error: string };

const FAILURE =
  "Sorry, that didn't send. Please try again, or call us at (316) 305-0337.";

export interface SlackFormPayload {
  /** Bold headline in Slack, e.g. "🙏 Prayer request". */
  subject: string;
  name: string;
  /** Email, or "email · phone" — whatever the pastor should reply to. */
  contact: string;
  /** Label/value pairs printed above the message, in order. */
  fields?: [string, string][];
  /** The visitor's own words. */
  message?: string;
  /** Optional line placed first, e.g. a privacy notice. */
  banner?: string;
}

export async function sendToSlack(payload: SlackFormPayload): Promise<SendResult> {
  const lines = [
    ...(payload.banner ? [payload.banner, ""] : []),
    // Trim a trailing "?" so a question-style label doesn't read "on?:".
    ...(payload.fields ?? [])
      .filter(([, value]) => value)
      .map(([label, value]) => `*${label.replace(/\s*\?$/, "")}:* ${value}`),
    ...(payload.message ? ["", payload.message] : []),
  ].filter(
    // Collapse runs of blank lines (a banner with no fields would leave two).
    (line, i, all) => line !== "" || (i > 0 && all[i - 1] !== "")
  );

  try {
    const response = await fetch(`${CHAT.origin}/api/chat/contact-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: CHAT.apiKey,
        subject: payload.subject,
        name: payload.name,
        contact: payload.contact,
        // The backend rejects an empty message.
        message: lines.join("\n").trim() || "No extra details given.",
      }),
    });

    if (!response.ok) {
      console.error("Slack form failed:", response.status, await response.text());
      return { ok: false, status: 502, error: FAILURE };
    }
  } catch (error) {
    console.error("Slack form error:", error);
    return { ok: false, status: 502, error: FAILURE };
  }

  return { ok: true };
}

/** Read the ordered label/value pairs a RequestForm posts as `details`. */
export function readDetails(value: unknown): [string, string][] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((row): row is [unknown, unknown] => Array.isArray(row) && row.length === 2)
    .map(
      ([label, v]) =>
        [String(label).slice(0, 80), String(v).slice(0, 300)] as [string, string]
    )
    .filter(([, v]) => v);
}
