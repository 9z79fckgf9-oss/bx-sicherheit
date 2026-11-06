import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-paper-pure border border-paper-border rounded-3xl p-6 sm:p-10 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-paper-subtle hover:bg-paper-border text-grey hover:text-ink transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {activeModal === 'imprint' && (
          <div className="space-y-6 text-sm text-body">
            <div className="flex items-center gap-3 pb-4 border-b border-paper-border">
              <ShieldCheck className="w-6 h-6 text-blue-hero" />
              <h2 className="font-extrabold text-2xl text-ink uppercase tracking-tight">
                Impressum (Legal Notice)
              </h2>
            </div>

            <div>
              <h3 className="font-bold text-ink uppercase text-xs font-mono tracking-wider mb-1">
                Angaben gemäß § 5 TMG
              </h3>
              <p className="font-semibold text-ink">BX Sicherheit & Service</p>
              <p>Inhaber: Amir Bajra</p>
              <p>Johann-Sebastian-Bach-Str. 3</p>
              <p>67112 Mutterstadt, Germany</p>
            </div>

            <div>
              <h3 className="font-bold text-ink uppercase text-xs font-mono tracking-wider mb-1">
                Kontakt
              </h3>
              <p>Telefon: <a href="tel:+491741757400" className="text-blue-hero hover:underline font-semibold">+49 174 1757400</a></p>
              <p>E-Mail: <a href="mailto:info@bx-sicherheit.de" className="text-blue-hero hover:underline font-semibold">info@bx-sicherheit.de</a></p>
              <p>Website: <a href="https://bx-sicherheit.de" target="_blank" rel="noopener noreferrer" className="text-blue-hero hover:underline">https://bx-sicherheit.de</a></p>
            </div>

            <div>
              <h3 className="font-bold text-ink uppercase text-xs font-mono tracking-wider mb-1">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h3>
              <p>Berufsbezeichnung: Sicherheitsdienstleister (Bewachungsgewerbe)</p>
              <p>Berufsrechtliche Regelung: § 34a Gewerbeordnung (GewO)</p>
              <p>Erlaubnisbehörde: Gewerbeamt Mutterstadt</p>
              <p>Aufsichtsbehörde: Industrie- und Handelskammer (IHK) Pfalz</p>
            </div>

            <div>
              <h3 className="font-bold text-ink uppercase text-xs font-mono tracking-wider mb-1">
                Streitschlichtung
              </h3>
              <p className="text-xs text-grey leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-hero underline">https://ec.europa.eu/consumers/odr/</a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        )}

        {activeModal === 'privacy' && (
          <div className="space-y-6 text-sm text-body">
            <div className="flex items-center gap-3 pb-4 border-b border-paper-border">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h2 className="font-extrabold text-2xl text-ink uppercase tracking-tight">
                Datenschutzerklärung (Privacy Policy)
              </h2>
            </div>

            <div>
              <h3 className="font-bold text-ink uppercase text-xs font-mono tracking-wider mb-1">
                1. Datenschutz auf einen Blick
              </h3>
              <p className="text-xs leading-relaxed text-grey">
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung. Wenn Sie diese Website nutzen, werden verschiedene personenbezogene Daten erhoben.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-ink uppercase text-xs font-mono tracking-wider mb-1">
                2. Verantwortliche Stelle
              </h3>
              <p className="text-ink font-semibold">BX Sicherheit & Service</p>
              <p>Amir Bajra</p>
              <p>Johann-Sebastian-Bach-Str. 3, 67112 Mutterstadt</p>
              <p>E-Mail: info@bx-sicherheit.de</p>
            </div>

            <div>
              <h3 className="font-bold text-ink uppercase text-xs font-mono tracking-wider mb-1">
                3. Kontaktaufnahme & Anfragen
              </h3>
              <p className="text-xs leading-relaxed text-grey">
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
