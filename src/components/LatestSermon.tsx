import AnimateOnScroll from "./AnimateOnScroll";

export default function LatestSermon() {
  return (
    <section id="sermon" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <AnimateOnScroll>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-brown-deep">
              <iframe
                src="https://www.youtube-nocookie.com/embed/RLZ7D59el8g"
                title="The Empty Tomb — Victory Community of Faith"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Featured Message
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-4">
                The Empty <em className="text-brown-light italic">Tomb</em>
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                <strong className="text-text-dark">Preacher:</strong> Dr. Jermaine E. Pennington
              </p>
              <p className="text-text-body leading-relaxed mb-8">
                The resurrection is the reason we can call ourselves People Empowered
                to Win — because the tomb is empty, no grave, no chain, and no
                circumstance gets the last word.
              </p>
              <a
                href="/messages"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Browse More Messages
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
