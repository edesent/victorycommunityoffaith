import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import RequestForm from "@/components/RequestForm";
import { SITE } from "@/config/site";
import { CARE_SERVICES, VENUE_SPACES } from "@/config/content";

export const metadata: Metadata = {
  title: "Weddings, Facilities & Care",
  description:
    "Rent the sanctuary or fellowship hall for your wedding or event, ask Dr. Pennington to officiate, or book premarital, grief, and pastoral counseling in Wichita, Kansas.",
  alternates: { canonical: "/weddings-and-care" },
  openGraph: {
    title: `Weddings, Facilities & Care | ${SITE.name}`,
    description:
      "Wedding venue, officiant, and counseling — pastoral care for the biggest days and the hardest ones.",
    url: "/weddings-and-care",
    type: "website",
  },
};

const SPACE_OPTIONS = VENUE_SPACES.map((s) => `${s.name} — ${s.rate}`);
const CARE_OPTIONS = CARE_SERVICES.map((s) => s.name);

export default function WeddingsAndCarePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Weddings, Facilities &amp; Care"
          title="For the Biggest Days &amp; the Hardest Ones"
          subtitle="A place to say your vows, a pastor to stand with you, and care for the seasons in between"
        />

        {/* Facility rental */}
        <section id="rentals" className="py-24 bg-warm-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="max-w-3xl mb-14">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Rent Our Space
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-5">
                  Your Wedding, <em className="text-brown-light italic">In God&rsquo;s House</em>
                </h2>
                <p className="text-text-body leading-relaxed">
                  Victory&rsquo;s sanctuary and fellowship hall are available to
                  church members and to the wider Wichita community — weddings,
                  receptions, homegoing services, banquets, showers, and community
                  meetings. You do not have to be a member here to be welcome here.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {VENUE_SPACES.map((space, i) => (
                <AnimateOnScroll key={space.name} delay={i * 80}>
                  <article className="h-full flex flex-col p-8 bg-cream rounded-2xl border border-cream-dark hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-xl font-bold text-text-dark mb-2">
                      {space.name}
                    </h3>
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold-dark mb-4">
                      {space.capacity}
                    </p>
                    <p className="text-text-body leading-relaxed flex-grow">
                      {space.body}
                    </p>
                    <p className="mt-6 pt-5 border-t border-cream-dark font-serif text-2xl font-bold text-text-dark">
                      {space.rate}
                    </p>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll>
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
                <div>
                  <img
                    src="/photos/sanctuary-wide.jpg"
                    alt={`The sanctuary at ${SITE.name}`}
                    className="w-full rounded-3xl shadow-xl object-cover aspect-[4/3]"
                  />
                  <p className="text-sm text-text-light mt-4 leading-relaxed">
                    Rates include setup and cleanup time. A staff member is on site
                    for the duration of your event. Tell us your date and
                    we&rsquo;ll confirm availability and walk you through the rest.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-text-dark mb-5">
                    Request a Date
                  </h3>
                  <RequestForm
                    kind="Facility rental"
                    extras={[
                      {
                        name: "space",
                        label: "Which space?",
                        type: "select",
                        options: SPACE_OPTIONS,
                        required: true,
                        placeholder: "Choose a space…",
                      },
                      {
                        name: "eventType",
                        label: "Type of event",
                        type: "text",
                        placeholder: "Wedding, reception, homegoing, meeting…",
                      },
                      {
                        name: "eventDate",
                        label: "Preferred date",
                        type: "date",
                        required: true,
                      },
                      {
                        name: "guests",
                        label: "Approximate guest count",
                        type: "text",
                        placeholder: "e.g. 120",
                      },
                    ]}
                    messageLabel="Tell us about your event"
                    messagePlaceholder="Timing, setup needs, catering, anything else we should know."
                    messageRequired={false}
                    submitLabel="Check Availability"
                    successTitle="Request received."
                    successBody="We'll confirm whether your date is open and follow up with details."
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Officiant + counseling */}
        <section id="care" className="py-24 bg-cream scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="max-w-3xl mb-14">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Pastoral Services
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-5">
                  An Officiant, a Counselor,{" "}
                  <em className="text-brown-light italic">a Pastor</em>
                </h2>
                <p className="text-text-body leading-relaxed">
                  Dr. Pennington and the ministry team serve couples, families, and
                  individuals across Wichita — whether or not Victory is your home
                  church. Conversations are confidential, and where clinical care is
                  what&rsquo;s needed, we&rsquo;ll say so and help you find it.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {CARE_SERVICES.map((service, i) => (
                <AnimateOnScroll key={service.slug} delay={i * 70}>
                  <article
                    id={service.slug}
                    className="h-full flex flex-col p-8 bg-warm-white rounded-2xl border border-cream-dark hover:shadow-md transition-shadow scroll-mt-28"
                  >
                    <h3 className="font-serif text-xl font-bold text-text-dark mb-3">
                      {service.name}
                    </h3>
                    <p className="text-text-body leading-relaxed flex-grow">
                      {service.body}
                    </p>
                    <p className="mt-6 pt-5 border-t border-cream-dark text-sm">
                      <span className="text-xs font-bold tracking-[0.15em] uppercase text-text-light">
                        Fee
                      </span>
                      <br />
                      <span className="font-serif text-lg font-semibold text-text-dark">
                        {service.fee}
                      </span>
                    </p>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto">
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-3 text-center">
                  Book a Conversation
                </h3>
                <p className="text-text-body text-center mb-8 leading-relaxed">
                  Tell us what you need. Nothing you write here goes anywhere but to
                  the pastor.
                </p>
                <RequestForm
                  kind="Counseling & care"
                  extras={[
                    {
                      name: "service",
                      label: "What are you asking about?",
                      type: "select",
                      options: CARE_OPTIONS,
                      required: true,
                      placeholder: "Choose a service…",
                    },
                    {
                      name: "preferredDate",
                      label: "Date you have in mind (optional)",
                      type: "date",
                    },
                  ]}
                  messageLabel="How can we help?"
                  messagePlaceholder="Share as much or as little as you'd like."
                  messageRequired={false}
                  submitLabel="Send Request"
                  successTitle="We've received your request."
                  successBody="Dr. Pennington or a member of the care team will reach out to you personally."
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
