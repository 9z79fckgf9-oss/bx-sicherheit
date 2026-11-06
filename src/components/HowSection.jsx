import React from 'react';

export default function HowSection({ data }) {
  return (
    <section className="py-24 sm:py-36 bg-paper border-b border-paper-border">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey mb-8 font-medium">
          [ 04 / Methodology & Psychology ]
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title */}
          <div className="lg:col-span-5">
            <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-[-0.035em] text-ink">
              {data.titlePart1}{" "}
              <em className="font-serif-italic text-blue-hero not-italic block mt-1">
                {data.titleSerif}
              </em>
            </h2>
          </div>

          {/* Right 3-Step Narrative Columns */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-body leading-relaxed font-normal">
            <p className="border-l-2 border-blue-hero pl-6">
              {data.p1}
            </p>
            <p className="border-l-2 border-yellow-accent pl-6">
              {data.p2}
            </p>
            <p className="border-l-2 border-paper-border pl-6">
              {data.p3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
