"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function HeroImageCutoutLegacy() {
  const imageLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageLayer = imageLayerRef.current;

    if (!imageLayer) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      if (mediaQuery.matches) {
        imageLayer.style.transform = "translateY(0px) scale(1.22)";
        return;
      }

      const rect = imageLayer.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = viewportCenter - elementCenter;
      const normalizedOffset = distanceFromCenter / viewportCenter;
      const translateY = Math.max(-100, Math.min(100, normalizedOffset * 100));

      imageLayer.style.transform = `translateY(${translateY}px) scale(1.5)`;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute inset-x-12 top-12 -z-20 h-[78%] rounded-full bg-[#d7b794]/30 blur-3xl" />
      <div className="absolute -left-4 top-14 -z-10 hero-cutout-mask aspect-928/1126 w-[92%] bg-[#ead7c2]/85" />
      <div className="absolute right-0 top-10 -z-10 h-24 w-24 rounded-full border border-white/50 bg-white/30 backdrop-blur sm:h-32 sm:w-32" />
      <div className="absolute -bottom-4 left-6 -z-10 h-28 w-28 rounded-full bg-[#36513a]/12 blur-2xl sm:h-36 sm:w-36" />

      <div className="hero-cutout-mask relative z-10 aspect-928/1126 bg-white/85 shadow-[0_40px_100px_-42px_rgba(40,57,39,0.48)]">
        <div className="hero-cutout-mask absolute inset-[4%] overflow-hidden bg-[#f5ecdf]">
          <div ref={imageLayerRef} className="relative h-full w-full will-change-transform transition-transform duration-300 ease-out">
            <Image
              src="/images/hero-cutout-current.jpg"
              alt="Kaktusi Macan u rasadniku"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 42rem, 90vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
