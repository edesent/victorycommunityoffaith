"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { brandTop, brandBottom } from "@/config/site";

// The site map. An item with `children` renders as a dropdown on desktop and
// as an indented group in the mobile drawer.
type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Our Story" },
      { href: "/pastor", label: "Our Pastor" },
      { href: "/statement-of-faith", label: "What We Believe" },
      { href: "/plan-of-salvation", label: "Plan of Salvation" },
    ],
  },
  { href: "/messages", label: "Watch" },
  {
    href: "/ministries",
    label: "Get Involved",
    children: [
      { href: "/ministries", label: "Ministries" },
      { href: "/ministries#volunteer", label: "Volunteer" },
      { href: "/lead-institute", label: "L.E.A.D. Institute" },
    ],
  },
  { href: "/weddings-and-care", label: "Weddings & Care" },
  { href: "/store", label: "Store" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isSubPage = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  const linkClass =
    "text-white/85 text-sm font-medium px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-all";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isSubPage
          ? "bg-brown-deep/[.97] py-3 shadow-lg backdrop-blur-sm"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 rounded-full bg-warm-white flex items-center justify-center shadow-sm overflow-hidden">
            <img
              src="/logo.png"
              alt={`${brandTop} ${brandBottom} logo`}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-gold whitespace-nowrap">
              {brandTop}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/60 whitespace-nowrap">
              {brandBottom}
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="relative group">
                <a href={item.href} className={`${linkClass} inline-flex items-center gap-1.5`}>
                  {item.label}
                  <svg
                    className="w-3 h-3 opacity-60 transition-transform group-hover:rotate-180"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </a>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all">
                  <ul className="min-w-56 rounded-xl bg-brown-deep shadow-2xl ring-1 ring-white/10 py-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            )
          )}
          <li className="ml-2">
            <a
              href="/contact#visit"
              className="bg-gold text-brown-deep text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Plan Your Visit
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden flex flex-col gap-1.5 p-2 relative z-10"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed xl:hidden top-0 right-0 w-80 max-w-[85vw] h-screen overflow-y-auto bg-brown-deep pt-20 pb-10 px-7 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-white/85 text-base font-medium px-4 py-3 rounded-md hover:text-white hover:bg-white/10 transition-all"
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="ml-4 border-l border-white/15 pl-3 mb-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          className="block text-white/60 text-sm px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-all"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-5">
              <a
                href="/contact#visit"
                className="block text-center bg-gold text-brown-deep font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-all"
              >
                Plan Your Visit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
