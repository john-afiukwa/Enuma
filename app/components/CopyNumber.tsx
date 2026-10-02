"use client";

import { useState } from "react";

type CopyNumberProps = { bank: string; number: string; name: string };

export default function CopyNumber({ bank, number, name }: CopyNumberProps) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const [bumps, setBumps] = useState(0);

  async function copy() {
    try {
      await navigator.clipboard.writeText(number);
      setState("copied");
      setBumps((count) => count + 1);
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2400);
  }

  const label = {
    idle: "Copy account number",
    copied: "Copied. Thank you",
    failed: "Press and hold the number to copy",
  }[state];

  return (
    <div className="reveal mt-8 rounded-[1.75rem] bg-paper-deep p-6">
      <p className="text-ink-soft">{bank}</p>
      <p
        key={bumps}
        className={`mt-1 inline-block origin-left font-display text-[2.4rem] leading-none tracking-[0.02em] tabular-nums select-all ${
          bumps ? "fx-bump" : ""
        }`}
      >
        {number}
      </p>
      <p className="mt-3 text-[1.05rem] leading-snug">{name}</p>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-accent px-5 font-medium text-accent-ink transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 active:scale-[0.95]"
      >
        {label}
      </button>
    </div>
  );
}
