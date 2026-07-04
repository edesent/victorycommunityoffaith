import AnimateOnScroll from "./AnimateOnScroll";

const ministries = [
  { name: "L.E.A.D. Institute", body: "Leaders Empowered by Awesome Design — our leadership and training center for solving urban communities' toughest problems." },
  { name: "Victory Online Campus", body: "Worship Celebration and Word On Wednesday, streamed live so you can be part of Victory from anywhere." },
  { name: "Praise & Worship", body: "A Spirit-filled worship team that fills the sanctuary every Sunday — our members call it an incredible experience." },
  { name: "Youth & Children", body: "Raising up the next generation of people empowered to win, from the youth choir to hands-on discipleship." },
  { name: "Community Outreach", body: "Ministry initiatives that drive back despair, depression, disease, and defeat so our community thrives." },
  { name: "Greater Glory Campaign", body: "Eliminating debt and transforming God's house — greater glory, greater impact (Haggai 2:9)." },
];

export default function MinistriesPreview() {
  return (
    <section id="ministries" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Our <em className="text-brown-light italic">Ministries</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              There&rsquo;s a place for every member of the family.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m, i) => (
            <AnimateOnScroll key={m.name} delay={i * 80}>
              <div className="h-full p-7 bg-cream rounded-2xl border border-cream-dark hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-full bg-brown-deep flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">
                  {m.name}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{m.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
