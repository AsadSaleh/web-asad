"use client";

import Image from "next/image";
import { useRef, useState } from "react";

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "left" ? "M15.75 19.5 8.25 12l7.5-7.5" : "m8.25 4.5 7.5 7.5-7.5 7.5"}
      />
    </svg>
  );
}

export default function ImageSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const hasMultiple = images.length > 1;

  function scrollToIndex(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, images.length - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (index !== active) setActive(index);
  }

  return (
    <div className="group relative w-full overflow-hidden rounded-md">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[2/1] w-full shrink-0 snap-center bg-stone-50 dark:bg-slate-800/50"
          >
            <Image
              src={src}
              alt={`${alt} — screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {hasMultiple && (
        <>
          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            className="absolute left-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-1.5 text-stone-700 shadow-sm backdrop-blur-sm transition hover:bg-white active:scale-90 disabled:pointer-events-none disabled:opacity-0 dark:bg-slate-900/80 dark:text-stone-100 dark:hover:bg-slate-900"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === images.length - 1}
            className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-1.5 text-stone-700 shadow-sm backdrop-blur-sm transition hover:bg-white active:scale-90 disabled:pointer-events-none disabled:opacity-0 dark:bg-slate-900/80 dark:text-stone-100 dark:hover:bg-slate-900"
          >
            <ChevronIcon direction="right" />
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === active}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active
                    ? "w-4 bg-stone-700 dark:bg-white"
                    : "w-1.5 bg-stone-400/70 hover:bg-stone-500 dark:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
