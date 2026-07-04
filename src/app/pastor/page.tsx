import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { SITE, pastorFullName, pastorShortName, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "Meet Our Pastor",
  description: `Get to know ${pastorShortName} of ${SITE.name} — pastor, liberationist, author, and leader committed to helping people discover purpose.`,
  alternates: { canonical: "/pastor" },
  openGraph: {
    title: `Meet Our Pastor | ${SITE.name}`,
    description: "Get to know our pastor and the heart behind his ministry.",
    url: "/pastor",
    type: "profile",
  },
};

const books = [
  {
    title: "The Divine Mindshift",
    blurb: "His newest book — harnessing the power of faith-filled thoughts to transform your mental health.",
  },
  {
    title: "The Chain Breaker",
    blurb: "The foundation for the Liberationist Lecture Series — exploring spiritual and natural liberation, advocacy for marginalized voices, and organizing liberative movements.",
  },
  {
    title: "Pathways to Purpose",
    blurb: "A guide for seekers ready to discover the purpose God placed inside them.",
  },
  {
    title: "Priest in Normal Clothes",
    blurb: "The book behind Victory's \"Ministry in Motion\" theme — empowering all to minister to all (1 Peter 2:5–9).",
  },
];

export default function PastorPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Our Pastor"
          title={`Meet ${pastorFullName}`}
          subtitle="Pastor & Liberationist"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10">
              <img
                src="/photos/pastor.jpg"
                alt={pastorFullName}
                className="w-40 h-46 sm:w-44 rounded-2xl object-cover shadow-lg ring-4 ring-gold/30 flex-shrink-0"
              />
              <p className="text-lg text-text-body leading-relaxed">
                {pastorFullName} leads Victory Community of Faith — a progressive,
                Liberationist church that has been instrumental in launching multiple
                church plants and ministry initiatives in urban communities. He has
                committed himself to four themes: liberation theology, helping people
                discover purpose, leadership development, and spiritual formation.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              His Heart for Ministry
            </h2>
            <p className="text-text-body leading-relaxed mb-6">
              Dr. Pennington&rsquo;s goal — and Victory&rsquo;s — has been to drive back
              the darkness of despair, depression, disease, and defeat so that our
              communities thrive. Through the church, the L.E.A.D. Institute, and his
              writing and teaching ministry, he equips everyday people to walk in
              freedom and lead where they live.
            </p>

            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              Author &amp; Teacher
            </h2>
            <div className="space-y-4 mb-10">
              {books.map((b) => (
                <div key={b.title} className="p-6 bg-cream rounded-2xl border border-cream-dark">
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-1">
                    {b.title}
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed">{b.blurb}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              How to Reach Him
            </h2>
            <p className="text-text-body leading-relaxed">
              {pastorShortName} would love to connect with you and see how Victory can
              help you along your spiritual journey. Call{" "}
              <a href={`tel:${phoneTel}`} className="text-brown-light font-semibold">{SITE.phone}</a>,
              email <a href={`mailto:${SITE.email}`} className="text-brown-light font-semibold">{SITE.email}</a>,
              or use the chat on the homepage.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
