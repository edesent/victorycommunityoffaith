import { formatFields, sendChurchEmail } from "@/lib/email";

// One route behind several forms — volunteering, L.E.A.D. enrollment, facility
// rentals, officiant requests, and counseling. Each form posts a `kind` plus
// its own extra label/value pairs, which become lines in the email.
const KINDS = [
  "Volunteer sign-up",
  "L.E.A.D. enrollment",
  "Facility rental",
  "Officiant request",
  "Counseling & care",
  "Plan a visit",
] as const;

type Kind = (typeof KINDS)[number];

function isKind(value: string): value is Kind {
  return (KINDS as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.botcheck) return Response.json({ success: true });

  const kind = String(body.kind ?? "").trim();
  if (!isKind(kind)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

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

  // Extra per-form fields, e.g. [["Course", "LEAD 101"], ["Preferred date", "…"]].
  const extras: [string, string][] = Array.isArray(body.details)
    ? (body.details as unknown[])
        .filter(
          (row): row is [unknown, unknown] => Array.isArray(row) && row.length === 2
        )
        .map(([label, value]) => [
          String(label).slice(0, 80),
          String(value).slice(0, 500),
        ])
    : [];

  const { text, html } = formatFields(
    [["Name", name], ["Email", email], ["Phone", phone], ...extras],
    message
  );

  const result = await sendChurchEmail({
    subject: `${kind} — ${name}`,
    replyTo: email,
    text,
    html,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
