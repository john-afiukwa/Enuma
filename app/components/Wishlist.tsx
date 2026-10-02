"use client";

import { useState, type CSSProperties } from "react";

type Group = { tab: string; title: string; items: string[] };

export default function Wishlist({ groups }: { groups: Group[] }) {
  const [selected, setSelected] = useState(0);
  const group = groups[selected];

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Gift ideas"
        className="relative grid rounded-full bg-paper-deep p-1.5"
        style={{ gridTemplateColumns: `repeat(${groups.length}, 1fr)` }}
      >
        <span
          aria-hidden
          className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={
            {
              width: `calc((100% - 0.75rem) / ${groups.length})`,
              transform: `translateX(${selected * 100}%)`,
            } as CSSProperties
          }
        />
        {groups.map((g, i) => (
          <button
            key={g.tab}
            type="button"
            role="tab"
            id={`wish-tab-${i}`}
            aria-selected={selected === i}
            aria-controls="wish-panel"
            onClick={() => setSelected(i)}
            className={`relative z-10 h-11 rounded-full text-[0.95rem] font-medium transition-colors duration-300 ${
              selected === i ? "text-paper" : "text-ink-soft hover:text-ink"
            }`}
          >
            {g.tab}
          </button>
        ))}
      </div>

      <div
        key={group.tab}
        id="wish-panel"
        role="tabpanel"
        aria-labelledby={`wish-tab-${selected}`}
        className="mt-6"
      >
        <h4 className="enter font-display text-xl italic text-accent">
          {group.title}
        </h4>
        <ul className="mt-3 border-b border-line text-[1.05rem]">
          {group.items.map((item, i) => (
            <li
              key={item}
              className="enter border-t border-line py-2.5"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
