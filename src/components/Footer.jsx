import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';

export default function Footer({ data, lang, setLang, onOpenModal, onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper text-body border-t border-paper-border pt-20 pb-12">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-paper-border">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-extrabold text-2xl tracking-tighter text-ink block">
              BX SICHERHEIT<span className="text-yellow-accent text-2xl font-serif">.</span>
            </span>

            <p className="text-sm text-body leading-relaxed max-w-sm">
              {data.desc}
            </p>

            <div className="text-xs font-mono text-grey space-y-1">
              <p>Inhaber: Amir Bajra</p>
              <p>Johann-Sebastian-Bach-Str. 3, 67112 Mutterstadt</p>
              <p>§ 34a GewO Certified · IHK Pfalz</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#approach" className="hover:text-ink transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-ink transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-ink transition-colors">
                  Two Interlocking Pillars
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-ink transition-colors">
                  Why Mindset Matters
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-ink transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Language */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <a href="tel:+491741757400" className="text-ink font-bold hover:text-blue-hero transition-colors">
                  +49 174 1757400
                </a>
              </p>
              <p>
                <a href="mailto:info@bx-sicherheit.com" className="hover:text-ink transition-colors">
                  info@bx-sicherheit.com
                </a>
              </p>
              <p className="text-xs text-grey">
                Mon – Sat: 08:00 – 20:00 (24/7 for active operations)
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper-subtle border border-paper-border text-xs font-mono font-medium text-ink hover:bg-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-yellow-accent" />
                <span>{lang === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-grey">
          <p>{data.rights}</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenModal('imprint')}
              className="hover:text-ink transition-colors"
            >
              {data.imprint}
            </button>
            <button
              onClick={() => onOpenModal('privacy')}
              className="hover:text-ink transition-colors"
            >
              {data.privacy}
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-paper-subtle hover:bg-white text-ink transition-colors border border-paper-border"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
