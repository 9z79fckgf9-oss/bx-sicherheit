import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

export default function Hero({ t, onOpenQuote }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-bg pt-24 pb-8 sm:pb-12">
      {/* Background Video Layer - Unobstructed view of the faces and smiling interactions */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Very soft warm ambient corner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 z-10 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(200, 155, 83, 0.12) 0%, transparent 70%)',
          }}
        />

        {/* Video showing the security guard talking with guests */}
        <video
          ref={videoRef}
          className="size-full object-cover scale-100 pointer-events-none transition-opacity duration-1000"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          src="/videos/hero.mp4"
        />

        {/* Delicate gradient focused only on the lower third so upper video faces are totally clear */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/40 via-transparent to-bg" />
        <div className="noise-overlay opacity-20" />
      </div>

      {/* Discreet Video Audio & Play Controls top-right */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 text-xs shadow-md">
          <span className="hidden sm:inline text-[11px] text-white/60 font-medium mr-1">
            BX Team On Site
          </span>
          <button
            onClick={togglePlay}
            className="p-1 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-1 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Spacious middle spacer so the video faces are completely visible */}
      <div className="flex-1 min-h-[28vh] sm:min-h-[35vh]" />

      {/* Hero Content Positioned Down Low so it doesn't block the video */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-6 sm:pb-8">
        {/* Slogan */}
        <h1 className="font-display font-extrabold uppercase tracking-tight text-white text-3xl sm:text-5xl md:text-6xl leading-[1.05] mb-4">
          <span className="block text-gradient-silver">{t.hero.line1}</span>
          <span className="block text-gradient-accent mt-1">{t.hero.line2}</span>
        </h1>

        {/* Short, dignified 1-sentence subtext */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-normal">
          {t.hero.subtext}
        </p>
      </div>

      {/* Bottom Dual Card Buttons - Warm, inviting & serious without alarming red */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-5 border-t border-white/10">
          {/* Left Action Card */}
          <a
            href="#philosophy"
            className="group flex items-center justify-between gap-4 p-3 pr-6 rounded-2xl bg-surface-card/90 hover:bg-surface-card border border-white/10 hover:border-brand-primary/40 backdrop-blur-md transition-all duration-300 md:w-80 shadow-lg text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 group-hover:bg-brand-primary/20 text-brand-primary transition-colors duration-200">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block">
                  Our Mindset
                </span>
                <span className="font-display font-bold text-sm text-white tracking-wide">
                  {t.hero.ctaPrimary}
                </span>
              </div>
            </div>
            <span className="text-xs text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>

          {/* Middle caption info */}
          <p className="hidden lg:block text-xs text-white/60 max-w-md text-center leading-relaxed">
            {t.hero.videoNote}
          </p>

          {/* Right Action Card - Warm champagne gold, serious and welcoming */}
          <button
            onClick={onOpenQuote}
            className="group flex items-center justify-between gap-4 p-3 pr-6 rounded-2xl bg-brand-primary hover:bg-brand-primary-hover border border-brand-primary backdrop-blur-md transition-all duration-300 md:w-80 shadow-lg shadow-brand-primary/20 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-black/20 text-bg transition-colors duration-200">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-bg" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-bg/80 tracking-wider block">
                  Non-Binding Consultation
                </span>
                <span className="font-display font-black text-sm text-bg tracking-wide">
                  {t.hero.ctaSecondary}
                </span>
              </div>
            </div>
            <span className="text-xs text-bg opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
