import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    day: "Sunday",
    title: "Worship Service",
    time: "11 AM",
    detail: "Powerful praise, prayer, & preaching — in person and live on Facebook",
  },
  {
    day: "Wednesday",
    title: "Bible Study",
    time: "6 PM",
    detail: "Word On Wednesday (WOW) — dig into the Word mid-week",
  },
];

export default function ServiceTimes() {
  return (
    <section id="services" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Come Worship <em className="text-brown-light italic">With Us!</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              We gather at 1016 E Pawnee St in Wichita. Dress is come-as-you-are —
              there&rsquo;s a seat and a family waiting for you.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div className="h-full p-7 bg-warm-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-cream-dark">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                  {s.day}
                </p>
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-1">
                  {s.title}
                </h3>
                <p className="font-serif text-3xl font-bold text-brown-light mb-3">
                  {s.time}
                </p>
                <p className="text-sm text-text-light leading-relaxed">{s.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
