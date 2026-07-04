import { SITE, brandTop, brandBottom, phoneTel } from "@/config/site";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Service Times" },
  { href: "/lead-institute", label: "L.E.A.D. Institute" },
  { href: "/messages", label: "Messages" },
  { href: "/give", label: "Give Online" },
  { href: "/statement-of-faith", label: "What We Believe" },
  { href: "/plan-of-salvation", label: "Plan of Salvation" },
];

const serviceTimes = [
  { label: "Sunday Worship", time: "11 AM" },
  { label: "Wednesday Bible Study", time: "6 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-text-body border-t border-cream-dark pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-cream-dark">
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center shadow-sm ring-1 ring-cream-dark mb-4 overflow-hidden">
              <img src="/logo.png" alt={`${SITE.name} logo`} className="w-11 h-11 object-contain" />
            </div>
            <p className="font-serif text-lg text-text-dark mb-2 leading-tight">
              {brandTop}<br />{brandBottom}
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              {SITE.address.street}<br />
              {SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br />
              <a href={`tel:${phoneTel}`} className="text-brown-light hover:text-brown transition-colors">
                {SITE.phone}
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-semibold text-text-dark mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-text-light hover:text-brown-light sm:hover:pl-1 transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-semibold text-text-dark mb-5">Service Times</h4>
            <ul className="space-y-2.5">
              {serviceTimes.map((s) => (
                <li key={s.label} className="text-sm text-text-light">
                  <strong className="text-text-dark font-semibold">{s.label}</strong> — {s.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-semibold text-text-dark mb-5">Connect With Us</h4>
            <div className="flex gap-3 mb-6 justify-center sm:justify-start">
              <a
                href={SITE.facebookUrl || "#"}
                aria-label="Facebook"
                target={SITE.facebookUrl ? "_blank" : undefined}
                rel={SITE.facebookUrl ? "noopener noreferrer" : undefined}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream text-brown-light ring-1 ring-cream-dark hover:bg-gold hover:text-brown-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={SITE.youtubeUrl || "#"}
                aria-label="YouTube"
                target={SITE.youtubeUrl ? "_blank" : undefined}
                rel={SITE.youtubeUrl ? "noopener noreferrer" : undefined}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream text-brown-light ring-1 ring-cream-dark hover:bg-gold hover:text-brown-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                </svg>
              </a>
            </div>
            <p className="text-sm italic text-text-light leading-relaxed">
              A Liberationist church, striving to set the captives free.<br />
              <em className="not-italic text-text-muted">We are People Empowered to Win.</em>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center py-6 text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
