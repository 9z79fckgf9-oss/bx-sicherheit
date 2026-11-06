import React from 'react';
import { Users, HeartHandshake, Smile, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function WhyTogetherStats({ data, onOpenQuote }) {
  return (
    <section id="stats" className="relative w-full py-28 md:py-36 bg-bg-subtle overflow-hidden border-b border-white/5">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 z-0 w-[800px] h-[500px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200, 155, 83, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{data.eyebrow}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.05] mb-6">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Monumental Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10 bg-surface/40 p-8 sm:p-12 rounded-3xl border border-white/5 backdrop-blur-md mb-20 shadow-2xl">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 lg:px-6">
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2">
                <span className="text-gradient-accent">{stat.value}</span>
              </span>
              <span className="font-display text-base font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                {idx === 0 && <Smile className="w-4 h-4 text-brand-gold" />}
                {idx === 1 && <Sparkles className="w-4 h-4 text-brand-sage" />}
                {idx === 2 && <Users className="w-4 h-4 text-brand-primary" />}
                {idx === 3 && <HeartHandshake className="w-4 h-4 text-brand-teal" />}
                {stat.label}
              </span>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xs">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative Connection Card: The Human B2B Partnership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-surface to-surface-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-card-elevated">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-text-secondary">
              <Shield className="w-3.5 h-3.5 text-brand-primary" />
              The B2B Collaboration Advantage
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Why German Enterprises Thrive When Security Acts As a Partner
            </h3>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              When commercial property managers and logistics operations treat security not as an external enforcer, but as the welcoming front line of their company culture, incidents drop dramatically. Employees greet our officers with smiles, visitors feel treated with dignity, and genuine safety is established naturally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/20 border border-white/5">
                <div className="p-2 rounded-lg bg-brand-sage/10 text-brand-sage">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Unified Team Spirit</h4>
                  <p className="text-xs text-text-muted mt-1">Our team integrates smoothly into your staff routines and daily briefings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/20 border border-white/5">
                <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                  <Smile className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Welcoming Atmosphere</h4>
                  <p className="text-xs text-text-muted mt-1">A friendly first impression that reassures tenants and impresses clients.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Block */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="text-brand-primary/15 text-6xl font-serif absolute -top-4 -right-2 select-none">“</div>
            <blockquote className="relative z-10 text-base sm:text-lg text-white font-medium italic leading-relaxed mb-6">
              {data.quote}
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center font-bold text-sm text-brand-primary">
                AB
              </div>
              <div>
                <p className="text-sm font-bold text-white">{data.quoteAuthor}</p>
                <p className="text-xs text-text-muted">BX Sicherheit & Service · Mutterstadt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
