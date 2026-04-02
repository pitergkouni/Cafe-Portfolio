import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1208]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-[#c8922a] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
              <path d="M2 21h18v-2H2v2zm2-4h14l-1-9H5L4 17zM12 2C9.24 2 7 4.24 7 7h10c0-2.76-2.24-5-5-5z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="block font-['Playfair_Display'] text-lg font-700 text-white leading-tight tracking-wide">
              Ember & Oak
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#c8922a] font-medium">
              Café & Bistro
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-white/80 hover:text-[#c8922a] text-sm font-medium uppercase tracking-widest transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#c8922a] after:transition-all hover:after:w-full"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav("#contact")}
          className="hidden md:block px-6 py-2.5 bg-[#c8922a] text-white text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-[#b07d20] transition-colors duration-200 shadow-md"
        >
          Reserve a Table
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-[#1a1208]/97 backdrop-blur-md ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-8 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-white/80 hover:text-[#c8922a] text-sm font-medium uppercase tracking-widest transition-colors w-full text-left py-2 border-b border-white/10"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav("#contact")}
              className="mt-2 w-full px-6 py-3 bg-[#c8922a] text-white text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-[#b07d20] transition-colors"
            >
              Reserve a Table
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
