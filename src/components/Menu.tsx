import { useState } from "react";

const categories = ["All", "Coffee", "Food", "Pastries", "Cold Drinks"];

const menuItems = [
  // Coffee
  {
    id: 1,
    category: "Coffee",
    name: "Ember Espresso",
    desc: "A rich, velvety double shot with notes of dark chocolate and toasted hazelnut.",
    price: "$4.50",
    tag: "Signature",
    image: "./images/coffee1.jpg",
  },
  {
    id: 2,
    category: "Coffee",
    name: "Golden Latte",
    desc: "Turmeric-spiced oat milk latte with a hint of ginger and black pepper.",
    price: "$6.00",
    tag: "Popular",
    image: null,
    emoji: "✨",
  },
  {
    id: 3,
    category: "Coffee",
    name: "Classic Flat White",
    desc: "Smooth microfoam milk over a concentrated ristretto — the Melbourne way.",
    price: "$5.50",
    tag: null,
    image: null,
    emoji: "☕",
  },
  {
    id: 4,
    category: "Coffee",
    name: "Oak Cold Brew",
    desc: "Steeped 20 hours, served over ice with a splash of oat cream.",
    price: "$6.50",
    tag: "New",
    image: null,
    emoji: "🧊",
  },
  // Food
  {
    id: 5,
    category: "Food",
    name: "Avocado Toast",
    desc: "House sourdough, smashed avocado, poached eggs, micro greens & dukkah.",
    price: "$15.00",
    tag: "Bestseller",
    image: "./images/food1.jpg",
  },
  {
    id: 6,
    category: "Food",
    name: "Smoked Salmon Bowl",
    desc: "Wild smoked salmon, quinoa, pickled cucumber, dill cream cheese & capers.",
    price: "$18.00",
    tag: null,
    image: null,
    emoji: "🥗",
  },
  {
    id: 7,
    category: "Food",
    name: "The Big Brunch",
    desc: "Bacon, eggs your way, roasted tomatoes, mushrooms, baked beans & sourdough.",
    price: "$22.00",
    tag: "Popular",
    image: null,
    emoji: "🍳",
  },
  {
    id: 8,
    category: "Food",
    name: "Truffle Eggs",
    desc: "Scrambled free-range eggs with black truffle oil, chives on toasted brioche.",
    price: "$17.00",
    tag: null,
    image: null,
    emoji: "🥚",
  },
  // Pastries
  {
    id: 9,
    category: "Pastries",
    name: "Butter Croissant",
    desc: "Classic French-style, layers of golden butter pastry, baked fresh each morning.",
    price: "$4.50",
    tag: "Daily Fresh",
    image: "./images/pastry1.jpg",
  },
  {
    id: 10,
    category: "Pastries",
    name: "Almond Danish",
    desc: "Flaky pastry filled with almond cream, topped with flaked almonds & icing sugar.",
    price: "$5.50",
    tag: null,
    image: null,
    emoji: "🥐",
  },
  {
    id: 11,
    category: "Pastries",
    name: "Banana Loaf",
    desc: "Moist banana bread with walnuts & caramel glaze, served warm with butter.",
    price: "$6.00",
    tag: "Vegan",
    image: null,
    emoji: "🍌",
  },
  // Cold Drinks
  {
    id: 12,
    category: "Cold Drinks",
    name: "Iced Matcha Latte",
    desc: "Ceremonial-grade matcha whisked with oat milk over ice — smooth and earthy.",
    price: "$7.00",
    tag: "Fan Fave",
    image: null,
    emoji: "🍵",
  },
  {
    id: 13,
    category: "Cold Drinks",
    name: "Strawberry Lemonade",
    desc: "Fresh-squeezed lemonade blended with house-made strawberry syrup.",
    price: "$6.00",
    tag: null,
    image: null,
    emoji: "🍋",
  },
  {
    id: 14,
    category: "Cold Drinks",
    name: "Sparkling Hibiscus",
    desc: "Hibiscus flower tea with sparkling water, honey and a sprig of fresh mint.",
    price: "$6.50",
    tag: "New",
    image: null,
    emoji: "🌺",
  },
];

const tagColors: Record<string, string> = {
  Signature: "bg-[#c8922a] text-white",
  Popular: "bg-rose-100 text-rose-700",
  Bestseller: "bg-emerald-100 text-emerald-700",
  New: "bg-blue-100 text-blue-700",
  Vegan: "bg-green-100 text-green-700",
  "Daily Fresh": "bg-amber-100 text-amber-700",
  "Fan Fave": "bg-purple-100 text-purple-700",
};

export default function Menu() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c8922a] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Our Menu
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-700 text-[#1a1208] mb-4">
            Crafted with Intention
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Every item on our menu is thoughtfully prepared using seasonal ingredients,
            specialty beans, and a whole lot of love.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-widest transition-all duration-200 ${
                active === cat
                  ? "bg-[#1a1208] text-white shadow-md"
                  : "bg-[#faf7f2] text-gray-500 hover:bg-[#f0ebe0] hover:text-[#1a1208]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-[#faf7f2] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image or Emoji */}
              <div className="h-44 overflow-hidden bg-[#f0ebe0] flex items-center justify-center relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-6xl">{(item as any).emoji}</span>
                )}
                {item.tag && (
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${tagColors[item.tag] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-['Playfair_Display'] font-600 text-[#1a1208] text-lg leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-[#c8922a] font-bold text-base whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                <button className="mt-4 w-full py-2.5 border-2 border-[#1a1208]/10 rounded-xl text-[#1a1208] text-sm font-semibold hover:bg-[#1a1208] hover:text-white hover:border-[#1a1208] transition-all duration-200 uppercase tracking-wider">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full menu note */}
        <div className="text-center mt-14">
          <p className="text-gray-400 text-sm mb-4">Seasonal specials change weekly. Dietary options always available.</p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[#c8922a] font-semibold text-sm hover:underline"
          >
            Ask about today's specials
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
