import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { SITE, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "L.E.A.D. Institute",
  description:
    "Leaders Empowered by Awesome Design — an innovative leadership and training center that equips and empowers leaders to solve urban communities' most complex problems.",
  alternates: { canonical: "/lead-institute" },
  openGraph: {
    title: `L.E.A.D. Institute | ${SITE.name}`,
    description:
      "An institute of higher learning for higher leading that develops leaders that change the world.",
    url: "/lead-institute",
    type: "website",
  },
};

const focusAreas = [
  {
    name: "Leadership Development",
    body: "Practical training that equips leaders to organize, serve, and solve the most complex problems facing urban communities.",
  },
  {
    name: "Liberation Theology",
    body: "Rooted in the good news that Jesus came to set the captives free — exploring the foundations of liberation, ministry preparation, and advocacy for marginalized voices.",
  },
  {
    name: "Spiritual Formation",
    body: "Deepening your walk with God so your leadership flows from a whole, healthy, Spirit-formed life.",
  },
  {
    name: "Discovery of Purpose",
    body: "Helping seekers uncover the purpose God placed inside them — and build a pathway to walk in it.",
  },
];

export default function LeadInstitutePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Leaders Empowered by Awesome Design"
          title="The L.E.A.D. Institute"
          subtitle="An institute of higher learning for higher leading that develops leaders that change the world"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-lg text-text-body leading-relaxed">
                The L.E.A.D. Institute is an innovative leadership and training center
                that equips and empowers leaders to solve urban communities&rsquo; most
                complex problems. We offer in-person training and virtual training
                through our online academy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {focusAreas.map((f, i) => (
                <article
                  key={f.name}
                  className="p-8 bg-cream rounded-2xl border border-cream-dark hover:shadow-md transition-shadow"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brown-deep text-gold font-serif text-lg font-bold mb-5">
                    {i + 1}
                  </span>
                  <h2 className="font-serif text-xl font-semibold text-text-dark mb-3">
                    {f.name}
                  </h2>
                  <p className="text-text-body leading-relaxed">{f.body}</p>
                </article>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brown via-brown-light to-brown-deep p-10 md:p-14 text-center shadow-xl">
              <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative">
                <h2 className="font-serif text-3xl font-bold text-white leading-snug mb-4">
                  Ready to <em className="text-gold-light italic">lead?</em>
                </h2>
                <p className="text-white/80 leading-relaxed max-w-xl mx-auto mb-8">
                  Reach out to learn about upcoming in-person cohorts and online academy
                  courses.
                </p>
                <a
                  href={`tel:${phoneTel}`}
                  className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
