import AnimateOnScroll from "./AnimateOnScroll";
import { SITE } from "@/config/site";

export default function WatchLive() {
  return (
    <section id="watch-live" className="relative">
      {/* Split background — the card sits half in the hero, half in the pastor section */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 bg-brown-deep" />
        <div className="h-1/2 bg-cream" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-burgundy via-burgundy-dark to-brown-deep p-10 md:p-14 shadow-xl">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold/10 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-gold/10 blur-2xl" />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-gold-light">
                    Live on Facebook — Sundays at 11 AM
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
                  Can&rsquo;t make it in person? <em className="text-gold-light italic">Worship with us online.</em>
                </h2>
                <p className="text-white/75 leading-relaxed max-w-xl">
                  We go live on Facebook for Sunday Worship Celebration. Whether
                  you&rsquo;re sick, traveling, or just checking us out — pull up a
                  chair and experience Victory from wherever you are.
                </p>
              </div>

              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all whitespace-nowrap"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Live Now
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
