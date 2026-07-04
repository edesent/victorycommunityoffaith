import AnimateOnScroll from "./AnimateOnScroll";

const testimonies = [
  {
    name: "Dorinda Porter",
    photo: "/photos/dorinda.jpg",
    body:
      "Every time my husband and I go to church we know it's going to be an amazing, powerful, uplifting service.",
  },
  {
    name: "Jan Brandom",
    photo: "/photos/jan.jpg",
    body:
      "The spirit of the living God fills the sanctuary. An incredible worship experience. I felt very welcome.",
  },
];

export default function Testimonies() {
  return (
    <section id="testimonies" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Doing Life <em className="text-brown-light italic">With Victory</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              The best ad for our church is the people who already call it home.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonies.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 120}>
              <figure className="h-full p-8 bg-warm-white rounded-2xl border border-cream-dark shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <svg className="w-8 h-8 text-gold mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm-8 0C.553 16.227 0 15 0 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <blockquote className="font-serif italic text-lg text-text-body leading-relaxed flex-grow mb-6">
                  &ldquo;{t.body}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-cream-dark pt-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-gold/40"
                  />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark">
                    {t.name}
                  </span>
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
