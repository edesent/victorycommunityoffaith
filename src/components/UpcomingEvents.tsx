import AnimateOnScroll from "./AnimateOnScroll";
import { EVENTS, MONTH_LABEL } from "@/config/content";

// The month's calendar. Edit EVENTS and MONTH_LABEL in src/config/content.ts
// when the church publishes a new Calendar of Events flyer.
export default function UpcomingEvents() {
  return (
    <section id="events" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Calendar of <em className="text-brown-light italic">Events</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              {MONTH_LABEL} at Victory — every Sunday at 11 AM. Mark your calendar
              and bring a friend.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {EVENTS.map((e, i) => (
            <AnimateOnScroll key={`${e.day}-${e.title}`} delay={i * 100}>
              <article className="h-full bg-warm-white rounded-2xl border border-cream-dark overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="bg-brown-deep text-gold-light text-center py-4 px-4">
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-light/80">
                    {e.month}
                  </p>
                  <p className="font-serif text-4xl font-bold text-white leading-none mt-1">
                    {e.day}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-dark mb-2">
                    {e.time}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-3 leading-snug">
                    {e.title}
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed">{e.body}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
