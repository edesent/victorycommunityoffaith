import { brandTop, brandBottom } from "@/config/site";

export default function PreachingHero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — Victory worship montage in royal purple */}
      <div className="absolute inset-0 z-0 bg-brown-deep">
        <img
          src="/photos/hero-bg.jpg"
          alt="Worship at Victory Community of Faith"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,163,82,0.12),transparent_60%)]" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/70 via-brown-deep/35 to-brown-deep/85 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center text-white max-w-3xl px-5 py-10">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-light mb-3 animate-fade-up animation-delay-200">
          A Liberationist Church in Wichita, Kansas
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-5 animate-fade-up animation-delay-400">
          {brandTop}<br />{brandBottom}
        </h1>
        <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded animate-fade-up animation-delay-600" />
        <p className="font-serif text-lg md:text-xl italic text-white/85 leading-relaxed max-w-xl mx-auto mb-9 animate-fade-up animation-delay-800">
          &ldquo;Empowering and inspiring the people of our community to experience
          victory through the message and ministry of Jesus Christ.&rdquo;
          <span className="block not-italic text-sm text-gold-light mt-2">— We Are People Empowered to Win</span>
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-1000">
          <a
            href="#services"
            className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-gold hover:bg-gold-light hover:border-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Plan Your Visit
          </a>
          <a
            href="#watch-live"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
          >
            Watch Live
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-fade-up animation-delay-1300">
        <a href="#watch-live" className="flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.15em] uppercase">
          <span>Scroll</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-white/40 rotate-45 animate-scroll-bounce" />
        </a>
      </div>
    </header>
  );
}
