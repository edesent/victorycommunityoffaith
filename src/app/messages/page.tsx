import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import MessagesLibrary from "@/components/MessagesLibrary";
import LivePlayer from "@/components/LivePlayer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getMessages } from "@/lib/messages";
import { CURRENT_STUDY, PODCAST_URL, PRODUCTS } from "@/config/content";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Watch Live & Sermons",
  description: `Watch ${SITE.name} live on Sunday mornings and browse the sermon archive — searchable by topic and year.`,
  alternates: { canonical: "/messages" },
  openGraph: {
    title: `Watch Live & Sermons | ${SITE.name}`,
    description: "Live Sunday worship and the full sermon archive.",
    url: "/messages",
    type: "website",
  },
};

// Re-check the YouTube feed for new uploads every 30 minutes.
export const revalidate = 1800;

export default async function MessagesPage() {
  const messages = await getMessages(50);
  const studyBook = PRODUCTS.find((p) => p.id === CURRENT_STUDY.productId);

  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="The Digital Sanctuary"
          title="Watch Live &amp; Sermons"
          subtitle="Whether you&rsquo;re homebound, out of town, or just curious — there&rsquo;s a seat for you here"
        />

        {/* Live */}
        <section id="live" className="py-20 bg-brown-deep relative overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,85,0.16),transparent_60%)]" />
          <div className="relative max-w-5xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-gold-light">
                    Sundays at 11 AM Central
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug">
                  Worship With Us{" "}
                  <em className="text-gold-light italic">From Wherever You Are</em>
                </h2>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <LivePlayer />
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {SITE.facebookUrl && (
                  <a
                    href={SITE.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Also Live on Facebook
                  </a>
                )}
                {SITE.youtubeUrl && (
                  <a
                    href={SITE.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
                  >
                    Subscribe on YouTube
                  </a>
                )}
                {PODCAST_URL && (
                  <a
                    href={PODCAST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
                  >
                    Listen to the Podcast
                  </a>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* What the Wednesday study is working through */}
        {studyBook && (
          <section className="py-20 bg-cream">
            <div className="max-w-5xl mx-auto px-6">
              <AnimateOnScroll>
                <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
                  <img
                    src={studyBook.image}
                    alt={studyBook.title}
                    className="w-52 mx-auto rounded-2xl shadow-xl"
                  />
                  <div>
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                      Word On Wednesday · 6 PM
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-text-dark leading-snug mb-4">
                      {CURRENT_STUDY.title}
                    </h2>
                    <p className="text-text-body leading-relaxed mb-7">
                      {CURRENT_STUDY.body}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="/store"
                        className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                      >
                        Get the Book
                      </a>
                      <a
                        href="/contact"
                        className="inline-block bg-transparent text-brown-light font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown-light hover:text-white transition-all"
                      >
                        Join the Study
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        )}

        {/* Archive */}
        <section id="archive" className="py-24 bg-warm-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Sermon Archive
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">
                Messages From Our Pulpit
              </h2>
            </div>

            {messages.length > 0 ? (
              <MessagesLibrary messages={messages} />
            ) : (
              <div className="rounded-2xl border border-cream-dark bg-cream p-10 text-center">
                <h3 className="font-serif text-3xl font-bold text-text-dark">
                  Messages are on the way
                </h3>
                <p className="mt-4 text-lg leading-8 text-text-light max-w-xl mx-auto">
                  Recent sermons appear here automatically from our YouTube
                  channel. In the meantime, you can watch directly on YouTube.
                </p>
                {SITE.youtubeUrl ? (
                  <a
                    href={SITE.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Open Our YouTube Channel
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
