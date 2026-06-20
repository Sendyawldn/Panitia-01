import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Lomba", href: "#lomba" },
    { name: "Jadwal", href: "#schedule" },
    { name: "Panitia", href: "#panitia" },
    {
      name: "Anggaran Biaya",
      href: "https://treasury-three.vercel.app/",
      external: true,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 
        ${isScrolled ? "py-3" : "py-5"}`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 flex items-center justify-between px-6 py-3
        ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md border border-gray-100" : "bg-transparent"}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-indo-red flex items-center justify-center text-white font-bebas text-2xl shrink-0">
            81
          </div>
          <span
            className={`font-bebas text-2xl tracking-wider ${isScrolled ? "text-slate-900" : "text-slate-900 sm:text-white drop-shadow-md"}`}
          >
            HUT RI 81 <span className="text-indo-red">Kedep</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`font-medium hover:text-indo-red transition-colors ${isScrolled ? "text-slate-600" : "text-slate-200 hover:text-white drop-shadow"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu
              size={24}
              className={!isScrolled ? "text-slate-800 sm:text-white" : ""}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden md:hidden p-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!link.external) setMobileMenuOpen(false);
                }}
                className="text-slate-700 font-medium p-3 hover:bg-slate-50 rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
