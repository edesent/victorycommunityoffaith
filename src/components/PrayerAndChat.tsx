"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { pastorShortName } from "@/config/site";

export default function PrayerAndChat() {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <section id="prayer" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <span id="chat" className="block -mt-20 pt-20" aria-hidden="true" />

        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              We&rsquo;d Love to Hear From You
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Have a Question? <em className="text-brown-light italic">How Can We Pray For You?</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              Send a prayer request and our pastor and prayer team will pray for you
              this week — or start a conversation with {pastorShortName} directly.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Prayer request form */}
          <AnimateOnScroll delay={100}>
            {submitted ? (
              <div className="p-10 bg-cream rounded-2xl border border-cream-dark text-center">
                <svg className="w-14 h-14 mx-auto mb-4 text-gold-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-2">
                  Thank you — we&rsquo;ll be praying.
                </h3>
                <p className="text-text-body">
                  Your request has been received. May the Lord bless and encourage you.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="p-8 md:p-10 bg-cream rounded-2xl border border-cream-dark space-y-5"
              >
                <h3 className="font-serif text-xl font-semibold text-text-dark">
                  Send a Prayer Request
                </h3>
                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-lg bg-warm-white border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-warm-white border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2">
                    Prayer Request
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Share whatever is on your heart..."
                    className="w-full px-4 py-3 rounded-lg bg-warm-white border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-text-body">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-brown-light" />
                  <span>Keep my request private — only the pastor will see it.</span>
                </label>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Send Prayer Request
                </button>
              </form>
            )}
          </AnimateOnScroll>

          {/* Chat with the pastor */}
          <AnimateOnScroll delay={200}>
            <div>
              <div className="bg-warm-white rounded-3xl shadow-xl border border-cream-dark overflow-hidden mb-6">
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

                <div className="p-5 space-y-3 min-h-[160px]">
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

              <p className="text-text-body leading-relaxed mb-5">
                Whether you&rsquo;re wrestling with a question, going through a hard
                season, or just want to know more about Victory — {pastorShortName}{" "}
                would love to hear from you. Your message goes straight to his phone.
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
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
