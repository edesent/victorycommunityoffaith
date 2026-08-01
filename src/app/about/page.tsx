import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SITE } from "@/config/site";
import { CORE_VALUES, LEADERSHIP, MISSION, YEAR_THEME } from "@/config/content";

export const metadata: Metadata = {
  title: "Our Story",
  description: `${MISSION} Meet the leadership of ${SITE.name} in Wichita, Kansas.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `Our Story | ${SITE.name}`,
    description: MISSION,
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  const team = LEADERSHIP.filter((person) => person.name);

  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Who We Are"
          title="Our Story"
          subtitle="A Liberationist church, striving to set the captives free"
        />

        {/* Mission */}
        <section className="py-24 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-4">
                  Our Mission
                </span>
                <p className="font-serif text-2xl md:text-3xl italic text-text-dark leading-relaxed">
                  {MISSION}
                </p>
                <div className="w-20 h-[3px] bg-gold mx-auto mt-8 rounded" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
                <img
                  src="/photos/church-family.jpg"
                  alt={`The congregation of ${SITE.name}`}
                  className="w-full rounded-3xl shadow-xl object-cover aspect-[4/3]"
                />
                <div>
                  <h2 className="font-serif text-3xl font-bold text-text-dark leading-snug mb-5">
                    A church on the corner of{" "}
                    <em className="text-brown-light italic">Pawnee and possibility</em>
                  </h2>
                  <div className="space-y-4 text-text-body leading-relaxed">
                    <p>
                      Victory Community of Faith is a family of believers in South
                      Wichita who take Jesus at His word when He said He came to
                      preach deliverance to the captives.
                    </p>
                    <p>
                      For us, that liberation is not only spiritual. It is the chain
                      of debt broken off a household. It is a young man who finds
                      purpose instead of a cell. It is a grandmother who gets prayed
                      for and then gets driven to her appointment. Freedom that stops
                      at the church door was never the gospel.
                    </p>
                    <p>
                      Whoever you are and whatever you are carrying — you can come as
                      you are, and you will not be left as you were.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* 2026 theme */}
        <section className="py-20 bg-brown-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,85,0.16),transparent_65%)]" />
          <AnimateOnScroll>
            <div className="relative max-w-3xl mx-auto px-6 text-center">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-4">
                {YEAR_THEME.year} Theme
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
                {YEAR_THEME.title}
              </h2>
              <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mt-4">
                {YEAR_THEME.arc}
              </p>
              <p className="font-serif italic text-lg text-white/75 mt-8 leading-relaxed">
                &ldquo;{YEAR_THEME.verse}&rdquo;
              </p>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-light/80 mt-3">
                {YEAR_THEME.reference}
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        {/* Core values */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  What We Value
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">
                  Six Things We Refuse to Drop
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_VALUES.map((value, i) => (
                <AnimateOnScroll key={value.name} delay={i * 60}>
                  <article className="h-full p-8 bg-warm-white rounded-2xl border border-cream-dark hover:shadow-md transition-shadow">
                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brown-deep text-gold font-serif text-lg font-bold mb-5">
                      {i + 1}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">
                      {value.name}
                    </h3>
                    <p className="text-text-body leading-relaxed">{value.body}</p>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Meet the Leadership
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">
                  The People Who Serve You
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((person, i) => (
                <AnimateOnScroll key={person.name} delay={i * 80}>
                  <article className="h-full bg-cream rounded-2xl border border-cream-dark overflow-hidden hover:shadow-lg transition-shadow">
                    {person.photo && (
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="w-full aspect-[4/5] object-cover object-top"
                      />
                    )}
                    <div className="p-7">
                      <h3 className="font-serif text-xl font-bold text-text-dark">
                        {person.name}
                      </h3>
                      <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mt-1.5 mb-4">
                        {person.role}
                      </p>
                      {person.bio && (
                        <p className="text-text-body leading-relaxed text-sm">
                          {person.bio}
                        </p>
                      )}
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}

              {/* Shown while the rest of the team is still being added. */}
              <AnimateOnScroll delay={team.length * 80}>
                <div className="h-full flex flex-col justify-center p-8 bg-cream/60 rounded-2xl border border-dashed border-cream-dark text-center">
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">
                    More of our team, coming soon
                  </h3>
                  <p className="text-text-body leading-relaxed text-sm mb-6">
                    Victory is served by ministry leaders across worship, youth,
                    children, outreach, and administration. We&rsquo;re adding their
                    introductions here.
                  </p>
                  <a
                    href="/contact"
                    className="text-sm font-semibold text-brown-light hover:text-brown transition-colors"
                  >
                    Reach the church office →
                  </a>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={200}>
              <div className="text-center mt-14 flex flex-wrap justify-center gap-4">
                <a
                  href="/pastor"
                  className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  More About Our Pastor
                </a>
                <a
                  href="/statement-of-faith"
                  className="inline-block bg-transparent text-brown-light font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown-light hover:text-white transition-all"
                >
                  What We Believe
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
