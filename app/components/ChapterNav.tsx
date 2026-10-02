"use client";

import { useEffect, useState, type CSSProperties } from "react";

const chapters = [
  { id: "story", label: "His story" },
  { id: "thanksgiving", label: "Thanksgiving" },
  { id: "gifts", label: "Gifts" },
];

export default function ChapterNav() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActive(chapters.findIndex((c) => c.id === entry.target.id));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    for (const id of ["opening", ...chapters.map((c) => c.id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Chapters"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex justify-center px-3 pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <ul className="pointer-events-auto relative grid w-[min(21.5rem,100%)] grid-cols-3 rounded-full bg-paper/80 p-1.5 shadow-[0_12px_32px_-12px_var(--shadow)] ring-1 ring-line backdrop-blur-xl">
        <span
          aria-hidden
          className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc((100%-0.75rem)/3)] rounded-full bg-accent transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={
            {
              transform: `translateX(${Math.max(active, 0) * 100}%) scale(${active < 0 ? 0.6 : 1})`,
              opacity: active < 0 ? 0 : 1,
            } as CSSProperties
          }
        />
        {chapters.map((chapter, i) => (
          <li key={chapter.id} className="relative z-10">
            <a
              href={`#${chapter.id}`}
              aria-current={active === i ? "location" : undefined}
              className={`flex h-11 items-center justify-center rounded-full px-2 text-[0.92rem] font-medium whitespace-nowrap transition-[color,transform] duration-300 active:scale-[0.94] ${
                active === i ? "text-accent-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {chapter.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
