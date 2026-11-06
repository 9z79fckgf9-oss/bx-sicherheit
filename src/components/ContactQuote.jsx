import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Shield,
  ArrowRight,
} from 'lucide-react';

export default function ContactQuote({ data, preselectedService, onCloseModal, isModal = false }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: preselectedService || "Commercial Property Care",
    location: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const servicesList = [
    "Commercial Property Care & Concierge",
    "Warehouse & Logistics Gatehouse Operations",
    "Event Safety, Crowd Hospitality & Assembly (Aufbau)",
    "Personal Escort & Dignified Care",
    "Security Risk Consulting & Blueprint Planning",
  ];

  return (
    <div className="bg-paper-pure p-6 sm:p-10 rounded-3xl border border-paper-border shadow-2xl">
      {submitted ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-extrabold text-2xl text-ink tracking-tight">
            Thank You for Reaching Out
          </h3>
          <p className="text-body text-sm max-w-md mx-auto leading-relaxed">
            We received your inquiry. Amir Bajra and our team will get back to you personally within 24 hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+491741757400"
              className="px-6 py-3 rounded-full bg-ink text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:bg-black transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Amir Bajra Directly (+49 174 1757400)
            </a>
            {isModal && (
              <button
                onClick={onCloseModal}
                className="px-6 py-3 rounded-full bg-paper-subtle border border-paper-border text-xs font-mono font-medium text-ink hover:bg-paper transition-colors"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-paper-border">
            <div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
                Start a Discovery Conversation
              </h3>
              <p className="text-xs text-grey font-mono mt-0.5">
                Mutterstadt & Rhine-Neckar · No obligation
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              § 34a Certified
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-grey mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Thomas Weber"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-paper-subtle border border-paper-border text-ink placeholder-grey text-sm focus:outline-none focus:border-blue-hero focus:bg-paper-pure transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-grey mb-1">
                Company / Organization *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rhine-Neckar Logistics GmbH"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-paper-subtle border border-paper-border text-ink placeholder-grey text-sm focus:outline-none focus:border-blue-hero focus:bg-paper-pure transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-grey mb-1">
                Business Email *
              </label>
              <input
                type="email"
                required
                placeholder="t.weber@company.de"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-paper-subtle border border-paper-border text-ink placeholder-grey text-sm focus:outline-none focus:border-blue-hero focus:bg-paper-pure transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-grey mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+49 170 1234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-paper-subtle border border-paper-border text-ink placeholder-grey text-sm focus:outline-none focus:border-blue-hero focus:bg-paper-pure transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-grey mb-1">
                Primary Requirement
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-paper-subtle border border-paper-border text-ink text-sm focus:outline-none focus:border-blue-hero focus:bg-paper-pure transition-colors"
              >
                {servicesList.map((svc, i) => (
                  <option key={i} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-grey mb-1">
                Location / City
              </label>
              <input
                type="text"
                placeholder="e.g. Mannheim, Ludwigshafen, Speyer"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-paper-subtle border border-paper-border text-ink placeholder-grey text-sm focus:outline-none focus:border-blue-hero focus:bg-paper-pure transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-grey mb-1">
              Project Details & Objectives
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your property, event, or facility requirements..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-paper-subtle border border-paper-border text-ink placeholder-grey text-sm focus:outline-none focus:border-blue-hero focus:bg-paper-pure transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-ink hover:bg-black text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all active:scale-98 disabled:opacity-50"
            >
              {submitting ? (
                <span>Sending details...</span>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[11px] text-grey text-center mt-2.5 font-mono">
              Strictly confidential · Grounded in mutual trust & GDPR compliance
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
