import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import MessagesLibrary from "@/components/MessagesLibrary";
import { getMessages } from "@/lib/messages";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Sermons & Messages",
  description: `Watch recent sermons and messages from ${SITE.name}.`,
  alternates: { canonical: "/messages" },
  openGraph: {
    title: `Sermons & Messages | ${SITE.name}`,
    description: "Recent sermons and messages.",
    url: "/messages",
    type: "website",
  },
};

// Re-check the YouTube feed for new uploads every 30 minutes.
export const revalidate = 1800;

export default async function MessagesPage() {
  const messages = await getMessages(12);

  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Sermons"
          title="Messages From Our Pulpit"
          subtitle="Watch our most recently streamed messages"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            {messages.length > 0 ? (
              <MessagesLibrary messages={messages} />
            ) : (
              <div className="rounded-2xl border border-cream-dark bg-cream p-10 text-center">
                <h2 className="font-serif text-3xl font-bold text-text-dark">
                  Messages are on the way
                </h2>
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
