import React, { useState, useEffect } from 'react';
import { Palette, Check, X, Sparkles } from 'lucide-react';

export const PALETTES = [
  {
    id: 'slate-petrol',
    name: 'Slate Petrol',
    labelDE: 'Kiesel-Petrol',
    subtitleDE: 'Empfehlung #1 • Maximale Balance aus Vertrauen & Wärme',
    heroHex: '#1C3D3D',
    heroRgb: '28 61 61',
    deepRgb: '16 36 36',
    darkRgb: '12 28 28',
    nightRgb: '8 20 20',
    description: 'Verbindet die Stabilität von Blau mit der Gelassenheit von Grün. Wirkt extrem seriös (B2B), aber nahbar und menschlich.',
    badge: 'Top Empfehlung'
  },
  {
    id: 'midnight-navy',
    name: 'Midnight Heritage Navy',
    labelDE: 'Nobles Nachtblau',
    subtitleDE: 'Der Weltstandard für Sicherheit, Schutz & Verlässlichkeit',
    heroHex: '#1B2A4A',
    heroRgb: '27 42 74',
    deepRgb: '15 24 41',
    darkRgb: '10 16 28',
    nightRgb: '7 11 19',
    description: 'Souverän und behütend. Kein kaltes Behörden-Blau, sondern warmes Nachtblau, das zusammen mit dem Video Geborgenheit vermittelt.',
    badge: 'Klassiker'
  },
  {
    id: 'forest-sage',
    name: 'Deep Forest Sage',
    labelDE: 'Edles Waldmoos & Salbei',
    subtitleDE: 'Psychologisch deeskalierend, beruhigend & geerdet',
    heroHex: '#283B32',
    heroRgb: '40 59 50',
    deepRgb: '21 33 27',
    darkRgb: '15 24 20',
    nightRgb: '10 16 13',
    description: 'Gedämpft und reif. Signalisiert absolute Ruhe und Gelassenheit – perfekt gegen das aggressive Security-Stereotyp.',
    badge: 'Deeskalierend'
  },
  {
    id: 'hospitality-charcoal',
    name: 'Warm Hospitality Charcoal',
    labelDE: 'Edles Warm-Anthrazit',
    subtitleDE: 'Concierge-Gefühl wie in der 5-Sterne-Hotellerie',
    heroHex: '#262320',
    heroRgb: '38 35 32',
    deepRgb: '22 20 19',
    darkRgb: '16 14 13',
    nightRgb: '10 9 8',
    description: 'Erdig, nobel und diskret. Verwandelt Security von "Wachpersonal" zu zuvorkommenden "Gastgebern mit Schutzfunktion".',
    badge: 'Hospitality'
  },
  {
    id: 'sea-green',
    name: 'Sea Green #2E8B57',
    labelDE: 'Bisheriges Sea Green',
    subtitleDE: 'Bisheriger Farbton zum direkten Vergleich',
    heroHex: '#2E8B57',
    heroRgb: '46 139 87',
    deepRgb: '26 67 47',
    darkRgb: '20 52 36',
    nightRgb: '14 35 25',
    description: 'Frisch, aber im Vergleich etwas zu hell/organisch für schwere B2B-Sicherheitsverträge.',
    badge: 'Vergleich'
  }
];

export default function ThemeSwitcher({ currentPalette, onSelectPalette }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside 
      aria-label="Farbwelten Live-Test" 
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end"
    >
      {/* Floating Pill Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-ink text-paper rounded-full shadow-2xl border border-white/20 hover:scale-105 active:scale-95 transition-all text-xs font-semibold tracking-wide"
        >
          <Palette className="w-4 h-4 text-yellow-accent" />
          <span>Farbwelten live testen</span>
          <span
            className="w-3.5 h-3.5 rounded-full border border-white/30"
            style={{ backgroundColor: currentPalette.heroHex }}
          />
        </button>
      )}

      {/* Expanded Modal Box */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] bg-paper-pure/95 backdrop-blur-md text-ink rounded-3xl shadow-2xl border border-paper-border p-5 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-start justify-between pb-3 border-b border-paper-border mb-3">
            <div>
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-yellow-accent" />
                <h3 className="text-sm font-bold tracking-tight text-ink">
                  Farbwelten Live-Vergleich
                </h3>
              </div>
              <p className="text-[11px] text-body-soft mt-0.5">
                Klicke auf einen Farbton, um die gesamte Website sofort umzustellen.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-paper-subtle flex items-center justify-center text-body-soft hover:text-ink hover:bg-paper-border transition-colors"
              aria-label="Schließen"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Palette List */}
          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {PALETTES.map((p) => {
              const isSelected = p.id === currentPalette.id;
              return (
                <button
                  key={p.id}
                  onClick={() => onSelectPalette(p)}
                  className={`w-full text-left p-2.5 rounded-2xl transition-all border flex items-start gap-3 ${
                    isSelected
                      ? 'border-ink bg-paper-subtle/80 shadow-sm'
                      : 'border-paper-border bg-paper-pure hover:border-body-muted hover:bg-paper-subtle/40'
                  }`}
                >
                  {/* Swatch circle */}
                  <div
                    className="w-8 h-8 rounded-xl flex-shrink-0 mt-0.5 shadow-sm border border-black/10 flex items-center justify-center"
                    style={{ backgroundColor: p.heroHex }}
                  >
                    {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-ink truncate">
                        {p.labelDE}
                      </span>
                      {p.badge && (
                        <span
                          className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0 ${
                            p.badge === 'Top Empfehlung'
                              ? 'bg-yellow-accent/20 text-yellow-accent border border-yellow-accent/30'
                              : 'bg-paper-subtle text-body-soft border border-paper-border'
                          }`}
                        >
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-body font-medium mt-0.5 leading-snug">
                      {p.subtitleDE}
                    </p>
                    <p className="text-[10px] text-body-muted mt-1 leading-tight line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-paper-border flex items-center justify-between text-[11px] text-body-soft">
            <span>Aktiver Ton: <strong className="text-ink">{currentPalette.labelDE}</strong></span>
            <span className="font-mono text-[10px] text-body-muted">{currentPalette.heroHex}</span>
          </div>
        </div>
      )}
    </aside>
  );
}
