import React from 'react';
import { ShieldCheck, MessageCircle, HeartPulse, Globe } from 'lucide-react';

export default function ToolsCertifications({ data }) {
  const icons = [ShieldCheck, MessageCircle, HeartPulse, Globe];

  return (
    <section className="py-24 sm:py-36 bg-paper border-b border-paper-border">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey mb-8 font-medium">
          [ 08 / Quality & Compliance ]
        </p>

        <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink mb-16">
          {data.titlePart1}{" "}
          <em className="font-serif-italic text-blue-hero not-italic block mt-1">
            {data.titleSerif}
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((tool, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-paper-pure border border-paper-border hover-lift shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-paper-subtle flex items-center justify-center text-blue-hero mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-ink mb-3 tracking-tight">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-paper-border flex items-center justify-between text-xs font-mono text-grey">
                  <span>Standard 0{idx + 1}</span>
                  <span className="text-emerald-600 font-semibold">Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
