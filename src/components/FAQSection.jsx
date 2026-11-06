import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-36 bg-paper border-b border-paper-border">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey mb-8 font-medium">
          [ 09 / Clarity & Transparency ]
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title */}
          <div className="lg:col-span-5">
            <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink leading-tight">
              {data.titlePart1}{" "}
              <em className="font-serif-italic text-blue-hero not-italic block mt-1">
                {data.titleSerif}
              </em>
            </h2>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 divide-y divide-paper-border">
            {data.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-6 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="text-lg sm:text-xl font-bold text-ink group-hover:text-blue-hero transition-colors">
                      {item.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-paper-subtle flex items-center justify-center flex-shrink-0 text-ink group-hover:bg-blue-hero group-hover:text-white transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 text-base text-body leading-relaxed max-w-2xl animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
