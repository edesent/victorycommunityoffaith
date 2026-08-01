import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import StoreGrid from "@/components/StoreGrid";
import { stripeConfigured } from "@/lib/stripe";
import { PRODUCTS } from "@/config/content";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Victory Store",
  description:
    "Books by Dr. Jermaine E. Pennington — The Divine Mindshift, The Chain Breaker, Pathways to Purpose, and Priest in Normal Clothes — plus Victory Community of Faith merchandise.",
  alternates: { canonical: "/store" },
  openGraph: {
    title: `Victory Store | ${SITE.name}`,
    description: "Books by Dr. Pennington and Victory merchandise.",
    url: "/store",
    type: "website",
  },
};

// Rendered per request so that adding STRIPE_SECRET_KEY in Vercel switches the
// buy buttons on immediately, without needing a rebuild.
export const dynamic = "force-dynamic";

export default function StorePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Victory Store"
          title="Books &amp; Merchandise"
          subtitle="Read it, wear it, pass it on — every order supports the ministry"
        />
        <section className="py-24 bg-warm-white">
          <StoreGrid products={[...PRODUCTS]} checkoutEnabled={stripeConfigured()} />
        </section>
      </main>
      <Footer />
    </>
  );
}
