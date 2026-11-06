import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroPower21({ t, onOpenQuote }) {
  const videoRef = useRef(null);

  return (
    <header className="relative min-h-screen bg-blue-deep text-white flex flex-col justify-between">
      {/* 
        HERO STAGE:
        Contains the full video background, overlay, and main content.
        The video is strictly constrained here and ends flush at the top border of the stats bar.
      */}
      <div className="relative flex-1 flex flex-col justify-center pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        {/* Full-width Video Background behind hero content */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <video
            ref={videoRef}
            className="size-full object-cover object-[28%_center] lg:object-[30%_center] scale-100"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/hero.mp4"
          />

          {/* 
            Seamless Green Overlay:
            - Left side under text: ~50% opacity (allows the video to clearly shine through)
            - Direct text backing: ~58-62% deep green for crisp typography readability
            - Smooth gradient transition to ~15-20% on the right (no hard vertical edge)
          */}
          <div 
            className="absolute inset-0 pointer-events-none transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, rgba(var(--c-deep-rgb), 0.62) 0%, rgba(var(--c-hero-rgb), 0.50) 42%, rgba(var(--c-hero-rgb), 0.28) 72%, rgba(var(--c-hero-rgb), 0.15) 100%)'
            }}
          />

          {/* Subtle top vignette for navbar legibility */}
          <div 
            className="absolute inset-x-0 top-0 h-36 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(var(--c-deep-rgb), 0.55) 0%, transparent 100%)'
            }}
          />

          {/* Soft bottom blend into the solid stats bar */}
          <div 
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{
              background: 'linear-gradient(0deg, rgba(var(--c-deep-rgb), 0.6) 0%, transparent 100%)'
            }}
          />

          {/* Gentle ambient light glow */}
          <span
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              background: 'radial-gradient(100% 60% at 75% 15%, rgba(255,255,255,0.2), transparent 70%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Main Inner Content (Exact same typography, sizes, structure, and button) */}
        <div className="relative z-10 max-w-shell mx-auto px-6 sm:px-10 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Monumental Headline */}
            <h1 className="font-extrabold text-[clamp(44px,7.5vw,118px)] leading-[0.92] tracking-[-0.045em] mb-8 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              <span className="block">{t.hero.line1}</span>
              <span className="block mt-1 sm:mt-2">
                {t.hero.line2Part1}{" "}
                <span className="font-serif-italic serif-underline text-ink">
                  {t.hero.line2Serif}
                  <span className="text-yellow-accent font-serif ml-0.5">.</span>
                </span>
              </span>
            </h1>

            {/* Lead Paragraph & Primary Action Button */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-6 sm:mt-10">
              <p className="md:col-span-8 text-lg sm:text-xl text-white/95 leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
                {t.hero.lead}
              </p>
              <div className="md:col-span-4 flex md:justify-end">
                <a
                  href="#approach"
                  className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-ink text-white font-bold text-sm tracking-wide hover:bg-black transition-all shadow-xl hover:-translate-y-0.5"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        BOTTOM 5-COLUMN STATS BAR:
        Solid, opaque dark green background without any video behind it.
        Ends flush at its top border.
      */}
      <div className="relative z-10 w-full border-t border-white/15 bg-blue-deep">
        <div className="max-w-shell mx-auto px-6 sm:px-10 py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {t.hero.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-none">
                  {stat.value}
                </span>
                <span className="mt-2.5 font-mono text-[11px] uppercase tracking-wider text-white/70 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
