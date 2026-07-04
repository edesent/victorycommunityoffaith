import AnimateOnScroll from "./AnimateOnScroll";

const events = [
  {
    date: { month: "Jun", day: "07" },
    title: "Holy Communion",
    time: "Sunday • 11 AM",
    body: "We gather at the Lord's table together during Worship Celebration.",
  },
  {
    date: { month: "Jun", day: "14" },
    title: "Liberation Sunday",
    time: "Sunday • 11 AM",
    body: "A celebration of the freedom Christ brings — every chain broken.",
  },
  {
    date: { month: "Jun", day: "21" },
    title: "Father's Day",
    time: "Sunday • 11 AM",
    body: "Honoring the fathers of Victory during Worship Celebration.",
  },
  {
    date: { month: "Jun", day: "28" },
    title: "Church Anniversary & Greater Glory Campaign Launch",
    time: "After the 11 AM Service",
    body: "Celebrating our anniversary, launching the Greater Glory Campaign, and enjoying the 2nd Quarter Fellowship Luncheon.",
  },
];

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
              June at Victory — mark your calendar and bring a friend.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
