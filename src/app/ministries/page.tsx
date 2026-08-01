import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import RequestForm from "@/components/RequestForm";
import { SITE } from "@/config/site";
import { MINISTRIES, VOLUNTEER_ROLES } from "@/config/content";

export const metadata: Metadata = {
  title: "Ministries & Get Involved",
  description: `Children's church, youth, life groups, worship, and outreach at ${SITE.name} in Wichita — plus how to sign up to serve.`,
  alternates: { canonical: "/ministries" },
  openGraph: {
    title: `Ministries & Get Involved | ${SITE.name}`,
    description: "Find your place to belong — and your place to serve.",
    url: "/ministries",
    type: "website",
  },
};

export default function MinistriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Get Involved"
          title="Find Your Place"
          subtitle="Church was never meant to be watched from a seat — there is a place here with your name on it"
        />

        {/* Ministries */}
        <section className="py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MINISTRIES.map((ministry, i) => (
                <AnimateOnScroll key={ministry.slug} delay={i * 70}>
                  <article
                    id={ministry.slug}
                    className="h-full flex flex-col bg-cream rounded-2xl border border-cream-dark overflow-hidden hover:shadow-lg transition-shadow scroll-mt-28"
                  >
                    <img
                      src={ministry.photo}
                      alt={ministry.name}
                      className="w-full aspect-[16/10] object-cover"
                    />
                    <div className="p-7 flex flex-col flex-grow">
                      <span className="inline-block self-start text-[10px] font-bold tracking-[0.18em] uppercase text-gold-dark bg-warm-white px-3 py-1 rounded-full border border-cream-dark mb-4">
                        {ministry.audience}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">
                        {ministry.name}
                      </h2>
                      <p className="text-text-body leading-relaxed flex-grow">
                        {ministry.body}
                      </p>
                      <p className="mt-5 pt-5 border-t border-cream-dark text-sm text-text-light">
                        <strong className="text-text-dark font-semibold">Meets:</strong>{" "}
                        {ministry.meets}
                      </p>
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer */}
        <section id="volunteer" className="py-24 bg-brown-deep relative overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,85,0.16),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            <AnimateOnScroll>
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-4">
                  Serve With Us
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
                  You don&rsquo;t need a title.{" "}
                  <em className="text-gold-light italic">You just need a yes.</em>
                </h2>
                <div className="space-y-4 text-white/75 leading-relaxed">
                  <p>
                    Every Sunday at Victory runs on people who showed up early,
                    stayed late, and never got their name on anything. Greeters,
                    nursery workers, sound techs, cooks, drivers, intercessors.
                  </p>
                  <p>
                    Tell us where you&rsquo;d like to serve — or tell us
                    you&rsquo;re willing and we&rsquo;ll help you find the fit. No
                    experience required, and no one serves alone.
                  </p>
                </div>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {VOLUNTEER_ROLES.map((role) => (
                    <li key={role} className="flex items-start gap-2.5 text-sm text-white/70">
                      <svg
                        className="w-4 h-4 mt-0.5 text-gold flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <RequestForm
                kind="Volunteer sign-up"
                tone="dark"
                extras={[
                  {
                    name: "role",
                    label: "Where would you like to serve?",
                    type: "select",
                    options: VOLUNTEER_ROLES,
                    required: true,
                    placeholder: "Choose an area…",
                  },
                ]}
                messageLabel="Anything we should know?"
                messagePlaceholder="Skills, availability, questions — or just tell us about yourself."
                messageRequired={false}
                submitLabel="Sign Me Up"
                successTitle="Welcome to the team."
                successBody="A ministry leader will reach out to you this week to get you started."
              />
            </AnimateOnScroll>
          </div>
        </section>

        {/* Next steps */}
        <section className="py-20 bg-cream">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl font-bold text-text-dark mb-4">
                Not sure where to start?
              </h2>
              <p className="text-text-body leading-relaxed max-w-2xl mx-auto mb-8">
                Come on a Sunday at 11, sit wherever you like, and let us know
                you&rsquo;re here. Everything else can follow from there.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact#visit"
                  className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Plan Your Visit
                </a>
                <a
                  href="/lead-institute"
                  className="inline-block bg-transparent text-brown-light font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown-light hover:text-white transition-all"
                >
                  Train at the L.E.A.D. Institute
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
