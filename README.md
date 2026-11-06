# BX Sicherheit & Security — Modern B2B Web Experience

A high-performance, cinematic, and human-centered B2B website designed for **BX Sicherheit & Service** (Mutterstadt, Metropolregion Rhein-Neckar).

Inspired by the editorial elegance and dark-mode aesthetic of [Les GM Studios](https://www.lesgmstudios.com), tailored specifically for:
- **Commercial Property Managers** (Gewerbeimmobilien & Büroparks)
- **Warehouse & Logistics Directors** (Logistikzentren & Frachthöfe)
- **Event & Festival Hosts** (Messen, Galas & Großveranstaltungen)

---

## 🌟 Key Features & Philosophy

1. **Human & Approachable Security**:
   - Replaces the outdated, intimidating "frowning bouncer" cliché with authentic, smiling, approachable hospitality and § 34a GewO certified de-escalation mastery.
   - Core message: *"Security built on trust, not intimidation. People shouldn't fear security—they should feel comfortable approaching us anytime, for any reason."*

2. **"Stronger Together" Collaborative Safety Stats**:
   - Focuses on solidarity, communication, and B2B partnership rather than fear-mongering:
     - **87% Higher Well-Being**: Employees and guests feel measurably calmer and safer with friendly, communicative officers.
     - **94% De-escalation Rate**: Resolved through dialogue and emotional intelligence before issues escalate.
     - **4.2x Operational Continuity**: Seamless gatehouse flow and zero inventory bottlenecks.
     - **100% Zero-Barrier Approachability**: 24/7 open point of contact for anyone needing guidance.

3. **Cinematic Hero Video**:
   - Fullscreen background video with ambient darkening, film grain noise overlay, and dual action cards at the base.
   - **How to add your video**:
     - Simply save your video file to: `public/videos/hero.mp4`.
     - *Or* click the interactive **"Load Video"** pill directly in the top-right corner of the hero section in your browser to preview any local video file instantly!

4. **Bilingual (English default + German toggle)**:
   - Primary content translated and refined in English as requested.
   - Includes instant switch to German (`DE` pill) so local decision-makers in Mannheim, Ludwigshafen, Heidelberg, and Karlsruhe can read in their native language if preferred.

5. **Complete Service Suite (Adapted from bx-sicherheit.de)**:
   - Sicherheitsdienste & Objektschutz (Guarding & Patrols)
   - Ordnungsdienste (Crowd Management & Flow)
   - Messe- & Eventaufbau (Logistics, Stage & Booth Assembly)
   - Pforten- & Empfangsdienste (Concierge & Gatehouse Access)
   - Personenbegleitung & Fürsorge (VIP & Vulnerable Escort)
   - Beratung & Konzeption (Risk Analysis & Regulatory Concepts)
   - Reinigungsdienste (Venue Care & Facility Sanitation)

6. **Legal & Regional Compliance**:
   - Full § 5 TMG Impressum & DSGVO Privacy Policy modals.
   - Correct business details: Inhaber Amir Bajra, Johann-Sebastian-Bach-Str. 3, 67112 Mutterstadt, phone `+49 174 1757400`, email `info@bx-sicherheit.de`.
   - Supervision by Gewerbeamt Mutterstadt & IHK Pfalz.

---

## 🚀 Quick Start

### 1. Start Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3000`.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready static bundle in the `dist/` folder.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```text
Website-BX/
├── public/
│   ├── favicon.svg          # Custom BX shield SVG icon
│   └── videos/
│       ├── README.txt       # Instructions for video placement
│       └── hero.mp4         # (Place your hero video here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Glassmorphism header & language toggle
│   │   ├── Hero.jsx             # Video hero, controls & dual cards
│   │   ├── TrustTicker.jsx      # Infinite marquee of certifications & hubs
│   │   ├── WhyTogetherStats.jsx # "Stronger Together" positive stats & quote
│   │   ├── TargetAudience.jsx   # Dedicated B2B tabs for managers & directors
│   │   ├── ServicesGrid.jsx     # 7 core services with interactive cards
│   │   ├── CulturePhilosophy.jsx# Cliché vs. BX Standard contrast
│   │   ├── RegionalCoverage.jsx # Mutterstadt HQ & Rhine-Neckar cities
│   │   ├── ContactQuote.jsx     # Proposal form + FAQ accordion
│   │   ├── QuoteModal.jsx       # Quick popup quote request from any CTA
│   │   ├── LegalModals.jsx      # § 5 TMG Impressum & Privacy modals
│   │   └── Footer.jsx           # Clean footer with direct links & back-to-top
│   ├── data/
│   │   └── translations.js      # Complete EN & DE content dictionaries
│   ├── App.jsx                  # Main application controller
│   ├── index.css                # Tailwind directives & noise/grain styling
│   └── main.jsx                 # React root mount
├── index.html                   # HTML entry point with Google Fonts
├── tailwind.config.js           # Theme colors, fonts & animations
├── vite.config.js               # Vite build configuration
└── package.json                 # Project dependencies
```
