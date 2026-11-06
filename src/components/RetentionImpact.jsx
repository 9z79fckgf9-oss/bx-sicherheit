import React from 'react';
import { MapPin, Navigation, ShieldCheck, Clock } from 'lucide-react';

export default function RetentionImpact({ data, onOpenQuote }) {
  const regionalHubs = [
    { name: "Mannheim", hub: "Port & Industrial Logistics" },
    { name: "Ludwigshafen", hub: "Chemical & Commercial Campuses" },
    { name: "Heidelberg", hub: "Research & Technology Parks" },
    { name: "Karlsruhe", hub: "Trade Fairs & Corporate Sites" },
    { name: "Speyer", hub: "Tourism, Events & Retail" },
    { name: "Worms", hub: "Freight Centers & Cultural Venues" },
  ];

  return (
    <section className="py-24 sm:py-36 bg-paper border-b border-paper-border">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey mb-8 font-medium">
          [ 06 / Real Impact & Coverage ]
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Stat */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-[-0.035em] text-ink">
              {data.titlePart1}{" "}
              <em className="font-serif-italic text-blue-hero not-italic block mt-1">
                {data.titleSerif}
              </em>
            </h2>

            <div className="flex items-baseline gap-4 py-4 border-y border-paper-border">
              <span className="font-extrabold text-6xl sm:text-7xl tracking-tight text-ink">
                {data.num}
              </span>
              <span className="text-sm font-mono uppercase tracking-wider text-body max-w-xs leading-snug">
                {data.note}
              </span>
            </div>

            <p className="text-base sm:text-lg text-body leading-relaxed">
              {data.body}
            </p>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
            >
              <span>Request a Proposal</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Regional Infrastructure Hubs Card */}
          <div className="lg:col-span-6 bg-paper-subtle p-8 sm:p-10 rounded-3xl border border-paper-border space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-paper-border">
              <div className="flex items-center gap-2 text-ink font-bold text-sm font-mono uppercase">
                <Navigation className="w-4 h-4 text-blue-hero animate-pulse" />
                <span>Mutterstadt Headquarters</span>
              </div>
              <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                A61 / A65 / A650
              </span>
            </div>

            <p className="text-xs text-grey">
              Rapid on-site dispatch and seamless shift rotation across Rhineland-Palatinate and Baden-Württemberg:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {regionalHubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-paper-pure border border-paper-border flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-ink">{hub.name}</span>
                    <Clock className="w-3.5 h-3.5 text-grey" />
                  </div>
                  <span className="text-[11px] text-body-muted mt-1">{hub.hub}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-paper-pure border border-paper-border flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-hero flex-shrink-0" />
              <p className="text-xs text-body leading-snug">
                <strong>Certified Standard:</strong> All deployments supervised by Industrie- und Handelskammer (IHK) Pfalz & Gewerbeamt Mutterstadt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
