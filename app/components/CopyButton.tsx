"use client";

import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2400);
  }

  const label = {
    idle: "Copy account number",
    copied: "Copied",
    failed: "Press and hold the number to copy",
  }[state];

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-accent px-5 font-medium text-accent-ink transition-transform duration-200 ease-out hover:-translate-y-px active:scale-[0.97]"
    >
      {label}
    </button>
  );
}
