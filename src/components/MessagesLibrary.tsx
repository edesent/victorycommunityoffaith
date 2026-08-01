"use client";

import { useMemo, useState } from "react";
import type { MessageItem } from "@/lib/messages";

export default function MessagesLibrary({
  messages,
}: {
  messages: MessageItem[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");

  const activeMessage = useMemo(
    () => messages.find((message) => message.id === activeId) || null,
    [activeId, messages]
  );

  // Years present in the feed, newest first — drives the filter chips.
  const years = useMemo(() => {
    const found = new Set(messages.map((m) => m.isoDate.slice(0, 4)).filter(Boolean));
    return ["All", ...[...found].sort().reverse()];
  }, [messages]);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return messages.filter((message) => {
      if (year !== "All" && !message.isoDate.startsWith(year)) return false;
      if (!needle) return true;
      return (
        message.title.toLowerCase().includes(needle) ||
        message.description.toLowerCase().includes(needle)
      );
    });
  }, [messages, query, year]);

  return (
    <>
      {/* Search + year filter */}
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="relative flex-grow max-w-lg">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sermons by title or topic…"
            aria-label="Search sermons"
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-warm-white border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
          />
        </div>

        {years.length > 2 && (
          <div className="flex flex-wrap gap-2">
            {years.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setYear(option)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  year === option
                    ? "bg-brown-light text-white"
                    : "bg-cream text-text-body border border-cream-dark hover:bg-cream-dark"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {visible.length === 0 && (
        <p className="rounded-2xl border border-cream-dark bg-cream px-6 py-10 text-center text-text-body">
          No messages match &ldquo;{query}&rdquo;. Try another word, or{" "}
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setYear("All");
            }}
            className="font-semibold text-brown-light hover:text-brown underline underline-offset-2"
          >
            clear the search
          </button>
          .
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((message) => (
          <button
            key={message.id}
            type="button"
            onClick={() => setActiveId(message.id)}
            className="group overflow-hidden rounded-2xl border border-cream-dark bg-warm-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={message.thumbnail}
                alt={message.title}
                className="aspect-[16/10] w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <span className="absolute right-4 bottom-4 inline-flex w-12 h-12 items-center justify-center rounded-full bg-gold text-brown-deep shadow-lg transition group-hover:scale-105">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                {message.published}
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-tight text-text-dark">
                {message.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-text-light">
                {message.description || "Recent message from our church's YouTube channel."}
              </p>
            </div>
          </button>
        ))}
      </div>

      {activeMessage ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-4">
          <button
            type="button"
            onClick={() => setActiveId(null)}
            className="absolute top-4 right-4 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Close
          </button>
          <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeMessage.id}?autoplay=1`}
                title={activeMessage.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
