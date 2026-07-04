"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { pastorShortName } from "@/config/site";

export default function ChatPastor() {
  const [open, setOpen] = useState(false);

  return (
    <section id="chat" className="relative py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Have a Question?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-5">
                Talk Directly With <em className="text-brown-light italic">{pastorShortName}.</em>
              </h2>
              <p className="text-text-body leading-relaxed mb-3">
                Whether you&rsquo;re wrestling with a question, going through a hard season,
                or just want to know more about our church — the pastor would love to hear from you.
              </p>
              <p className="text-text-body leading-relaxed mb-8">
                Click the chat bubble in the corner of the screen, or use the panel beside this
                section. Your message goes straight to the pastor&rsquo;s phone.
              </p>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
                Start a Conversation
              </button>
            </div>

            <div className="relative">
              <div className="bg-warm-white rounded-3xl shadow-xl border border-cream-dark overflow-hidden">
                <div className="bg-brown-deep px-5 py-4 flex items-center gap-3">
                  <img
                    src="/photos/pastor.jpg"
                    alt={pastorShortName}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-gold/60"
                  />
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-white leading-tight">{pastorShortName}</p>
                    <p className="text-xs text-gold-light/80 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Usually replies within an hour
                    </p>
                  </div>
                </div>

                <div className="p-5 space-y-3 min-h-[180px]">
                  <div className="flex items-start gap-2">
                    <div className="max-w-[80%] bg-cream-dark text-text-dark text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 leading-relaxed">
                      Hi there! Thanks for visiting our website. Is there anything I can help you with?
                    </div>
                  </div>
                  {open && (
                    <div className="flex items-start justify-end gap-2">
                      <div className="max-w-[80%] bg-brown-light text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 leading-relaxed">
                        Hi pastor — what time is Worship Celebration on Sunday?
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-cream-dark p-3 flex items-center gap-2 bg-cream/50">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow px-3 py-2 text-sm bg-transparent text-text-dark placeholder:text-text-muted focus:outline-none"
                  />
                  <button
                    type="button"
                    aria-label="Send message"
                    className="w-9 h-9 rounded-full bg-brown-light text-white flex items-center justify-center hover:bg-brown transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
