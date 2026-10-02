import type { CSSProperties } from "react";
import PhotoStack, { type Photo } from "./PhotoStack";
import piano from "../../public/enuma2.jpeg";
import onTheBox from "../../public/E2.jpeg";
import theChief from "../../public/E1.jpeg";
import crawling from "../../public/E3.jpeg";
import withTheBall from "../../public/E4.jpeg";
import month1 from "../../public/months/month-1-2617.jpg";
import month2 from "../../public/months/month-2-2911.jpg";
import month3 from "../../public/months/month-3-3238.jpg";
import month4 from "../../public/months/month-4-4340.jpg";
import month5 from "../../public/months/month-5-4715.jpg";
import month6 from "../../public/months/month-6-7088.jpg";
import month7 from "../../public/months/month-7-5077.jpg";
import month8 from "../../public/months/month-8-5584.jpg";
import month9 from "../../public/months/month-9-5799.jpg";
import month10 from "../../public/months/month-10-6807.jpg";
import month11a from "../../public/months/month-11-6525.jpg";
import month11b from "../../public/months/month-11-6650.jpg";

const photos: Photo[] = [
  { src: piano, alt: "Enuma at his little white piano", focus: "50% 80%" },
  { src: month1, alt: "Enuma at one month, asleep in a grey cap", focus: "40% 28%", caption: "1 month" },
  { src: month2, alt: "Enuma at two months, lying on a blue blanket", focus: "60% 40%", caption: "2 months" },
  { src: month3, alt: "Enuma at three months, laughing in a pink bouncer", focus: "50% 35%", caption: "3 months" },
  { src: month4, alt: "Enuma at four months in a dinosaur shirt", focus: "50% 30%", caption: "4 months" },
  { src: month5, alt: "Enuma at five months, peeking over a blue blanket", focus: "55% 45%", caption: "5 months" },
  { src: month6, alt: "Enuma at six months, smiling in a striped outfit", focus: "35% 35%", caption: "6 months" },
  { src: month7, alt: "Enuma at seven months in denim dungarees", focus: "40% 35%", caption: "7 months" },
  { src: month8, alt: "Enuma at eight months in a denim shirt", focus: "50% 35%", caption: "8 months" },
  { src: month9, alt: "Enuma at nine months, crawling on the bed", focus: "50% 35%", caption: "9 months" },
  { src: month10, alt: "Enuma at ten months, laughing", focus: "50% 35%", caption: "10 months" },
  { src: month11a, alt: "Enuma at eleven months, sitting on a car and smiling", focus: "45% 35%", caption: "11 months" },
  { src: month11b, alt: "Enuma at eleven months in big glasses", focus: "35% 45%", caption: "11 months" },
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
