import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import RequestForm from "@/components/RequestForm";
import { SITE, phoneTel, mapsUrl, addressOneLine } from "@/config/site";
import { OFFICE_HOURS } from "@/config/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE.name} in Wichita, Kansas — call ${SITE.phone}, email us, or plan your first visit.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us | ${SITE.name}`,
    description: "Call, email, or send us a message — we'd love to hear from you.",
    url: "/contact",
    type: "website",
  },
};

const REASONS = [
  "I'd like to plan a visit",
  "I have a question about the church",
  "I'd like to speak with the pastor",
  "Ministry or volunteering",
  "L.E.A.D. Institute",
  "Weddings, rentals, or counseling",
  "Giving or the Greater Glory Campaign",
  "Something else",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="We&rsquo;d Love to Hear From You"
          title="Contact Us"
          subtitle="Call, write, or just show up on Sunday — all three work"
        />

        {/* Details + form */}
        <section className="py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.15fr] gap-12 items-start">
            {/* Details */}
            <AnimateOnScroll>
              <div>
                <h2 className="font-serif text-3xl font-bold text-text-dark leading-snug mb-8">
                  The Church <em className="text-brown-light italic">Office</em>
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-brown-light flex-shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-1">
                        Address
                      </p>
                      <address className="not-italic text-text-dark font-medium leading-relaxed">
                        {SITE.address.street}
                        <br />
                        {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-brown-light flex-shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-1">
                        Phone
                      </p>
                      <a
                        href={`tel:${phoneTel}`}
                        className="text-text-dark font-medium hover:text-brown-light transition-colors"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-brown-light flex-shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-text-dark font-medium hover:text-brown-light transition-colors break-all"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-brown-light flex-shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-1">
                        Office Hours
                      </p>
                      <ul className="text-text-dark font-medium leading-relaxed">
                        {OFFICE_HOURS.map((o) => (
                          <li key={o.days}>
                            {o.days} — {o.hours}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-7 bg-cream rounded-2xl border border-cream-dark">
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">
                    Service Times
                  </h3>
                  <ul className="space-y-1.5 text-text-body">
                    <li>
                      <strong className="text-text-dark">Sunday Worship Celebration</strong> — 11:00 AM
                    </li>
                    <li>
                      <strong className="text-text-dark">Word On Wednesday (WOW)</strong> — 6:00 PM
                    </li>
                  </ul>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll delay={150}>
              <div>
                <h2 className="font-serif text-3xl font-bold text-text-dark leading-snug mb-3">
                  Send Us a <em className="text-brown-light italic">Message</em>
                </h2>
                <p className="text-text-body leading-relaxed mb-7">
                  Questions about the church, the ministries, or anything else —
                  write to us here and we&rsquo;ll get back to you.
                </p>
                <RequestForm
                  endpoint="/api/contact"
                  extras={[
                    {
                      name: "reason",
                      label: "What’s this about?",
                      type: "select",
                      options: REASONS,
                      required: true,
                      placeholder: "Choose one…",
                    },
                  ]}
                  messageLabel="Message"
                  messagePlaceholder="Tell us what's on your mind — or just say hello."
                  submitLabel="Send Message"
                  successTitle="Message sent — thank you!"
                  successBody="Someone from Victory will get back to you shortly. If it's urgent, call us at (316) 305-0337."
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Plan your visit — goes straight to the church's Slack */}
        <section
          id="visit"
          className="py-24 bg-brown-deep relative overflow-hidden scroll-mt-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,85,0.16),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            <AnimateOnScroll>
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-4">
                  Plan Your Visit
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
                  Tell us you&rsquo;re coming and{" "}
                  <em className="text-gold-light italic">we&rsquo;ll be looking for you.</em>
                </h2>
                <div className="space-y-4 text-white/75 leading-relaxed">
                  <p>
                    Walking into a church for the first time can feel like a lot.
                    Let us take the edge off it — send this and someone will meet
                    you at the door, save you a seat, and get your kids where they
                    need to be.
                  </p>
                  <p>
                    Come as you are. There&rsquo;s no dress code, no pressure, and
                    nobody is going to single you out.
                  </p>
                </div>
                <ul className="mt-8 space-y-3">
                  {[
                    "Sunday Worship Celebration — 11:00 AM",
                    "Word On Wednesday (WOW) — 6:00 PM",
                    "1016 E Pawnee St, Wichita — free parking on site",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm text-white/80">
                      <svg
                        className="w-4 h-4 mt-0.5 text-gold flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <RequestForm
                endpoint="/api/visit"
                kind="Plan a visit"
                tone="dark"
                extras={[
                  {
                    name: "service",
                    label: "Which service are you planning on?",
                    type: "select",
                    options: [
                      "Sunday Worship Celebration — 11 AM",
                      "Word On Wednesday (WOW) — 6 PM",
                      "Not sure yet",
                    ],
                    required: true,
                    placeholder: "Choose a service…",
                  },
                  {
                    name: "visitDate",
                    label: "Which date do you have in mind?",
                    type: "date",
                  },
                  {
                    name: "party",
                    label: "How many are coming?",
                    type: "text",
                    placeholder: "e.g. 2 adults and 3 kids",
                  },
                  {
                    name: "kids",
                    label: "Ages of any children",
                    type: "text",
                    placeholder: "So Victory Kids can be ready for them",
                  },
                ]}
                messageLabel="Anything we should know?"
                messagePlaceholder="Questions, accessibility needs, or how you heard about us."
                messageRequired={false}
                submitLabel="Let Them Know I'm Coming"
                successTitle="We'll be looking for you."
                successBody="Your note just went to the church. Someone will reach out before your visit — and we'll be watching for you at the door."
              />
            </AnimateOnScroll>
          </div>
        </section>

        {/* Map */}
        <section className="pb-24 pt-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-[420px] rounded-3xl overflow-hidden shadow-sm border border-cream-dark relative bg-cream-dark">
              <div className="absolute inset-0 iframe-shimmer" />
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(addressOneLine)}&output=embed`}
                title={`Map to ${SITE.name}`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
