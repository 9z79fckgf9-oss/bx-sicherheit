import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Phone, Menu, X, Globe } from 'lucide-react';

export default function Navbar({ lang, setLang, t, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.approach, href: '#approach' },
    { label: t.nav.solutions, href: '#solutions' },
    { label: t.nav.pillars, href: '#pillars' },
    { label: t.nav.audiences, href: '#audiences' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-paper-border shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-shell mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo - Power21 style with accent dot */}
        <a href="#" className="flex items-center gap-2 group">
          <span className={`font-extrabold text-xl sm:text-2xl tracking-tighter ${
            scrolled ? 'text-ink' : 'text-white'
          }`}>
            BX SICHERHEIT<span className="text-yellow-accent text-2xl font-serif">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                scrolled
                  ? 'text-body hover:text-ink'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Cluster */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-colors ${
              scrolled
                ? 'bg-paper-subtle text-ink hover:bg-paper-border'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-yellow-accent" />
            <span>{t.nav.switchLang}</span>
          </button>

          {/* Direct Phone */}
          <a
            href="tel:+491741757400"
            className={`hidden xl:flex items-center gap-2 text-xs font-mono font-medium ${
              scrolled ? 'text-body hover:text-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{t.nav.callUs}</span>
          </a>

          {/* Primary Pill Button matching power21.io */}
          <button
            onClick={onOpenQuote}
            className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              scrolled
                ? 'bg-ink text-white hover:bg-black shadow-md'
                : 'bg-white text-ink hover:bg-yellow-accent hover:text-ink shadow-lg'
            }`}
          >
            <span>{t.nav.cta}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold ${
              scrolled ? 'bg-paper-subtle text-ink' : 'bg-white/10 text-white'
            }`}
          >
            {t.nav.switchLang}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-paper border-b border-paper-border px-6 pt-4 pb-8 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-ink hover:text-blue-hero py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-paper-border flex flex-col gap-3">
            <a
              href="tel:+491741757400"
              className="flex items-center gap-2 text-sm font-mono text-body"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>+49 174 1757400</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-full bg-ink text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
