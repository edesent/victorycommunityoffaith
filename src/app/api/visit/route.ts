import { CHAT } from "@/config/content";

// "Plan Your Visit" → the church's Slack channel (#victory-cof), via the same
// WBC Chat backend that powers the chat bubble. Proxied server-side rather than
// posted from the browser so the whole payload is assembled and validated here.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this; real visitors never see it. Pretend success.
  if (body.botcheck) return Response.json({ success: true });

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email) {
    return Response.json(
      { error: "Please fill in your name and email." },
      { status: 400 }
    );
  }

  // Extra fields from the form, e.g. [["Which service", "Sunday 11 AM"], …].
  const extras: [string, string][] = Array.isArray(body.details)
    ? (body.details as unknown[])
        .filter(
          (row): row is [unknown, unknown] => Array.isArray(row) && row.length === 2
        )
        .map(
          ([label, value]) =>
            [String(label).slice(0, 80), String(value).slice(0, 300)] as [string, string]
        )
        .filter(([, value]) => value)
    : [];

  const lines = [
    // Trim any trailing "?" so a question-style label doesn't read "on?:".
    ...extras.map(([label, value]) => `*${label.replace(/\s*\?$/, "")}:* ${value}`),
    ...(message ? ["", message] : []),
  ];

  try {
    const response = await fetch(`${CHAT.origin}/api/chat/contact-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: CHAT.apiKey,
        subject: "🙌 Someone is planning a visit",
        name,
        contact: phone ? `${email} · ${phone}` : email,
        // The backend requires a non-empty message.
        message: lines.join("\n") || "No extra details given.",
      }),
    });

    if (!response.ok) {
      console.error("Visit form → Slack failed:", response.status, await response.text());
      return Response.json(
        { error: "Sorry, that didn't send. Please call us at (316) 305-0337." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Visit form → Slack error:", error);
    return Response.json(
      { error: "Sorry, that didn't send. Please call us at (316) 305-0337." },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
