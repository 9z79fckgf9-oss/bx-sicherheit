import React from 'react';
import { Smile, XCircle, CheckCircle, Heart, Shield, Sparkles } from 'lucide-react';

export default function CulturePhilosophy({ data, onOpenQuote }) {
  return (
    <section id="philosophy" className="relative w-full py-28 md:py-36 bg-bg overflow-hidden border-b border-white/5">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(200, 155, 83, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 text-brand-primary" />
            <span>{data.eyebrow}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-[1.05] mb-6">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {data.lead}
          </p>
        </div>

        {/* 3 Human Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-surface border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">
              Friendly & Approachable
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              We greet guests, warehouse truckers, and building tenants with genuine friendliness. People shouldn't feel guarded around security—they should feel welcomed and respected.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-sage/10 text-brand-sage flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">
              Serious & Reliable Protection
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Friendliness never sacrifices precision. Every guard is § 34a GewO certified, trained in tactical de-escalation, emergency response, and statutory fire protection.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">
              Always Open For Everyone
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Whether someone lost their way, misplaced a badge, feels unwell, or notices something suspicious: our staff can always be approached without hesitation or fear.
            </p>
          </div>
        </div>

        {/* Side-by-Side Comparison: The Cliché vs. The BX Standard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="p-8 sm:p-10 rounded-3xl bg-surface/30 border border-white/5 opacity-80">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <div className="p-2 rounded-xl bg-white/5 text-text-muted">
                <XCircle className="w-5 h-5 text-text-muted" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-text-secondary uppercase">
                  {data.oldWay.title}
                </h4>
                <p className="text-xs text-text-muted">The outdated model that creates tension</p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {data.oldWay.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                  <span className="text-text-muted font-bold mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BX Standard - Warm Champagne Gold */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-surface to-surface-card border border-brand-primary/30 shadow-card-elevated relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2 rounded-xl bg-brand-primary text-bg shadow-md shadow-brand-primary/20 font-black">
                <CheckCircle className="w-5 h-5 text-bg" />
              </div>
              <div>
                <h4 className="font-display font-black text-lg text-white uppercase">
                  {data.bxWay.title}
                </h4>
                <p className="text-xs text-brand-primary font-medium">Authentic, serious & welcoming hospitality</p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {data.bxWay.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-primary">
                  <span className="text-brand-primary font-bold mt-0.5">✓</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <p className="text-xs text-text-muted">Experience the difference on your premises.</p>
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-bg text-xs font-black uppercase tracking-wider transition-colors shadow-md shadow-brand-primary/20"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
