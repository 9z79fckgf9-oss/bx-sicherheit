import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function OffersSection({ data, onSelectOffer }) {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section id="solutions" className="py-24 sm:py-36 bg-paper border-b border-paper-border">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey mb-6 font-medium">
          [ 05 / Solutions For Industry Leaders ]
        </p>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-extrabold text-4xl sm:text-6xl tracking-tight text-ink uppercase mb-6">
            {data.title}
          </h2>
          <p className="text-lg sm:text-xl text-body leading-relaxed font-normal">
            {data.intro}
          </p>
        </div>

        {/* 3 Offer Cards (Matches power21 offers__wheel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((offer, idx) => {
            const isActive = activeCard === idx;
            return (
              <article
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                className={`relative rounded-3xl overflow-hidden min-h-[460px] p-8 flex flex-col justify-between transition-all duration-300 ${
                  isActive
                    ? 'ring-2 ring-ink shadow-2xl scale-[1.02]'
                    : 'border border-paper-border hover:border-grey shadow-md'
                }`}
              >
                {/* Background Image */}
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="absolute inset-0 size-full object-cover -z-10 brightness-[0.4] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent -z-10" />

                {/* Top Number Tag */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold">
                    {offer.num}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                    B2B Germany
                  </span>
                </div>

                {/* Content Area */}
                <div className="space-y-4 pt-16">
                  <div>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                      {offer.title}
                    </h3>
                    <p className="text-xs uppercase font-mono tracking-wider text-yellow-accent mt-1">
                      {offer.role}
                    </p>
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {offer.text}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onSelectOffer(offer.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-ink font-bold text-xs uppercase tracking-wider hover:bg-yellow-accent transition-colors"
                    >
                      <span>{offer.btn}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
