"use client";

import { useSyncExternalStore } from "react";

const thanksgiving = Date.UTC(2026, 9, 4);

function subscribe() {
  return () => {};
}

function daysToGo() {
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((thanksgiving - today) / 86_400_000);
}

function message(days: number) {
  if (days > 2) return `That’s ${days} sleeps away.`;
  if (days === 2) return "That’s the day after tomorrow.";
  if (days === 1) return "That’s tomorrow. One more sleep.";
  if (days === 0) return "That’s today. We can’t wait to see you.";
  return "Thank you to everyone who gave thanks with us.";
}

export default function Countdown() {
  const days = useSyncExternalStore(subscribe, daysToGo, () => null);

  return (
    <p className="mt-4 min-h-[1.75rem] font-display text-lg italic text-ink-soft">
      {days === null ? " " : message(days)}
    </p>
  );
}
