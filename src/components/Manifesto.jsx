import React from 'react';

export default function Manifesto({ data }) {
  return (
    <section id="approach" className="py-24 sm:py-36 bg-paper border-b border-paper-border">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        {/* Kicker Tag */}
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey mb-10 font-medium">
          [ 01 / Our Manifesto ]
        </p>

        {/* Monumental Manifesto Title */}
        <h2 className="font-extrabold text-[clamp(38px,6.2vw,98px)] leading-[0.98] tracking-[-0.045em] text-ink mb-16 sm:mb-24 max-w-5xl">
          <span className="text-ink/30 block">{data.line1}</span>
          <span className="text-ink/30 block">{data.line2}</span>
          <span className="text-ink block mt-1 sm:mt-2">
            <span className="font-serif-italic text-blue-hero font-normal">{data.line3Word}</span>{" "}
            {data.line3Rest}
            <span className="text-yellow-accent font-serif ml-1">.</span>
          </span>
        </h2>

        {/* Manifesto Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pt-8 border-t border-paper-border">
          <div className="md:col-span-5">
            <p className="text-sm font-mono uppercase tracking-widest text-grey">
              The BX Difference
            </p>
          </div>
          <div className="md:col-span-7">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-normal text-body leading-relaxed whitespace-pre-line font-sans">
              {data.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
