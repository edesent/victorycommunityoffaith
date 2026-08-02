import { readDetails, sendToSlack } from "@/lib/slack-form";

// "Plan Your Visit" → the church's Slack channel, so someone can be watching
// for them at the door.
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

  const result = await sendToSlack({
    subject: "🙌 Someone is planning a visit",
    name,
    contact: phone ? `${email} · ${phone}` : email,
    fields: readDetails(body.details),
    message,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
