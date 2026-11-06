import React, { useState } from 'react';
import {
  ShieldCheck,
  Users,
  Boxes,
  DoorOpen,
  HeartHandshake,
  Compass,
  Sparkles,
  ArrowUpRight,
  Check,
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Users,
  Boxes,
  DoorOpen,
  HeartHandshake,
  Compass,
  Sparkles,
};

export default function ServicesGrid({ data, onOpenQuoteWithService }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="services" className="relative w-full py-28 md:py-36 bg-bg-subtle overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
            <span>{data.eyebrow}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-[1.05] mb-4">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((service, idx) => {
            const Icon = iconMap[service.icon] || ShieldCheck;
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-surface border border-white/5 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-card-elevated"
              >
                {/* Glow accent on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-brand-primary/[0.04] to-transparent" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-surface-card border border-white/10 text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-bg transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                      {service.origName}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-white tracking-tight mb-3 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  {/* Highlight bullets */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-text-muted">
                        <Check className="w-3.5 h-3.5 text-brand-sage flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-brand-primary transition-colors group/btn"
                  >
                    <span>Inquire Solution</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                  <span className="text-xs text-text-muted font-mono">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
