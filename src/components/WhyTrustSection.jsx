import React from 'react';
import ImageSlider from './ImageSlider';

export default function WhyTrustSection({ data }) {
  return (
    <section id="why" className="py-24 sm:py-36 bg-blue-deep text-white overflow-hidden">
      <div className="max-w-shell mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
              [ 02 / The Human Foundation ]
            </p>

            <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-[-0.035em] text-white">
              {data.titlePart1}{" "}
              <span className="font-serif-italic text-yellow-accent">
                {data.titleSerif}
                <span className="text-white">.</span>
              </span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              <p>{data.body1}</p>
              <p>{data.body2}</p>
            </div>
          </div>

          {/* Right Media Column - Interactive Image Slider */}
          <div className="lg:col-span-6 relative">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
