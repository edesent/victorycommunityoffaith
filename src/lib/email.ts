import { Resend } from "resend";

// ── Where website form submissions go ────────────────────────────────────────
// Every form on the site (contact, prayer, volunteer, L.E.A.D. enrollment,
// wedding/rental/counseling requests) sends here.
//
// SENDER must be an address at a domain verified in Resend
// (https://resend.com/domains). Until victorychurchwichita.com is verified
// there, the shared "onboarding@resend.dev" sender is used — NOTE: that shared
// sender only delivers to the address the Resend account was created with. Once
// the domain is verified, change SENDER to the commented line below and mail
// will reach CHURCH_INBOX directly.
export const CHURCH_INBOX = "jpenny316@gmail.com";
export const SENDER = "Victory Community of Faith <onboarding@resend.dev>";
// export const SENDER = "Victory Community of Faith <website@victorychurchwichita.com>";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

type SendResult = { ok: true } | { ok: false; status: number; error: string };

/** Send a form submission to the church inbox via Resend. */
export async function sendChurchEmail(opts: {
  subject: string;
  replyTo?: string;
  text: string;
  html: string;
}): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return { ok: false, status: 500, error: "The form isn't configured yet." };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: SENDER,
    to: CHURCH_INBOX,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      ok: false,
      status: 502,
      error: "Sorry, the message couldn't be sent. Please try again.",
    };
  }

  return { ok: true };
}

/** Build a plain-text + HTML body from an ordered list of label/value pairs. */
export function formatFields(fields: [string, string][], message?: string) {
  const rows = fields.filter(([, v]) => v);

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    (message ? `\n\nMessage:\n${message}\n` : "\n");

  const html =
    rows
      .map(([k, v]) => `<p><strong>${escapeHtml(k)}:</strong> ${escapeHtml(v)}</p>`)
      .join("") +
    (message
      ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`
      : "");

  return { text, html };
}
