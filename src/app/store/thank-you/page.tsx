import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { SITE, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "Thank You for Your Order",
  description: `Your order from the ${SITE.name} store is confirmed.`,
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Order Confirmed"
          title="Thank You"
          subtitle="Your order is in — and it goes straight to work in this ministry"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-lg text-text-body leading-relaxed mb-6">
              A receipt is on its way to your email. If you chose shipping,
              we&rsquo;ll get your order out within a few business days. If you
              chose to pick up at church, see us at the welcome table on Sunday.
            </p>
            <p className="text-text-body leading-relaxed mb-10">
              Questions about your order? Call the church at{" "}
              <a
                href={`tel:${phoneTel}`}
                className="font-semibold text-brown-light hover:text-brown transition-colors"
              >
                {SITE.phone}
              </a>
              .
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/store"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Back to the Store
              </a>
              <a
                href="/"
                className="inline-block bg-transparent text-brown-light font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown-light hover:text-white transition-all"
              >
                Return Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
