import { sendToSlack } from "@/lib/slack-form";

// Prayer requests → the church's Slack channel, so the pastor and prayer team
// see them the moment they come in.
//
// On privacy: #victory-cof is a private Slack channel, but it is not just the
// pastor. When someone ticks "keep this private" we flag it loudly at the top
// of the message rather than pretending it went somewhere narrower — and the
// form's own wording says "pastoral team", not "the pastor alone".
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.botcheck) return Response.json({ success: true });

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const isPrivate = Boolean(body.private);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email, and request." },
      { status: 400 }
    );
  }

  const result = await sendToSlack({
    subject: isPrivate ? "🔒 Prayer request (private)" : "🙏 Prayer request",
    name,
    contact: email,
    banner: isPrivate
      ? "_Marked private — please keep this within the pastoral team and don't read it out._"
      : undefined,
    message,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
