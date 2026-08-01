import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import RequestForm from "@/components/RequestForm";
import { SITE } from "@/config/site";
import { COURSES } from "@/config/content";

export const metadata: Metadata = {
  title: "L.E.A.D. Institute",
  description:
    "Leaders Empowered by Awesome Design — an innovative leadership and training center that equips and empowers leaders to solve urban communities' most complex problems.",
  alternates: { canonical: "/lead-institute" },
  openGraph: {
    title: `L.E.A.D. Institute | ${SITE.name}`,
    description:
      "An institute of higher learning for higher leading that develops leaders that change the world.",
    url: "/lead-institute",
    type: "website",
  },
};

const focusAreas = [
  {
    name: "Leadership Development",
    body: "Practical training that equips leaders to organize, serve, and solve the most complex problems facing urban communities.",
  },
  {
    name: "Liberation Theology",
    body: "Rooted in the good news that Jesus came to set the captives free — exploring the foundations of liberation, ministry preparation, and advocacy for marginalized voices.",
  },
  {
    name: "Spiritual Formation",
    body: "Deepening your walk with God so your leadership flows from a whole, healthy, Spirit-formed life.",
  },
  {
    name: "Discovery of Purpose",
    body: "Helping seekers uncover the purpose God placed inside them — and build a pathway to walk in it.",
  },
];

export default function LeadInstitutePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Leaders Empowered by Awesome Design"
          title="The L.E.A.D. Institute"
          subtitle="An institute of higher learning for higher leading that develops leaders that change the world"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-lg text-text-body leading-relaxed">
                The L.E.A.D. Institute is an innovative leadership and training center
                that equips and empowers leaders to solve urban communities&rsquo; most
                complex problems. We offer in-person training and virtual training
                through our online academy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {focusAreas.map((f, i) => (
                <article
                  key={f.name}
                  className="p-8 bg-cream rounded-2xl border border-cream-dark hover:shadow-md transition-shadow"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brown-deep text-gold font-serif text-lg font-bold mb-5">
                    {i + 1}
                  </span>
                  <h2 className="font-serif text-xl font-semibold text-text-dark mb-3">
                    {f.name}
                  </h2>
                  <p className="text-text-body leading-relaxed">{f.body}</p>
                </article>
              ))}
            </div>

            {/* Course catalog */}
            <div id="courses" className="scroll-mt-28">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                    Course Catalog
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">
                    What You Can Study
                  </h2>
                </div>
              </AnimateOnScroll>

              <div className="space-y-4">
                {COURSES.map((course, i) => (
                  <AnimateOnScroll key={course.code} delay={i * 60}>
                    <article className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-start p-7 md:p-8 bg-cream rounded-2xl border border-cream-dark hover:shadow-md transition-shadow">
                      <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-brown-deep text-gold text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                        {course.code}
                      </span>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-text-dark mb-2">
                          {course.name}
                        </h3>
                        <p className="text-text-body leading-relaxed mb-3">
                          {course.body}
                        </p>
                        <p className="text-sm text-text-light">
                          {course.length} · {course.format}
                        </p>
                      </div>
                      <p className="font-serif text-2xl font-bold text-text-dark md:text-right whitespace-nowrap">
                        {course.tuition}
                      </p>
                    </article>
                  </AnimateOnScroll>
                ))}
              </div>

              <p className="text-sm text-text-light text-center mt-8 max-w-2xl mx-auto leading-relaxed">
                Scholarships and payment plans are available — no one is turned away
                from training for lack of tuition. Ask when you enroll.
              </p>
            </div>

            {/* Enrollment */}
            <div id="enroll" className="mt-24 scroll-mt-28">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brown via-brown-light to-brown-deep p-8 md:p-14 shadow-xl">
                <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-gold/15 blur-3xl" />
                <div className="relative">
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
                      Ready to <em className="text-gold-light italic">lead?</em>
                    </h2>
                    <p className="text-white/80 leading-relaxed">
                      Enroll below and we&rsquo;ll send you start dates, the syllabus,
                      and everything you need for your first session. Questions
                      first? Call us at {SITE.phone}.
                    </p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <RequestForm
                      kind="L.E.A.D. enrollment"
                      tone="dark"
                      extras={[
                        {
                          name: "course",
                          label: "Which course?",
                          type: "select",
                          options: [
                            ...COURSES.map((c) => `${c.code} — ${c.name}`),
                            "Not sure yet — help me choose",
                          ],
                          required: true,
                          placeholder: "Choose a course…",
                        },
                        {
                          name: "format",
                          label: "Preferred format",
                          type: "select",
                          options: ["In person in Wichita", "Online academy", "Either"],
                          required: true,
                          placeholder: "Choose a format…",
                        },
                      ]}
                      messageLabel="Tell us about yourself"
                      messagePlaceholder="Where you serve, what you're hoping to grow in, any questions."
                      messageRequired={false}
                      submitLabel="Enroll Me"
                      successTitle="You're in the queue."
                      successBody="We'll send you start dates and next steps for your course shortly."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
