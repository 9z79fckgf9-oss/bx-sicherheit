import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroPower21 from './components/HeroPower21';
import ClientsMarquee from './components/ClientsMarquee';
import Manifesto from './components/Manifesto';
import WhyTrustSection from './components/WhyTrustSection';
import PillarsSection from './components/PillarsSection';
import HowSection from './components/HowSection';
import OffersSection from './components/OffersSection';
import RetentionImpact from './components/RetentionImpact';
import StoriesSection from './components/StoriesSection';
import ToolsCertifications from './components/ToolsCertifications';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import LegalModals from './components/LegalModals';
import { content } from './data/translations';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  const t = content[lang];

  const handleOpenGeneralQuote = () => {
    setPreselectedService('');
    setIsQuoteOpen(true);
  };

  const handleSelectOffer = (offerTitle) => {
    setPreselectedService(offerTitle);
    setIsQuoteOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-yellow-accent/30 selection:text-ink">
      {/* 1. Header Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* 2. Hero Section (Power21 Style: Blue canvas, right-side masked video, monumental headline, 5-column stats) */}
      <HeroPower21
        t={t}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* 3. Clients / Regional Hubs Marquee on Paper */}
      <ClientsMarquee
        label={t.marqueeLabel}
        items={t.marqueeItems}
      />

      {/* 4. Manifesto Section (Faded-to-Solid Editorial Typography) */}
      <Manifesto data={t.manifesto} />

      {/* 5. Why Section (Deep Blue Section with Video & Rationale) */}
      <WhyTrustSection data={t.why} />

      {/* 6. Two Interlocking Pillars (Interactive Slot Switcher & 4 KPI Nodes) */}
      <PillarsSection data={t.pillars} />

      {/* 7. How Section (Human De-escalation & Psychological Foundation) */}
      <HowSection data={t.how} />

      {/* 8. What We Do / Offers Cards (01 Protect, 02 Secure, 03 Host) */}
      <OffersSection
        data={t.offers}
        onSelectOffer={handleSelectOffer}
      />

      {/* 9. Retention & Real Impact (90% Stat, Regional Infrastructure Hubs) */}
      <RetentionImpact
        data={t.retention}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* 10. Stories / Testimonial Section */}
      <StoriesSection data={t.stories} />

      {/* 11. Tools & Quality Certifications (§ 34a GewO, IHK, De-escalation) */}
      <ToolsCertifications data={t.tools} />

      {/* 12. FAQ Section (Minimalist Editorial Accordion) */}
      <FAQSection data={t.faq} />

      {/* 13. High-Impact CTA Banner */}
      <CTASection
        data={t.cta}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* 14. Footer with Mutterstadt Compliance */}
      <Footer
        data={t.footer}
        lang={lang}
        setLang={setLang}
        onOpenModal={(modal) => setActiveLegalModal(modal)}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* Global Interactive Proposal Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        t={t}
        preselectedService={preselectedService}
      />

      {/* Impressum & Privacy Modals */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* Discreet Floating Fast Contact Pill on bottom-right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/491741757400"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg shadow-emerald-600/20 transition-transform hover:scale-105"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <a
          href="tel:+491741757400"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-ink hover:bg-black text-white text-xs font-bold shadow-lg shadow-black/20 transition-transform hover:scale-105"
          title="Call Amir Bajra directly"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">+49 174 1757400</span>
        </a>
      </div>
    </div>
  );
}
