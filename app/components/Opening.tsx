import type { CSSProperties } from "react";
import PhotoStack from "./PhotoStack";
import piano from "../../public/enuma2.jpeg";
import onTheBox from "../../public/E2.jpeg";
import theChief from "../../public/E1.jpeg";
import crawling from "../../public/E3.jpeg";
import withTheBall from "../../public/E4.jpeg";

const photos = [
  { src: piano, alt: "Enuma at his little white piano", focus: "50% 80%" },
  { src: theChief, alt: "Enuma in his red cap and wine velvet robe", focus: "55% 30%" },
  { src: onTheBox, alt: "Enuma sitting beside a lit-up “ONE” sign", focus: "35% 85%" },
  { src: crawling, alt: "Enuma on the grass with his football", focus: "40% 80%" },
  { src: withTheBall, alt: "Enuma holding his football, sunglasses on his head", focus: "45% 65%" },
];

export default function Opening() {
  return (
    <section
      id="opening"
      className="flex min-h-[100svh] flex-col justify-between gap-6 px-6 pt-[max(3.5rem,calc(env(safe-area-inset-top)+2rem))] pb-24 md:mx-auto md:grid md:max-w-6xl md:grid-cols-2 md:items-center md:px-10"
    >
      <div>
        <p className="enter font-display text-lg italic text-accent">
          3 October 2026
        </p>
        <h1 className="mt-2 font-display text-[clamp(4rem,20vw,8.5rem)] leading-[0.86] font-[430] tracking-[-0.04em]">
          <span aria-label="Enuma" className="inline-block">
            {"Enuma".split("").map((letter, i) => (
              <span
                key={i}
                aria-hidden
                className="fx-letter"
                style={{ "--i": i } as CSSProperties}
              >
                {letter}
              </span>
            ))}
          </span>
          <br />
          <em className="enter fx-breathe inline-block font-[380] [animation-delay:600ms]">
            is one.
          </em>
        </h1>
        <p className="enter mt-5 max-w-[24ch] text-lg leading-snug text-ink-soft [animation-delay:750ms]">
          One year of tiny hands, big laughs and answered prayers.
        </p>
      </div>

      <div className="enter [animation-delay:500ms]">
        <PhotoStack photos={photos} />
        <p className="mt-7 text-center font-display text-base italic text-ink-soft">
          Tap the photos to flip through his year.
        </p>
      </div>
    </section>
  );
}
