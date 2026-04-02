const testimonials = [
  {
    name: "Sarah M.",
    role: "Regular since 2015",
    avatar: "S",
    color: "bg-rose-400",
    rating: 5,
    text: "Ember & Oak has become my second home. The flat white is absolutely perfect — consistently excellent every single time. The staff remember my name and my order. That's rare.",
  },
  {
    name: "James L.",
    role: "Food Blogger",
    avatar: "J",
    color: "bg-blue-400",
    rating: 5,
    text: "I've reviewed over 200 cafés across the country and this place stands out. The avocado toast is genuinely the best I've ever had, and the atmosphere is unmatched.",
  },
  {
    name: "Priya K.",
    role: "Local Resident",
    avatar: "P",
    color: "bg-violet-400",
    rating: 5,
    text: "The iced matcha latte is life-changing. I come here every weekend with my family and we always leave happy. The pastries are baked fresh — you can tell immediately.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c8922a] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Reviews
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-700 text-[#1a1208] mb-4">
            Loved by Our Community
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don't take our word for it — here's what our wonderful guests have to say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-[#c8922a] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed flex-1 italic mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#1a1208] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl px-10 py-6 shadow-sm">
            <div className="text-center">
              <div className="font-['Playfair_Display'] text-5xl font-700 text-[#c8922a]">4.9</div>
              <div className="flex justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#c8922a] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden sm:block" />
            <div className="text-left">
              <div className="font-semibold text-[#1a1208]">Google Rating</div>
              <div className="text-gray-400 text-sm">Based on 840+ reviews</div>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden sm:block" />
            <a
              href="#"
              className="flex items-center gap-2 text-[#c8922a] text-sm font-semibold hover:underline"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Read on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
