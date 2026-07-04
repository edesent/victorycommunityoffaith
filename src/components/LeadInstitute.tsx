import AnimateOnScroll from "./AnimateOnScroll";

const focusAreas = [
  "Leadership Development",
  "Liberation Theology",
  "Spiritual Formation",
  "Discovery of Purpose",
];

export default function LeadInstitute() {
  return (
    <section id="lead-institute" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Leaders Empowered by Awesome Design
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                The L.E.A.D. <em className="text-brown-light italic">Institute</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-5">
                The L.E.A.D. Institute is an innovative leadership and training center
                that equips and empowers leaders to solve urban communities&rsquo; most
                complex problems — an institute of higher learning for higher leading
                that develops leaders who change the world.
              </p>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                Training is offered in person and virtually through our online academy.
              </p>
              <a
                href="/lead-institute"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Explore the Institute
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map((f, i) => (
                <div
                  key={f}
                  className="p-6 bg-cream rounded-2xl border border-cream-dark hover:shadow-md transition-shadow flex flex-col items-start"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brown-deep text-gold font-serif font-bold mb-4">
                    {i + 1}
                  </span>
                  <p className="font-serif text-lg font-semibold text-text-dark leading-snug">
                    {f}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
