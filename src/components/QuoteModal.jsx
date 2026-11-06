import React from 'react';
import { X } from 'lucide-react';
import ContactQuote from './ContactQuote';

export default function QuoteModal({ isOpen, onClose, t, preselectedService }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>
        <ContactQuote
          data={t.contact}
          faqData={null}
          preselectedService={preselectedService}
          onCloseModal={onClose}
          isModal={true}
        />
      </div>
    </div>
  );
}
