import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTASection({ data, onOpenQuote }) {
  return (
    <section id="contact" className="py-24 sm:py-36 bg-paper-subtle border-b border-paper-border">
      <div className="max-w-shell mx-auto px-6 sm:px-10 text-center">
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey mb-8 font-medium">
          [ 10 / Next Step ]
        </p>

        <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] text-ink max-w-4xl mx-auto leading-tight mb-8">
          {data.titlePart1}{" "}
          <em className="font-serif-italic text-blue-hero not-italic block sm:inline">
            {data.titleSerif}
          </em>
        </h2>

        <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto leading-relaxed mb-12">
          {data.lead}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-ink text-white font-bold text-sm tracking-wide hover:bg-black transition-all shadow-xl hover:-translate-y-0.5"
          >
            <span>{data.btn}</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </button>

          <a
            href="tel:+491741757400"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-paper-pure border border-paper-border text-ink font-bold text-sm hover:bg-white transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-emerald-500" />
            <span>+49 174 1757400</span>
          </a>
        </div>

        <div className="mt-14 pt-8 border-t border-paper-border flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-grey">
          <span>Headquarters: Mutterstadt, Germany</span>
          <span>•</span>
          <span>Certified § 34a GewO</span>
          <span>•</span>
          <a href="mailto:info@bx-sicherheit.de" className="hover:text-ink transition-colors flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            info@bx-sicherheit.de
          </a>
        </div>
      </div>
    </section>
  );
}
