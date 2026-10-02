"use client";

import { useSyncExternalStore } from "react";

type Mode = "system" | "light" | "dark";

const order: Mode[] = ["dark", "light", "system"];

const label: Record<Mode, string> = {
  system: "Auto",
  light: "Light",
  dark: "Dark",
};

const swatch: Record<Mode, string> = {
  system: "linear-gradient(135deg, #f8f1e8 50%, #1c1415 50%)",
  light: "#f8f1e8",
  dark: "#1c1415",
};

function subscribe(onChange: () => void) {
  window.addEventListener("themechange", onChange);
  return () => window.removeEventListener("themechange", onChange);
}

function getMode(): Mode {
  const theme = document.documentElement.dataset.theme;
  return theme === "light" || theme === "dark" ? theme : "system";
}

function setMode(mode: Mode) {
  const root = document.documentElement;
  try {
    localStorage.setItem("theme", mode);
  } catch {}
  if (mode === "system") delete root.dataset.theme;
  else root.dataset.theme = mode;
  window.dispatchEvent(new Event("themechange"));
}

export default function ThemeSwitch() {
  const mode = useSyncExternalStore(subscribe, getMode, (): Mode => "dark");
  const next = order[(order.indexOf(mode) + 1) % order.length];

  return (
    <button
      type="button"
      onClick={() => setMode(next)}
      aria-label={`Appearance: ${label[mode]}. Switch to ${label[next]}`}
      title={`Appearance: ${label[mode]}`}
      className="fixed top-[max(1rem,env(safe-area-inset-top))] right-4 z-20 grid size-11 place-items-center rounded-full bg-paper/80 shadow-[0_10px_28px_-12px_var(--shadow)] ring-1 ring-line backdrop-blur-xl transition-transform duration-200 ease-out active:scale-[0.9]"
    >
      <span
        className="size-5 rounded-full ring-[1.5px] ring-ink/45 transition-[background] duration-300"
        style={{ background: swatch[mode] }}
      />
    </button>
  );
}
