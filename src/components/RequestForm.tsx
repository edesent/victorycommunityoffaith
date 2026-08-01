"use client";

import { useState } from "react";

// One form component behind every "reach out" on the site: contact, planning a
// visit, volunteering, L.E.A.D. enrollment, rentals, officiant, and counseling.
// Name/email/phone/message are always present; `extras` adds whatever else that
// particular form needs. Values are sent both as `details` (label/value pairs
// the email prints in order) and as top-level keys, so /api/contact can read
// `reason` directly.

export type ExtraField =
  | {
      name: string;
      label: string;
      type: "text" | "tel" | "date";
      required?: boolean;
      placeholder?: string;
    }
  | {
      name: string;
      label: string;
      type: "select";
      options: string[];
      required?: boolean;
      placeholder?: string;
    };

interface Props {
  /** Where to post. Defaults to the shared request route. */
  endpoint?: string;
  /** Request type — must match a kind allowed by /api/request. */
  kind?: string;
  extras?: ExtraField[];
  messageLabel?: string;
  messagePlaceholder?: string;
  messageRequired?: boolean;
  submitLabel?: string;
  successTitle?: string;
  successBody?: string;
  /** Renders on a purple card instead of the cream one. */
  tone?: "cream" | "dark";
}

const inputBase =
  "w-full px-4 py-3 rounded-lg border text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all";

export default function RequestForm({
  endpoint = "/api/request",
  kind,
  extras = [],
  messageLabel = "Message",
  messagePlaceholder = "How can we help?",
  messageRequired = true,
  submitLabel = "Send",
  successTitle = "Thank you — we've got it.",
  successBody = "Someone from Victory will be in touch with you shortly.",
  tone = "cream",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  const dark = tone === "dark";
  const cardClass = dark
    ? "p-8 md:p-10 bg-brown-deep/60 rounded-2xl border border-white/10 space-y-5"
    : "p-8 md:p-10 bg-cream rounded-2xl border border-cream-dark space-y-5";
  const labelClass = dark
    ? "block text-xs font-bold tracking-[0.15em] uppercase text-gold-light/80 mb-2"
    : "block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2";
  const fieldClass = dark
    ? `${inputBase} bg-white/95 border-white/20`
    : `${inputBase} bg-warm-white border-cream-dark`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("sending");

    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    const details: [string, string][] = extras
      .map((field) => [field.label, value(field.name)] as [string, string])
      .filter(([, v]) => v);

    const extraValues = Object.fromEntries(
      extras.map((field) => [field.name, value(field.name)])
    );

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          name: value("name"),
          email: value("email"),
          phone: value("phone"),
          message: value("message"),
          botcheck: value("botcheck"),
          details,
          ...extraValues,
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(result.error || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }
      setStatus("sent");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={
          dark
            ? "p-10 bg-brown-deep/60 rounded-2xl border border-white/10 text-center"
            : "p-10 bg-cream rounded-2xl border border-cream-dark text-center"
        }
      >
        <svg
          className="w-14 h-14 mx-auto mb-4 text-gold"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
        <h3
          className={`font-serif text-2xl font-bold mb-2 ${
            dark ? "text-white" : "text-text-dark"
          }`}
        >
          {successTitle}
        </h3>
        <p className={dark ? "text-white/70" : "text-text-body"}>{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cardClass}>
      {/* Honeypot — hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${kind}-name`} className={labelClass}>
            Your Name
          </label>
          <input
            id={`${kind}-name`}
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${kind}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${kind}-email`}
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${kind}-phone`} className={labelClass}>
          Phone <span className="font-normal normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id={`${kind}-phone`}
          name="phone"
          type="tel"
          placeholder="(316) 555-0100"
          className={fieldClass}
        />
      </div>

      {extras.map((field) => (
        <div key={field.name}>
          <label htmlFor={`${kind}-${field.name}`} className={labelClass}>
            {field.label}
          </label>
          {field.type === "select" ? (
            <select
              id={`${kind}-${field.name}`}
              name={field.name}
              required={field.required}
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                {field.placeholder || "Choose one…"}
              </option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={`${kind}-${field.name}`}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              className={fieldClass}
            />
          )}
        </div>
      ))}

      <div>
        <label htmlFor={`${kind}-message`} className={labelClass}>
          {messageLabel}
        </label>
        <textarea
          id={`${kind}-message`}
          name="message"
          rows={5}
          required={messageRequired}
          placeholder={messagePlaceholder}
          className={`${fieldClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={
          dark
            ? "w-full sm:w-auto bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-60 disabled:translate-y-0"
            : "w-full sm:w-auto bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-60 disabled:translate-y-0"
        }
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
