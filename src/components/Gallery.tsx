const galleryItems = [
  { src: "/images/hero.jpg", span: "col-span-2 row-span-2", label: "Our Space" },
  { src: "/images/coffee1.jpg", span: "", label: "Signature Coffee" },
  { src: "/images/pastry1.jpg", span: "", label: "Fresh Pastries" },
  { src: "/images/food1.jpg", span: "", label: "Brunch Plates" },
  { src: "/images/about.jpg", span: "", label: "Behind the Bar" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#1a1208]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c8922a] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Gallery
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-700 text-white mb-4">
            A Feast for the Eyes
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Step inside our world — where every corner is designed for warmth,
            and every dish is made to be savoured.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white font-['Playfair_Display'] text-lg font-semibold">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors duration-200 group"
          >
            <svg className="w-5 h-5 text-[#c8922a]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-widest">Follow us @emberandoak</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
