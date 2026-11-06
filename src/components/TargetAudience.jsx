import React, { useState } from 'react';
import { Building2, Warehouse, PartyPopper, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TargetAudience({ data, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Building2, Warehouse, PartyPopper];

  return (
    <section id="audiences" className="relative w-full py-28 md:py-36 bg-bg overflow-hidden border-b border-white/5">
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

        {/* Tab Selection Row */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-white/10">
          {data.tabs.map((tab, idx) => {
            const Icon = icons[idx] || Building2;
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-primary text-bg shadow-md shadow-brand-primary/20 font-black'
                    : 'bg-surface text-text-secondary hover:text-white hover:bg-surface-hover border border-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-bg' : 'text-text-muted'}`} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        {data.tabs[activeTab] && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-card-elevated animate-in fade-in duration-300">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wider uppercase">
                {data.tabs[activeTab].tag}
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {data.tabs[activeTab].title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-text-muted mt-1 font-semibold">
                  {data.tabs[activeTab].role}
                </p>
              </div>

              <p className="text-text-secondary text-base leading-relaxed font-medium">
                {data.tabs[activeTab].lead}
              </p>

              {/* Specific Bullet Points */}
              <div className="space-y-3 pt-2">
                {data.tabs[activeTab].points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-sage/10 border border-brand-sage/30 flex items-center justify-center text-brand-sage">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-text-secondary leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-bg text-xs font-black uppercase tracking-wider shadow-md shadow-brand-primary/20 transition-all duration-200"
                >
                  <span>Request Custom Consultation</span>
                  <ArrowRight className="w-4 h-4 text-bg" />
                </button>
                <a
                  href="tel:+491741757400"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface hover:bg-surface-hover border border-white/10 text-xs font-semibold text-text-secondary hover:text-white transition-colors"
                >
                  Direct Contact: +49 174 1757400
                </a>
              </div>
            </div>

            {/* Visual Callout Graphic on Right */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 p-6 space-y-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative group">
                  <img
                    src={
                      activeTab === 0
                        ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                        : activeTab === 1
                        ? "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                        : "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={data.tabs[activeTab].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-primary" />
                      BX Care & Security
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px]">
                      Rhine-Neckar Region
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface/80 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-text-muted font-bold">Standard</p>
                    <p className="text-xs font-semibold text-white">§ 34a GewO Certified</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] uppercase tracking-wider text-text-muted font-bold">Presence</p>
                    <p className="text-xs font-semibold text-brand-sage">Attentive & Friendly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
