import React, { useState } from 'react';
import { Target, Users, Sparkles, Smile } from 'lucide-react';

export default function PillarsSection({ data }) {
  const [activeSlot, setActiveSlot] = useState(0);

  const kpis = data.kpis || [];

  return (
    <section id="pillars" className="py-24 sm:py-36 bg-paper border-b border-paper-border overflow-hidden">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey mb-8 font-medium">
          [ 03 / Two Interlocking Pillars ]
        </p>

        {/* Slot Switcher Tabs */}
        <div className="flex items-center gap-3 mb-12 border-b border-paper-border pb-4">
          <button
            onClick={() => setActiveSlot(0)}
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
              activeSlot === 0
                ? 'bg-ink text-white font-bold shadow-md'
                : 'text-grey hover:text-ink bg-paper-subtle'
            }`}
          >
            01 / Results Oriented
          </button>
          <button
            onClick={() => setActiveSlot(1)}
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
              activeSlot === 1
                ? 'bg-ink text-white font-bold shadow-md'
                : 'text-grey hover:text-ink bg-paper-subtle'
            }`}
          >
            02 / Relationship Focused
          </button>
        </div>

        {/* Main Pillar Headline & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7">
            {activeSlot === 0 ? (
              <div className="animate-in fade-in duration-300">
                <p className="text-sm uppercase font-mono tracking-widest text-blue-hero mb-2 font-semibold">
                  We are
                </p>
                <h2 className="font-extrabold text-4xl sm:text-6xl tracking-tight text-ink uppercase leading-none mb-6">
                  {data.p1Key} <span className="font-serif-italic font-normal lowercase text-grey">{data.p1Small}</span>
                </h2>
                <p className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl">
                  {data.p1Body}
                </p>
              </div>
            ) : (
              <div className="animate-in fade-in duration-300">
                <p className="text-sm uppercase font-mono tracking-widest text-yellow-accent mb-2 font-semibold">
                  We are
                </p>
                <h2 className="font-extrabold text-4xl sm:text-6xl tracking-tight text-ink uppercase leading-none mb-6">
                  {data.p2Key} <span className="font-serif-italic font-normal lowercase text-grey">{data.p2Small}</span>
                </h2>
                <p className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl">
                  {data.p2Body}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-paper-subtle p-8 rounded-3xl border border-paper-border">
            <h3 className="font-bold text-xs font-mono uppercase tracking-widest text-grey mb-4">
              The Guiding Philosophy
            </h3>
            <p className="text-base text-body leading-relaxed font-sans">
              “Lasting results don't happen despite relationships; they happen because of them. Teams, tenants, and truckers who trust each other decide faster, cooperate better, and maintain higher levels of calm.”
            </p>
            <div className="mt-6 pt-4 border-t border-paper-border flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-hero/10 text-blue-hero font-bold text-xs flex items-center justify-center">
                BX
              </div>
              <div>
                <p className="text-xs font-bold text-ink">Amir Bajra</p>
                <p className="text-[11px] text-grey font-mono">Founder & Managing Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive KPI Nodes (Matches power21.io constellation nodes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-paper-pure border border-paper-border hover-lift shadow-sm flex flex-col justify-between min-h-[170px]"
            >
              <div className="flex items-center justify-between text-xs font-mono text-grey">
                <span>0{idx + 1} / 04</span>
                {idx === 0 && <Smile className="w-4 h-4 text-yellow-accent" />}
                {idx === 1 && <Sparkles className="w-4 h-4 text-blue-hero" />}
                {idx === 2 && <Users className="w-4 h-4 text-emerald-500" />}
                {idx === 3 && <Target className="w-4 h-4 text-ink" />}
              </div>

              <div className="my-3">
                <span className="font-extrabold text-4xl sm:text-5xl tracking-tight text-ink">
                  {kpi.prefix}{kpi.num}{kpi.suffix}
                </span>
              </div>

              <p className="text-xs font-medium text-body leading-snug">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
