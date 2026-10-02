"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "story", label: "His story" },
  { id: "thanksgiving", label: "Thanksgiving" },
  { id: "gifts", label: "Gifts" },
];

export default function ChapterNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActive(entry.target.id === "opening" ? null : entry.target.id);
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
      <ul className="pointer-events-auto flex gap-1 rounded-full bg-paper/80 p-1.5 shadow-[0_12px_32px_-12px_var(--shadow)] ring-1 ring-line backdrop-blur-xl">
        {chapters.map((chapter) => {
          const isActive = active === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`flex h-11 items-center rounded-full px-4 text-[0.95rem] font-medium whitespace-nowrap transition-[background-color,color,transform] duration-300 ease-out active:scale-[0.96] ${
                  isActive
                    ? "bg-accent text-accent-ink"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {chapter.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
