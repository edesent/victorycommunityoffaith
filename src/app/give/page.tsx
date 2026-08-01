import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import GivebutterEmbed from "@/components/GivebutterEmbed";
import { SITE, phoneTel } from "@/config/site";
import {
  CASHAPP_HANDLE,
  CASHAPP_URL,
  GIVEBUTTER,
  GIVING_ALLOCATION,
  STEWARDSHIP,
} from "@/config/content";

export const metadata: Metadata = {
  title: "Give Online",
  description: `Give your tithes and offerings to ${SITE.name} securely online, by text, by mail, or in person.`,
  alternates: { canonical: "/give" },
  openGraph: {
    title: `Give Online | ${SITE.name}`,
    description: "Support the work of the Lord through your tithes and offerings.",
    url: "/give",
    type: "website",
  },
};

export default function GivePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Give Your Time, Your Talent, Your Treasure"
          title="Sow Into Victory"
          subtitle="&ldquo;Every man according as he purposeth in his heart, so let him give.&rdquo; — 2 Cor 9:7"
        />

        {/* Give now — the real Givebutter campaign, embedded */}
        <section id="give-now" className="py-20 bg-cream scroll-mt-20">
          <div className="max-w-3xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Secure Online Giving
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-4">
                  Give to <em className="text-brown-light italic">Greater Glory</em>
                </h2>
                <p className="text-text-body leading-relaxed max-w-xl mx-auto">
                  Give a one-time gift or set up a recurring tithe — by card, bank
                  transfer, Apple&nbsp;Pay, Google&nbsp;Pay, PayPal, or Venmo. Every
                  gift is processed securely by Givebutter and goes straight to the
                  ministry of Victory Community of Faith.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <GivebutterEmbed />
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <p className="text-center text-sm text-text-light mt-6">
                Trouble with the form?{" "}
                <a
                  href={GIVEBUTTER.campaignUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brown-light hover:text-brown underline underline-offset-2 transition-colors"
                >
                  Open our giving page in a new tab
                </a>
                .
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Stewardship vision */}
        <section className="py-24 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-4">
                  Our Stewardship Vision
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                  {STEWARDSHIP.heading}
                </h2>
                <p className="text-lg text-text-body leading-relaxed">
                  {STEWARDSHIP.body}
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="grid sm:grid-cols-2 gap-5">
                {GIVING_ALLOCATION.map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-6 bg-cream rounded-2xl border border-cream-dark"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brown-deep text-gold font-serif text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-text-dark leading-snug">
                        {item.label}
                      </h3>
                      <p className="text-sm text-text-light mt-1.5 leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Greater Glory Campaign */}
        <section className="py-20 bg-brown-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,85,0.16),transparent_65%)]" />
          <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <img
                src="/photos/greater-glory.jpg"
                alt="Victory's Greater Glory Campaign — eliminating debt and transforming God's house (Haggai 2:9)"
                className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={120}>
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-4">
                  The Greater Glory Campaign
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug mb-5">
                  Breaking the Chain of <em className="text-gold-light italic">Debt</em>
                </h2>
                <p className="text-white/75 leading-relaxed mb-5">
                  We preach that Jesus sets captives free — so we refuse to leave
                  this house in bondage. The Greater Glory Campaign is our push to
                  eliminate the debt on God&rsquo;s house and renovate it for the
                  generation coming behind us.
                </p>
                <p className="font-serif italic text-lg text-white/80 leading-relaxed">
                  &ldquo;The glory of this latter house shall be greater than of the
                  former.&rdquo;
                </p>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-light/80 mt-2">
                  Haggai 2:9
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Ways to give */}
        <section className="py-24 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Four Ways to Give
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">
                  Whatever Is Easiest for You
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Cash App */}
              <AnimateOnScroll>
                <div className="h-full flex flex-col p-8 bg-cream rounded-2xl border border-cream-dark">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brown-deep text-gold mb-5">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1a1 1 0 0 1 1 1v1.06c1.7.2 3 1.2 3.35 2.7a1 1 0 0 1-1.94.48c-.2-.8-1.1-1.3-2.41-1.3-1.5 0-2.5.65-2.5 1.5 0 .9.77 1.3 2.7 1.75 2.3.53 4.3 1.25 4.3 3.68 0 1.85-1.4 3.14-3.5 3.46V16a1 1 0 1 1-2 0v-1.07c-1.86-.25-3.2-1.35-3.5-2.94a1 1 0 0 1 1.96-.38c.2 1 1.25 1.64 2.7 1.64 1.6 0 2.6-.66 2.6-1.6 0-.98-.9-1.36-2.9-1.83C9.4 9.32 7.5 8.6 7.5 6.44c0-1.76 1.35-3 3.5-3.35V2a1 1 0 0 1 1-1z" />
                      <path d="M4 19h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
                    </svg>
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-dark mb-3">
                    Give on Cash App
                  </h3>
                  <p className="text-text-body leading-relaxed flex-grow mb-6">
                    The fastest, easiest way — send your tithes and offerings
                    securely through Cash App to{" "}
                    <strong className="text-text-dark">{CASHAPP_HANDLE}</strong>.
                    Cash App also lets you schedule a repeating gift, so your tithe
                    can go out every week or every payday without you having to
                    remember.
                  </p>
                  <a
                    href={CASHAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block self-start bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Give on Cash App
                  </a>
                </div>
              </AnimateOnScroll>

              {/* Recurring */}
              <AnimateOnScroll delay={80}>
                <div className="h-full flex flex-col p-8 bg-cream rounded-2xl border border-cream-dark">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brown-deep text-gold mb-5">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12c0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
                    </svg>
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-dark mb-3">
                    Give Every Month
                  </h3>
                  <p className="text-text-body leading-relaxed flex-grow mb-6">
                    Faithful, repeating giving is what lets this church plan ahead
                    instead of scraping by. In the giving form above, choose{" "}
                    <strong className="text-text-dark">monthly</strong> (or weekly)
                    and your tithe goes out on its own — change or cancel it
                    anytime.
                  </p>
                  <a
                    href="#give-now"
                    className="inline-block self-start bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Set Up Recurring Giving
                  </a>
                </div>
              </AnimateOnScroll>

              {/* In person */}
              <AnimateOnScroll delay={140}>
                <div className="h-full flex flex-col p-8 bg-cream rounded-2xl border border-cream-dark">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brown-deep text-gold mb-5">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-dark mb-3">
                    Give in Person
                  </h3>
                  <p className="text-text-body leading-relaxed flex-grow">
                    Bring your tithes and offerings to Sunday Worship Celebration at
                    11 AM or to Word On Wednesday at 6 PM. Envelopes are available
                    at the welcome table if you&rsquo;d like a record for your
                    giving statement.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* By mail */}
              <AnimateOnScroll delay={200}>
                <div
                  id="mail"
                  className="h-full flex flex-col p-8 bg-cream rounded-2xl border border-cream-dark scroll-mt-28"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brown-deep text-gold mb-5">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-dark mb-3">
                    Give by Mail
                  </h3>
                  <p className="text-text-body leading-relaxed mb-4">
                    Mail your check to the church office:
                  </p>
                  <address className="not-italic font-serif text-text-dark leading-relaxed mb-4 flex-grow">
                    {SITE.name}
                    <br />
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </address>
                  <p className="text-sm text-text-light">
                    Make checks payable to <strong>{SITE.name}</strong>. Note
                    &ldquo;Greater Glory&rdquo; on the memo line to direct your gift
                    to the campaign.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={240}>
              <p className="text-center text-sm text-text-light mt-12 max-w-2xl mx-auto leading-relaxed">
                {SITE.name} is a registered nonprofit religious organization. Giving
                statements are available from the church office at{" "}
                <a
                  href={`tel:${phoneTel}`}
                  className="font-semibold text-brown-light hover:text-brown transition-colors"
                >
                  {SITE.phone}
                </a>
                .
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
