import AnimateOnScroll from "./AnimateOnScroll";
import { brandTop, brandBottom } from "@/config/site";

const stats = [
  { number: "63%", label: "of all web traffic is on a phone" },
  { number: "82%", label: "of churchgoers check your site on mobile first" },
  { number: "3sec", label: "is all you get before they leave" },
];

const checks = [
  "Tap-friendly buttons and links — no pinching to zoom",
  "Service times and address readable in one glance",
  "Messages that play without buffering on cell data",
  "Prayer requests that fill out painlessly on a phone keyboard",
  "Loads fast on a slow connection in the church parking lot",
];

export default function MobileFriendly() {
  return (
    <section id="mobile" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <AnimateOnScroll>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Built for the Phone First
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-5">
                Most People Will Find Victory <em className="text-brown-light italic">From a Phone.</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                The young family driving past on Sunday morning, the visitor looking up
                service times the night before, the new neighbor searching &ldquo;churches
                near me&rdquo; — they&rsquo;re all on a phone. This site works beautifully there.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-5 bg-warm-white rounded-2xl border border-cream-dark">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif text-2xl md:text-3xl font-bold text-brown-light leading-none mb-1">
                      {s.number}
                    </p>
                    <p className="text-[11px] text-text-light leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Checks */}
              <ul className="space-y-3">
                {checks.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-text-body">
                    <svg className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Phone mockup */}
          <AnimateOnScroll delay={200}>
            <div className="flex justify-center">
              <div className="relative">
                {/* Soft glow */}
                <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 via-transparent to-brown-light/20 rounded-[3.5rem] blur-2xl" />

                {/* Phone frame */}
                <div className="relative w-[280px] h-[560px] rounded-[3rem] bg-brown-deep p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-brown-deep rounded-b-2xl z-10 flex items-center justify-center">
                    <div className="w-12 h-1 bg-black/50 rounded-full" />
                  </div>

                  {/* Screen — the real homepage hero */}
                  <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-brown-deep">
                    <img
                      src="/photos/hero-bg.jpg"
                      alt="Worship at Victory Community of Faith"
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/70 via-brown-deep/35 to-brown-deep/85" />

                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 pt-2 px-6 flex items-center justify-between text-white text-[10px] font-semibold z-20">
                      <span>9:41</span>
                      <span className="flex items-center gap-1">
                        <span>●●●●</span>
                      </span>
                    </div>

                    {/* Mini hero preview */}
                    <div className="relative h-full flex flex-col items-center justify-center px-6 text-center text-white">
                      <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-gold-light mb-1">
                        A Liberationist Church in Wichita
                      </p>
                      <h3 className="font-serif text-xl font-bold leading-tight mb-2">
                        {brandTop}<br />{brandBottom}
                      </h3>
                      <div className="w-8 h-[2px] bg-gold mx-auto mb-3 rounded" />
                      <p className="font-serif text-[10px] italic text-white/85 leading-relaxed mb-5">
                        &ldquo;Empowering our community to experience victory through
                        the message and ministry of Jesus Christ.&rdquo;
                      </p>
                      <div className="flex flex-col gap-2 w-full">
                        <div className="bg-gold text-brown-deep text-[10px] font-bold tracking-wider uppercase py-2.5 rounded-full">
                          Plan Your Visit
                        </div>
                        <div className="border border-white/40 text-white text-[10px] font-bold tracking-wider uppercase py-2.5 rounded-full">
                          Watch Live
                        </div>
                      </div>
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full" />
                  </div>
                </div>

                {/* Caption */}
                <p className="text-center text-xs text-text-light mt-5 tracking-[0.15em] uppercase font-semibold">
                  Looks just as good on a phone
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
