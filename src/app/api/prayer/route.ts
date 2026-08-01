import { formatFields, sendChurchEmail } from "@/lib/email";

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

  const { text, html } = formatFields(
    [
      ["Name", name],
      ["Email", email],
      ["Private", isPrivate ? "Yes — pastor only" : "No — may be shared with the prayer team"],
    ],
    message
  );

  const result = await sendChurchEmail({
    subject: `${isPrivate ? "[PRIVATE] " : ""}Prayer request from ${name}`,
    replyTo: email,
    text,
    html,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
