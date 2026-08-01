"use client";

import { useEffect, useRef, useState } from "react";
import { GIVEBUTTER } from "@/config/content";

// The church's real Givebutter campaign ("Greater Glory"), embedded in-page so
// people can give without leaving the site. Givebutter's embed posts a
// `givebutter-form-loaded` message to the parent when the form is ready — we
// hold a skeleton until then so nobody stares at a white rectangle.
export default function GivebutterEmbed() {
  const [loaded, setLoaded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (
        event.origin === "https://givebutter.com" &&
        event.data === "givebutter-form-loaded"
      ) {
        setLoaded(true);
      }
    }
    window.addEventListener("message", onMessage);

    // Fallback: if the message never arrives (blocked, slow, changed), reveal
    // the frame anyway rather than leaving a permanent skeleton.
    timer.current = setTimeout(() => setLoaded(true), 6000);

    return () => {
      window.removeEventListener("message", onMessage);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-white">
          <div className="iframe-shimmer h-3 w-48 rounded-full" />
          <p className="text-sm text-text-light">Loading secure giving form…</p>
        </div>
      )}
      <iframe
        src={GIVEBUTTER.embedUrl}
        title="Give to Victory Community of Faith — Greater Glory Campaign"
        className="w-full border-0 h-[760px] sm:h-[820px] lg:h-[880px]"
        allow="payment"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
