import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "What we believe at Victory Community of Faith — the historic Christian faith with a passion for the freedom Christ brings.",
  alternates: { canonical: "/statement-of-faith" },
  openGraph: {
    title: `What We Believe | ${SITE.name}`,
    description: "The convictions we hold and preach.",
    url: "/statement-of-faith",
    type: "article",
  },
};

const articles = [
  {
    title: "The Scriptures",
    body: "We believe the Bible is the inspired Word of God — good news of freedom, hope, and victory, and our authority for faith and practice.",
  },
  {
    title: "The Godhead",
    body: "We believe in one God eternally existing in three Persons: Father, Son, and Holy Spirit — equal in every divine perfection.",
  },
  {
    title: "The Person and Work of Christ",
    body: "We believe Jesus Christ is fully God and fully man, born of the Virgin Mary, who lived a sinless life, died for our sins, rose bodily from the grave, ascended to heaven, and is coming again.",
  },
  {
    title: "Salvation",
    body: "We believe salvation is by grace through faith in the Lord Jesus Christ alone — not of works — the gift of God freely offered to all who repent and believe.",
  },
  {
    title: "Liberation",
    body: "We believe the Spirit of the Lord anointed Jesus to preach good news to the poor, heal the brokenhearted, and set at liberty them that are bruised (Luke 4:18) — and that His church is called to that same liberating work, spiritually and practically.",
  },
  {
    title: "The Church",
    body: "We believe the local church is a family of baptized believers gathered to worship God, build one another up, and empower our community to experience victory through the message and ministry of Jesus Christ.",
  },
];

export default function StatementOfFaithPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Our Convictions"
          title="What We Believe"
          subtitle="The historic Christian faith, with a passion for the freedom Christ brings"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 space-y-10">
            {articles.map((article, i) => (
              <article key={article.title}>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                  Article {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-3 leading-snug">
                  {article.title}
                </h2>
                <p className="text-lg text-text-body leading-relaxed">{article.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
