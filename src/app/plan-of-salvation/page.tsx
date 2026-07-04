import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "The Plan of Salvation",
  description:
    "How to be saved — the Gospel of Jesus Christ explained simply from the Bible. Admit, Believe, Call.",
  alternates: { canonical: "/plan-of-salvation" },
  openGraph: {
    title: `The Plan of Salvation | ${SITE.name}`,
    description: "How to be saved — the Gospel explained simply.",
    url: "/plan-of-salvation",
    type: "article",
  },
};

export default function PlanOfSalvationPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="The Most Important Page"
          title="How to Be Saved"
          subtitle="The Gospel of the Lord Jesus Christ"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 space-y-10 text-text-body text-lg leading-relaxed">
            <p>
              The Bible tells us that salvation is a free gift from God, received by faith
              in His Son, the Lord Jesus Christ. You can be saved today — right where you sit.
            </p>

            <div>
              <h2 className="font-serif text-3xl font-bold text-text-dark mb-3">
                1. Admit you are a sinner.
              </h2>
              <blockquote className="font-serif italic text-text-body border-l-4 border-gold pl-5 mb-3">
                &ldquo;For all have sinned, and come short of the glory of God.&rdquo;
                <span className="block text-sm not-italic text-gold-dark mt-1">— Romans 3:23</span>
              </blockquote>
              <p>
                Every person who has ever lived (except the Lord Jesus) has broken God&rsquo;s law.
                Sin separates us from a holy God.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-text-dark mb-3">
                2. Believe that Jesus died for you.
              </h2>
              <blockquote className="font-serif italic text-text-body border-l-4 border-gold pl-5 mb-3">
                &ldquo;But God commendeth his love toward us, in that, while we were yet sinners,
                Christ died for us.&rdquo;
                <span className="block text-sm not-italic text-gold-dark mt-1">— Romans 5:8</span>
              </blockquote>
              <p>
                Jesus paid the price for your sin on the cross. Three days later, He rose from
                the grave, proving He is the Son of God.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-text-dark mb-3">
                3. Call upon the Lord.
              </h2>
              <blockquote className="font-serif italic text-text-body border-l-4 border-gold pl-5 mb-3">
                &ldquo;For whosoever shall call upon the name of the Lord shall be saved.&rdquo;
                <span className="block text-sm not-italic text-gold-dark mt-1">— Romans 10:13</span>
              </blockquote>
              <p>
                Repent of your sin and ask the Lord Jesus Christ to save you. He has promised
                He will. There is no special prayer required — just a humble heart that trusts Him.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-2xl border border-cream-dark mt-12">
              <h3 className="font-serif text-xl font-bold text-text-dark mb-3">
                Did you trust Christ today?
              </h3>
              <p className="mb-4">
                If you prayed and trusted the Lord today, we&rsquo;d love to know — and to help you
                take your next steps as a new believer. Reach out to our pastor through the chat
                widget or the contact form.
              </p>
              <a
                href="/#chat"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Tell Our Pastor
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
