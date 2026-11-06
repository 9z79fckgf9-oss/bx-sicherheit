import React from 'react';
import { ShieldCheck, Award, HeartHandshake, MapPin } from 'lucide-react';

export default function TrustTicker({ tickerItems }) {
  // Double array for continuous seamless infinite loop
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full overflow-hidden py-5 bg-surface border-y border-white/5 select-none">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />

      <div className="flex w-max animate-marquee items-center gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs font-semibold uppercase tracking-wider text-text-secondary whitespace-nowrap"
          >
            {index % 4 === 0 && <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />}
            {index % 4 === 1 && <HeartHandshake className="w-3.5 h-3.5 text-brand-gold" />}
            {index % 4 === 2 && <MapPin className="w-3.5 h-3.5 text-emerald-400" />}
            {index % 4 === 3 && <Award className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
