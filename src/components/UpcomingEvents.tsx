import AnimateOnScroll from "./AnimateOnScroll";

const events = [
  {
    date: { month: "Every", day: "Sun" },
    title: "Worship Celebration Service",
    time: "Sundays • 11 AM",
    body: "Powerful praise, prayer, and an empowering word — in person at 1016 E Pawnee and live on Facebook.",
  },
  {
    date: { month: "Every", day: "Wed" },
    title: "Word On Wednesday (WOW)",
    time: "Wednesdays • 6 PM",
    body: "Our mid-week Bible study — dig into the Word, ask questions, and pray together.",
  },
  {
    date: { month: "Year", day: "Round" },
    title: "L.E.A.D. Institute",
    time: "In Person & Online",
    body: "Leadership development, liberation theology, spiritual formation, and the discovery of purpose.",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              The Rhythm of <em className="text-brown-light italic">Victory</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              Mark your calendar — and bring a friend.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <AnimateOnScroll key={e.title} delay={i * 120}>
              <article className="h-full bg-warm-white rounded-2xl border border-cream-dark overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="bg-brown-deep text-gold-light text-center py-4 px-6">
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-light/80">
                    {e.date.month}
                  </p>
                  <p className="font-serif text-4xl font-bold text-white leading-none mt-1">
                    {e.date.day}
                  </p>
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-dark mb-2">
                    {e.time}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-3 leading-snug">
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
