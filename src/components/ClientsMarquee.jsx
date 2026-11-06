import React from 'react';
import { ShieldCheck, Award, MapPin } from 'lucide-react';

export default function ClientsMarquee({ label, items }) {
  const marqueeItems = [...items, ...items];

  return (
    <section className="py-16 sm:py-20 bg-paper border-b border-paper-border overflow-hidden">
      <div className="max-w-shell mx-auto px-6 sm:px-10 mb-8 text-center">
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey font-medium">
          {label}
        </p>
      </div>

      <div className="relative w-full overflow-hidden select-none">
        {/* Soft fade masks on left and right */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-paper to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-paper to-transparent z-10" />

        <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-sm sm:text-base font-bold text-body hover:text-ink transition-colors whitespace-nowrap"
            >
              {idx % 3 === 0 && <ShieldCheck className="w-4 h-4 text-blue-hero" />}
              {idx % 3 === 1 && <MapPin className="w-4 h-4 text-yellow-accent" />}
              {idx % 3 === 2 && <Award className="w-4 h-4 text-ink" />}
              <span className="tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
