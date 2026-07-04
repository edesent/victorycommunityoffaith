import AnimateOnScroll from "./AnimateOnScroll";

const photos = [
  { caption: "Sunday Worship", src: "/photos/praise-team.jpg" },
  { caption: "Altar Ministry", src: "/photos/altar-prayer.jpg" },
  { caption: "Celebrating Milestones", src: "/photos/celebration.jpg" },
  { caption: "Youth Choir", src: "/photos/youth-choir.jpg" },
  { caption: "Fellowship", src: "/photos/fellowship.jpg" },
  { caption: "Our Church Family", src: "/photos/church-family.jpg" },
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Moments From Our <em className="text-brown-light italic">Church Family</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              Real moments, real people, real victory.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <AnimateOnScroll key={p.caption} delay={i * 60}>
              <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-brown-deep">
                <img
                  src={p.src}
                  alt={p.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-light/90">
                    {p.caption}
                  </p>
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
