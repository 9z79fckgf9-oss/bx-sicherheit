import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';

export default function RegionalCoverage({ data }) {
  const [selectedCity, setSelectedCity] = useState(0);

  return (
    <section id="coverage" className="relative w-full py-28 md:py-36 bg-bg-subtle overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5 text-brand-primary" />
            <span>{data.eyebrow}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-[1.05] mb-4">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
            {data.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-white/10 text-xs font-mono text-brand-primary">
            <Navigation className="w-4 h-4 text-brand-primary" />
            <span>{data.hq}</span>
          </div>
        </div>

        {/* Cities Grid with Rapid Response Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.cities.map((city, idx) => {
            const isSelected = selectedCity === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedCity(idx)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-200 text-left ${
                  isSelected
                    ? 'bg-surface-elevated border-brand-primary shadow-lg shadow-brand-primary/10'
                    : 'bg-surface border-white/5 hover:border-white/15 hover:bg-surface-hover'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-sage" />
                    <span className="font-display font-bold text-base text-white">{city.name}</span>
                  </div>
                  <Clock className="w-3.5 h-3.5 text-text-muted" />
                </div>
                <p className="text-xs text-text-muted leading-relaxed">{city.hub}</p>
                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-text-secondary">
                  <span>Local Presence</span>
                  <span className="text-brand-primary font-semibold">Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highway & Infrastructure Advantage Note */}
        <div className="mt-8 p-6 rounded-2xl bg-surface border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-primary/10 text-brand-primary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Strategic Mutterstadt Node
              </h4>
              <p className="text-xs text-text-muted">
                Immediate access to A61, A65, and A650 allows reliable shift rotation and rapid local dispatch.
              </p>
            </div>
          </div>
          <a
            href="tel:+491741757400"
            className="flex-shrink-0 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white uppercase tracking-wider transition-colors"
          >
            Direct Dispatch: +49 174 1757400
          </a>
        </div>
      </div>
    </section>
  );
}
