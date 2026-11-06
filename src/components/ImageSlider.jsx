import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    src: '/images/slider/1-guest-guidance.jpg',
    badge: 'Orientierung & Betreuung',
    title: 'Freundlicher Gästeservice',
    description: 'Aufmerksame Wegleitung und empathische Präsenz auf Augenhöhe',
    alt: 'Freundliche BX Sicherheitsmitarbeiterin im aufmerksamen Gespräch mit Veranstaltungsgästen',
  },
  {
    id: 2,
    src: '/images/slider/2-event-welcome.jpg',
    badge: 'Zuvorkommender Einlass',
    title: 'Herzlicher Empfang',
    description: 'Offene Willkommenskultur, die Sicherheit mit Wohlbefinden verbindet',
    alt: 'BX Sicherheitspersonal heißt Gäste bei einer Abendveranstaltung mit offener Willkommensgeste willkommen',
  },
  {
    id: 3,
    src: '/images/slider/3-service-desk.jpg',
    badge: 'Info- & Fundbüro-Desk',
    title: 'Diskrete Unterstützung',
    description: 'Professionelle Hilfe und ehrliche Fürsorge im direkten Kundenkontakt',
    alt: 'Freundlicher BX Sicherheitsmitarbeiter am Info- und Fundbüro-Desk bei der Rückgabe eines Fundstücks',
  },
  {
    id: 4,
    src: '/images/slider/4-team-briefing.jpg',
    badge: 'Einsatzabstimmung',
    title: 'Ruhige Koordination',
    description: 'Strukturierte Vorbereitung für reibungslose und sichere Abläufe',
    alt: 'BX Sicherheitskräfte bei einer ruhigen Einsatzbesprechung vor Ort',
  },
];

// Infinite loop array: [Clone of Slide 4, Slide 1, Slide 2, Slide 3, Slide 4, Clone of Slide 1]
const CLONED_SLIDES = [SLIDES[3], ...SLIDES, SLIDES[0]];

const AUTOPLAY_INTERVAL = 10000; // 10 seconds

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // 1 corresponds to SLIDES[0]
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const isHorizontalSwipeRef = useRef(null);

  // Active dot index (0 to 3)
  const activeDotIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length;

  // Restart 10s autoplay timer
  const resetAutoplayTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      }, AUTOPLAY_INTERVAL);
    }
  }, [isPlaying]);

  // Handle Play/Pause
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplayTimer, isPlaying]);

  // Next Slide
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    resetAutoplayTimer();
  }, [resetAutoplayTimer]);

  // Previous Slide
  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    resetAutoplayTimer();
  }, [resetAutoplayTimer]);

  // Jump to specific slide dot
  const goToSlide = (slideIdx) => {
    setIsTransitioning(true);
    setCurrentIndex(slideIdx + 1);
    resetAutoplayTimer();
  };

  // Seamless jump when clone animation completes
  const handleTransitionEnd = () => {
    if (currentIndex === CLONED_SLIDES.length - 1) {
      // Reached clone of Slide 1 at the end -> jump silently to real Slide 1
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Reached clone of Slide 4 at the start -> jump silently to real Slide 4
      setIsTransitioning(false);
      setCurrentIndex(SLIDES.length);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === ' ') {
      e.preventDefault();
      togglePlay();
    }
  };

  // --- TOUCH SWIPE (Responsive & Natural vertical page scrolling preserved) ---
  const handleTouchStart = (e) => {
    dragStartXRef.current = e.touches[0].clientX;
    dragStartYRef.current = e.touches[0].clientY;
    isHorizontalSwipeRef.current = null;
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - dragStartXRef.current;
    const diffY = currentY - dragStartYRef.current;

    // Detect gesture direction on first significant movement
    if (isHorizontalSwipeRef.current === null) {
      if (Math.abs(diffX) > 10 || Math.abs(diffY) > 10) {
        isHorizontalSwipeRef.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }

    // Only apply horizontal drag if gesture is predominantly horizontal
    if (isHorizontalSwipeRef.current) {
      setIsTransitioning(false);
      setDragOffset(diffX);
    }
  };

  const handleTouchEnd = () => {
    if (isHorizontalSwipeRef.current && Math.abs(dragOffset) > 40) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    } else if (isHorizontalSwipeRef.current) {
      setIsTransitioning(true);
    }
    setDragOffset(0);
    isHorizontalSwipeRef.current = null;
  };

  // --- MOUSE DRAG FOR DESKTOP ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    setDragOffset(0);
    setIsTransitioning(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - dragStartXRef.current;
    setDragOffset(diffX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    } else {
      setIsTransitioning(true);
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="BX Sicherheit Bildergalerie"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/10 shadow-2xl group select-none focus:outline-none focus:ring-2 focus:ring-yellow-accent/50 ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Sliding Track */}
      <div
        onTransitionEnd={handleTransitionEnd}
        className="flex w-full h-full"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          transition: isTransitioning
            ? 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1)'
            : 'none',
        }}
      >
        {CLONED_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 relative overflow-hidden"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="size-full object-cover object-center pointer-events-none"
              loading={idx === 1 ? 'eager' : 'lazy'}
              draggable={false}
            />

            {/* Subtle natural-warm gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Top Badge: Slide Topic & Numbering */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex items-center gap-2 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-blue-deep/80 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider uppercase text-white/90 shadow-md">
          {SLIDES[activeDotIndex].badge}
        </span>
        <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-mono text-yellow-accent font-semibold shadow-md">
          0{activeDotIndex + 1} / 0{SLIDES.length}
        </span>
      </div>

      {/* Desktop Left Navigation Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Vorheriges Bild"
        className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 shadow-xl"
      >
        <ChevronLeft className="w-5 h-5 -translate-x-0.5" />
      </button>

      {/* Desktop Right Navigation Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Nächstes Bild"
        className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 shadow-xl"
      >
        <ChevronRight className="w-5 h-5 translate-x-0.5" />
      </button>

      {/* Bottom Control Bar: Dots & Play/Pause Button */}
      <div className="absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 z-20 flex items-center justify-between pointer-events-none">
        {/* Caption */}
        <div className="hidden sm:block text-left text-white drop-shadow-md">
          <p className="text-xs font-bold text-white tracking-wide">
            {SLIDES[activeDotIndex].title}
          </p>
          <p className="text-[11px] text-white/75 font-normal line-clamp-1">
            {SLIDES[activeDotIndex].description}
          </p>
        </div>

        {/* Controls Container */}
        <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 shadow-xl pointer-events-auto ml-auto">
          {/* 4 Interactive Navigation Dots */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Folienauswahl">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === activeDotIndex;
              return (
                <button
                  key={slide.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Zu Bild ${idx + 1}: ${slide.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'w-6 bg-yellow-accent shadow-sm'
                      : 'w-2 bg-white/40 hover:bg-white/75'
                  }`}
                />
              );
            })}
          </div>

          <div className="w-px h-3.5 bg-white/20 mx-0.5" />

          {/* Pause / Play Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label={isPlaying ? 'Automatischen Wechsel pausieren' : 'Automatischen Wechsel starten'}
            title={isPlaying ? 'Pause (10s Intervall)' : 'Wiedergabe starten'}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors focus:outline-none"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5 text-yellow-accent fill-yellow-accent" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
