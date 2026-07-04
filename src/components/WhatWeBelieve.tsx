import AnimateOnScroll from "./AnimateOnScroll";

const beliefs = [
  { title: "The Bible", body: "We believe the Bible is the inspired Word of God — good news of freedom, hope, and victory for every person." },
  { title: "The Trinity", body: "One God eternally existing in three Persons: the Father, the Son, and the Holy Spirit." },
  { title: "Salvation", body: "By grace, through faith in the Lord Jesus Christ alone — the gift of God, freely offered to all." },
  { title: "Liberation", body: "Jesus came to preach good news to the poor, heal the brokenhearted, and set at liberty them that are bruised (Luke 4:18)." },
];

export default function WhatWeBelieve() {
  return (
    <section id="beliefs" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              What We <em className="text-brown-light italic">Believe</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              We hold to the historic Christian faith with a passion for the freedom
              Christ brings. Here are four of our core convictions.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {beliefs.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 100}>
              <div className="h-full p-7 bg-cream rounded-2xl border border-cream-dark hover:shadow-md hover:-translate-y-1 transition-all">
                <svg className="w-9 h-9 text-gold-dark mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                </svg>
                <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{b.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center">
            <a
              href="/statement-of-faith"
              className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Read Our Full Statement of Faith
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
