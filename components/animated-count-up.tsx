"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCountUpProps = {
  from?: number;
  to: number;
  durationMs?: number;
  className?: string;
  finalSuffix?: string;
};

export function AnimatedCountUp({
  from = 1,
  to,
  durationMs = 2000,
  className,
  finalSuffix = "",
}: AnimatedCountUpProps) {
  const [value, setValue] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;

    if (!node || hasAnimated) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const startAnimation = () => {
      if (mediaQuery.matches) {
        setValue(to);
        setHasAnimated(true);
        setIsCelebrating(true);
        return;
      }

      const startTime = performance.now();
      const frame = (now: number) => {
        const progress = Math.min((now - startTime) / durationMs, 1);
        const easedProgress = 1 - (1 - progress) ** 3;
        const nextValue = Math.min(to, Math.round(from + (to - from) * easedProgress));

        setValue(nextValue);

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setHasAnimated(true);
          setIsCelebrating(true);
        }
      };

      requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          observer.disconnect();
          startAnimation();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [durationMs, from, hasAnimated, to]);

  useEffect(() => {
    if (!isCelebrating) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsCelebrating(false);
    }, 850);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isCelebrating]);

  return (
    <span className="relative inline-flex items-start justify-center">
      {isCelebrating ? (
        <>
          <span className="pointer-events-none absolute -left-3 top-2 h-2.5 w-2.5 rounded-full bg-[#f3d8bf] animate-ping" />
          <span className="pointer-events-none absolute -right-4 top-0 h-3 w-3 rounded-full bg-[#d7b794] animate-ping" />
          <span className="pointer-events-none absolute right-2 -top-3 text-[#f3d8bf] animate-pulse">✦</span>
        </>
      ) : null}
      <span
        ref={elementRef}
        className={`${className ?? ""} transition-all duration-300 ${isCelebrating ? "scale-105 text-[#fff4e8] drop-shadow-[0_0_18px_rgba(243,216,191,0.95)]" : ""}`.trim()}
      >
        {value}
        {hasAnimated ? finalSuffix : ""}
      </span>
    </span>
  );
}