import { formatFields, sendChurchEmail } from "@/lib/email";

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
  const reason = String(body.reason ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  const { text, html } = formatFields(
    [
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Reason", reason],
    ],
    message
  );

  const result = await sendChurchEmail({
    subject: reason
      ? `Website: ${reason} — ${name}`
      : `New website message from ${name}`,
    replyTo: email,
    text,
    html,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
