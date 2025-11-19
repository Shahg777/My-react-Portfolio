import React, { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  // Handle scroll for shadow and active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Active link detection
      const sections = links.map((l) => document.querySelector(l.href));
      const scrollPos = window.scrollY + 100;

      let current = "#home";
      sections.forEach((section, idx) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = links[idx].href;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-500
        ${scrolled ? "bg-white/95 shadow-xl border-b border-slate-200" : "bg-white/90 shadow-sm"}`}
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="flex items-center gap-3 group cursor-pointer"
              onClick={handleLinkClick}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 
                flex items-center justify-center text-white font-bold text-xl 
                transform transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 shadow-lg">
                S
              </div>
              <span className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                Shahzaib
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 py-2 ${
                  active === link.href 
                    ? "text-blue-600 font-semibold" 
                    : "text-slate-700"
                }`}
              >
                {link.name}
                {active === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA Button - Now links to Fiverr */}
            <a
              href="https://www.fiverr.com/users/shan777852"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block px-6 py-2.5 rounded-xl text-sm font-semibold 
              bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg
              transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600
              hover:scale-105 active:scale-95 hover:shadow-xl"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-lg border-t border-slate-200`}
      >
        <div className="px-5 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                active === link.href
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Hire Me Button - Also links to Fiverr */}
          <a
            href="https://www.fiverr.com/users/shan777852"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="block px-4 py-3 text-center rounded-xl font-semibold 
            bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg
            hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600
            transition-all duration-300 hover:scale-105 mt-4"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}