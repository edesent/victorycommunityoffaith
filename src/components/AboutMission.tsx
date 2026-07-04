import AnimateOnScroll from "./AnimateOnScroll";

const pillars = [
  { label: "Liberation", text: "A Liberationist church, striving to set the captives free — spiritually and practically, right here in our community." },
  { label: "Purpose", text: "We don't want you to just fill a pew. We want to help you discover and fulfill the purpose God placed inside you." },
  { label: "Community", text: "Launching ministries and church plants that drive back despair, depression, disease, and defeat so urban communities thrive." },
];

const values = [
  "Ministry",
  "Stewardship",
  "Evangelism",
  "Fellowship",
  "Discipleship",
  "Worship",
];

export default function AboutMission() {
  return (
    <section id="about" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Our Community
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                Victory Is More Than a Name — <em className="text-brown-light italic">It&rsquo;s an Identity.</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-5">
                For us, Victory is a culture and a testimony of our ability to overcome.
                Victory recounts the fact that we are not victims. It recalls a history
                full of both wins and losses but ultimately declares,
                &ldquo;We&rsquo;re still here!&rdquo;
              </p>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                Our existence is undeniable, and no experience — good or bad — can
                diminish us. We are People Empowered to Win.
              </p>
              <a
                href="/statement-of-faith"
                className="inline-block text-brown-light font-semibold text-sm tracking-wide uppercase border-b-2 border-brown-light/40 hover:border-brown-light pb-1 transition-colors"
              >
                Read what we believe →
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="space-y-5">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="p-6 bg-warm-white rounded-2xl border border-cream-dark hover:shadow-md transition-shadow"
                >
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                    {p.label}
                  </p>
                  <p className="text-text-body leading-relaxed">{p.text}</p>
                </div>
              ))}
              <div className="p-6 bg-brown-deep rounded-2xl">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-3">
                  Our Values
                </p>
                <div className="flex flex-wrap gap-2">
                  {values.map((v) => (
                    <span
                      key={v}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold tracking-[0.12em] uppercase"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
