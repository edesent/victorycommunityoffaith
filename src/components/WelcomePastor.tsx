import AnimateOnScroll from "./AnimateOnScroll";
import { pastorFullName, pastorShortName } from "@/config/site";

export default function WelcomePastor() {
  return (
    <section id="welcome" className="pt-24 pb-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <AnimateOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-gradient-to-br from-brown-light to-brown-deep">
              <img
                src="/photos/pastor-wife.jpg"
                alt={`${pastorFullName} and his wife`}
                className="absolute inset-0 w-full h-full object-cover object-right"
              />
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll delay={200}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                A Message From Our Pastor
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                Come Fulfill <em className="text-brown-light italic">Your Purpose</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-4">
                Hello friend — I&rsquo;m {pastorFullName}, and on behalf of the Victory
                family I want to personally invite you to join us this Sunday.
              </p>
              <p className="text-lg text-text-body leading-relaxed mb-6">
                Many churches just want you to come fill a pew, but at Victory we want
                you to come fulfill your purpose. We are not a mega church in membership
                numbers — we are a mega church in making a meaningful difference in
                people&rsquo;s lives. Whoever you are and whatever you&rsquo;ve walked
                through, you&rsquo;ll find a family here.
              </p>
              <p className="font-serif italic text-text-light mb-8">
                — {pastorShortName}, Pastor &amp; Liberationist
              </p>
              <a
                href="/pastor"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Meet {pastorFullName}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
