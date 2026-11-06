import React from 'react';

export default function StoriesSection({ data }) {
  return (
    <section className="py-24 sm:py-36 bg-blue-deep text-white">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/50 mb-8 font-medium">
          [ 07 / Client Experience ]
        </p>

        <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-14">
          {data.titlePart1}{" "}
          <em className="font-serif-italic text-yellow-accent not-italic block mt-1">
            {data.titleSerif}
          </em>
        </h2>

        <div className="p-8 sm:p-14 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm max-w-4xl relative overflow-hidden">
          <div className="text-white/10 text-8xl font-serif absolute -top-8 -left-2 select-none pointer-events-none">
            “
          </div>
          <blockquote className="relative z-10 text-xl sm:text-2xl lg:text-3xl text-white font-normal leading-relaxed italic mb-8">
            {data.quote}
          </blockquote>
          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-yellow-accent text-ink font-bold text-sm flex items-center justify-center">
              BX
            </div>
            <div>
              <p className="text-sm font-bold text-white">{data.author}</p>
              <p className="text-xs text-white/60 font-mono">Metropolregion Rhein-Neckar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
