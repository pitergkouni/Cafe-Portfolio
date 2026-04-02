export default function About() {
  return (
    <section id="about" className="py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./images/about.jpg"
                alt="Barista crafting coffee"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
              <div className="text-4xl font-['Playfair_Display'] font-700 text-[#c8922a]">12+</div>
              <div className="text-sm text-gray-500 mt-1 leading-snug">Years crafting exceptional coffee</div>
              <div className="mt-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#c8922a] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#c8922a]/15 -z-10" />
          </div>

          {/* Text Side */}
          <div className="lg:pl-6">
            <span className="inline-block text-[#c8922a] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Our Story
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-700 text-[#1a1208] leading-tight mb-6">
              Rooted in Passion,
              <br />
              Brewed with Care
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ember & Oak was born in 2012 from a simple dream — to create a place where
              great coffee meets genuine community. Nestled in the heart of the city, our café
              is a haven for those who appreciate the craft behind every cup.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We source our beans directly from small farms across Ethiopia, Colombia, and
              Guatemala, roasting them in-house to bring out their unique character. Our chefs
              prepare everything fresh daily — from flaky croissants to hearty brunch plates.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: "🌱", label: "Ethically Sourced", desc: "Direct trade beans" },
                { icon: "☕", label: "In-House Roasting", desc: "Freshness guaranteed" },
                { icon: "🍞", label: "Baked Daily", desc: "No preservatives" },
                { icon: "💚", label: "Eco-Friendly", desc: "Compostable packaging" },
              ].map((v) => (
                <div key={v.label} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <span className="text-2xl">{v.icon}</span>
                  <div>
                    <div className="font-semibold text-[#1a1208] text-sm">{v.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1208] text-white font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-[#2e1f0a] transition-colors duration-200"
            >
              Visit Us Today
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
