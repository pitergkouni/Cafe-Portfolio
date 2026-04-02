export default function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 border border-[#c8922a]/60 rounded-full backdrop-blur-sm bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8922a] animate-pulse" />
          <span className="text-[#c8922a] text-xs font-semibold uppercase tracking-[0.25em]">
            Open Daily · 7am – 10pm
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-['Playfair_Display'] text-5xl sm:text-7xl font-700 text-white leading-[1.1] mb-6">
          Where Every Cup
          <br />
          <em className="text-[#c8922a] not-italic">Tells a Story</em>
        </h1>

        {/* Subtitle */}
        <p className="text-white/75 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Handcrafted coffee, artisan pastries, and heartfelt food — served in a
          warm, welcoming space in the heart of the city.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleNav("#menu")}
            className="px-8 py-4 bg-[#c8922a] text-white font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-[#b07d20] transition-all duration-200 shadow-xl shadow-[#c8922a]/30 hover:scale-105"
          >
            Explore Our Menu
          </button>
          <button
            onClick={() => handleNav("#about")}
            className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            Our Story
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 flex items-center justify-center gap-10 sm:gap-16">
          {[
            { value: "12+", label: "Years of Craft" },
            { value: "40+", label: "Signature Drinks" },
            { value: "4.9★", label: "Google Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-['Playfair_Display'] text-3xl font-700 text-[#c8922a]">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 text-[#c8922a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
