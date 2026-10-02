"use client";

import { useEffect, useRef } from "react";

type Swatch = { face: string; back: string; weight: number };

const swatches: Swatch[] = [
  { face: "#9b3043", back: "#661c2a", weight: 4 },
  { face: "#e27d60", back: "#b4573f", weight: 4 },
  { face: "#e6b75c", back: "#b98a33", weight: 4 },
  { face: "#f5e6d1", back: "#d6c0a3", weight: 3 },
  { face: "#f1bba6", back: "#c98f7a", weight: 2 },
  { face: "#aabfdd", back: "#7f95b8", weight: 1 },
];

const totalWeight = swatches.reduce((sum, s) => sum + s.weight, 0);

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  terminal: number;
  w: number;
  h: number;
  angle: number;
  spin: number;
  flip: number;
  flipSpeed: number;
  sway: number;
  swaySpeed: number;
  swayAmp: number;
  round: boolean;
  swatch: Swatch;
};

type Point = { x: number; y: number };

type Ribbon = {
  points: Point[];
  vy: number;
  terminal: number;
  sway: number;
  swaySpeed: number;
  swayAmp: number;
  drift: number;
  twist: number;
  twistSpeed: number;
  width: number;
  segment: number;
  swatch: Swatch;
};

const GRAVITY = 420;
const START_DELAY = 350;
const FADE_START = 7;
const FADE_LENGTH = 1.2;

const random = (min: number, max: number) => min + Math.random() * (max - min);

function pickSwatch() {
  let roll = Math.random() * totalWeight;
  for (const swatch of swatches) {
    roll -= swatch.weight;
    if (roll <= 0) return swatch;
  }
  return swatches[0];
}

function makePiece(width: number, height: number): Piece {
  const round = Math.random() < 0.18;
  const w = round ? random(6, 8) : random(6, 10);
  return {
    x: random(0, width),
    y: -random(12, height * 0.55),
    vx: random(-25, 25),
    vy: random(70, 190),
    terminal: random(170, 270),
    w,
    h: round ? w : w * random(1.4, 2),
    angle: random(0, Math.PI * 2),
    spin: random(-4, 4),
    flip: random(0, Math.PI * 2),
    flipSpeed: random(5, 11),
    sway: random(0, Math.PI * 2),
    swaySpeed: random(1.5, 3.2),
    swayAmp: random(15, 45),
    round,
    swatch: pickSwatch(),
  };
}

function makeRibbon(width: number, height: number): Ribbon {
  const segment = random(6, 7);
  const count = 22;
  const x = random(width * 0.04, width * 0.96);
  const y = -random(10, height * 0.3);
  return {
    points: Array.from({ length: count }, (_, i) => ({
      x: x + random(-1, 1),
      y: y - i * segment,
    })),
    vy: random(40, 90),
    terminal: random(115, 155),
    sway: random(0, Math.PI * 2),
    swaySpeed: random(2.2, 3.4),
    swayAmp: random(90, 140),
    drift: random(-18, 18),
    twist: random(0, Math.PI * 2),
    twistSpeed: random(3, 5.5),
    width: random(6.5, 9),
    segment,
    swatch: pickSwatch(),
  };
}

function drawPiece(ctx: CanvasRenderingContext2D, p: Piece, dpr: number) {
  const facing = Math.cos(p.flip);
  ctx.setTransform(dpr, 0, 0, dpr, p.x * dpr, p.y * dpr);
  ctx.rotate(p.angle);
  ctx.scale(1, Math.max(Math.abs(facing), 0.06) * Math.sign(facing || 1));
  ctx.fillStyle = facing >= 0 ? p.swatch.face : p.swatch.back;
  if (p.round) {
    ctx.beginPath();
    ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
  }
}

function drawRibbon(ctx: CanvasRenderingContext2D, r: Ribbon, dpr: number) {
  const pts = r.points;
  const n = pts.length;
  const edges: { left: Point; right: Point; facing: number }[] = [];

  for (let i = 0; i < n; i++) {
    const prev = pts[Math.max(i - 1, 0)];
    const next = pts[Math.min(i + 1, n - 1)];
    const dx = next.x - prev.x;
    const dy = next.y - prev.y;
    const length = Math.hypot(dx, dy) || 1;
    const nx = -dy / length;
    const ny = dx / length;
    const facing = Math.cos(r.twist + i * 0.5);
    const taper = i === 0 || i === n - 1 ? 0.6 : 1;
    const half = (r.width * (0.18 + 0.82 * Math.abs(facing)) * taper) / 2;
    edges.push({
      left: { x: pts[i].x + nx * half, y: pts[i].y + ny * half },
      right: { x: pts[i].x - nx * half, y: pts[i].y - ny * half },
      facing,
    });
  }

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.lineWidth = 0.6;
  ctx.lineJoin = "round";
  for (let i = 0; i < n - 1; i++) {
    const a = edges[i];
    const b = edges[i + 1];
    const color = a.facing + b.facing >= 0 ? r.swatch.face : r.swatch.back;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(a.left.x, a.left.y);
    ctx.lineTo(b.left.x, b.left.y);
    ctx.lineTo(b.right.x, b.right.y);
    ctx.lineTo(a.right.x, a.right.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

export default function Celebration() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      canvas.style.display = "none";
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const size = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };
    size();
    window.addEventListener("resize", size);

    const pieceCount = Math.round(
      Math.min(Math.max((width * height) / 2600, 90), 220),
    );
    const ribbonCount = Math.round(Math.min(Math.max(width / 40, 8), 18));
    const pieces = Array.from({ length: pieceCount }, () =>
      makePiece(width, height),
    );
    const ribbons = Array.from({ length: ribbonCount }, () =>
      makeRibbon(width, height),
    );

    let frame = 0;
    let started = 0;
    let last = 0;

    const finish = () => {
      window.removeEventListener("resize", size);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = "none";
    };

    const tick = (now: number) => {
      if (!started) {
        started = now;
        last = now;
      }
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      const elapsed = (now - started) / 1000;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha =
        elapsed < FADE_START
          ? 1
          : Math.max(0, 1 - (elapsed - FADE_START) / FADE_LENGTH);

      let visible = 0;

      for (const r of ribbons) {
        const head = r.points[0];
        r.vy = Math.min(r.vy + GRAVITY * 0.6 * dt, r.terminal);
        r.sway += r.swaySpeed * dt;
        r.twist += r.twistSpeed * dt;
        head.x += (r.drift + Math.cos(r.sway) * r.swayAmp) * dt;
        head.y += r.vy * dt;

        for (let i = 1; i < r.points.length; i++) {
          const prev = r.points[i - 1];
          const p = r.points[i];
          p.y += 6 * dt;
          const dx = p.x - prev.x;
          const dy = p.y - prev.y;
          const distance = Math.hypot(dx, dy);
          if (distance > r.segment) {
            p.x = prev.x + (dx / distance) * r.segment;
            p.y = prev.y + (dy / distance) * r.segment;
          }
        }

        const tail = r.points[r.points.length - 1];
        if (Math.min(head.y, tail.y) < height + 20) {
          visible++;
          if (Math.max(head.y, tail.y) > -20) drawRibbon(ctx, r, dpr);
        }
      }

      for (const p of pieces) {
        p.vy = Math.min(p.vy + GRAVITY * dt, p.terminal);
        p.vx *= Math.pow(0.5, dt);
        p.sway += p.swaySpeed * dt;
        p.x += (p.vx + Math.sin(p.sway) * p.swayAmp) * dt;
        p.y += p.vy * dt;
        p.angle += p.spin * dt;
        p.flip += p.flipSpeed * dt;

        if (p.y < height + 20) {
          visible++;
          if (p.y > -20) drawPiece(ctx, p, dpr);
        }
      }

      if (visible === 0 || elapsed > FADE_START + FADE_LENGTH) {
        finish();
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, START_DELAY);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[25] h-full w-full"
    />
  );
}
