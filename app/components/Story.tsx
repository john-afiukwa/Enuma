import type { CSSProperties } from "react";
import Print from "./Print";
import onTheBox from "../../public/E2.jpeg";
import crawling from "../../public/E3.jpeg";

const quote = "We weren’t just watching him grow. He was growing us too.";

const firsts = [
  "cry",
  "smile",
  "laugh",
  "tooth",
  "crawl",
  "steps towards independence",
  "time he looked at us like he knew exactly who we were",
];

export default function Story() {
  return (
    <section id="story" className="scroll-mt-4 px-6 pt-8 md:pt-32">
      <div className="mx-auto max-w-[34rem]">
        <p className="reveal font-display text-lg italic text-accent">
          His story
        </p>
        <h2 className="reveal mt-3 font-display text-[2.6rem] leading-[1.02] font-[450] tracking-[-0.025em] md:text-6xl">
          The little boy who came along and changed everything
        </h2>

        <div className="story mt-10">
          <p className="reveal">
            It started with a tiny baby, a million hopes, a few prayers and
            absolutely no idea how quickly time would move.
          </p>
          <p className="reveal">
            Then came Enuma. Our little boy arrived and suddenly, life had a new
            soundtrack — tiny cries, sleepy stretches, unexpected giggles,
            midnight wake-ups, messy feeds, countless cuddles and the beautiful
            kind of tiredness that somehow still makes you smile.
          </p>
        </div>
      </div>

      <Print
        src={crawling}
        alt="Enuma on the grass beside a football, looking up"
        caption="Reaching for everything he wasn’t supposed to touch."
        tilt={-5}
        focus="40% 80%"
        className="my-16"
      />

      <div className="mx-auto max-w-[34rem]">
        <div className="story">
          <p className="reveal">
            We watched him discover his hands. Then his feet. Then food… the
            most amazing part. Every new food felt like a new discovery. His
            favourite food changed every day. Then the fascinating concept of
            feeding himself, and feeding another person.
          </p>
          <p className="reveal">
            He learned to smile, laugh, sit, crawl, explore, and give us that
            innocent little face that somehow makes all the mischief completely
            forgivable.
          </p>
          <p className="reveal">
            We watched a tiny baby slowly become this curious, cheeky little boy
            with a personality of his own. And somewhere between the first bath
            and the first laugh, the sleepless nights and the countless cuddles,
            we realised something.
          </p>
        </div>

        <blockquote
          aria-label={quote}
          className="fx-quote my-14 font-display text-[2.15rem] leading-[1.15] italic tracking-[-0.015em] text-accent"
        >
          {quote.split(" ").map((word, i) => (
            <span
              key={i}
              aria-hidden
              className="fx-word"
              style={{ "--i": i } as CSSProperties}
            >
              {word}{" "}
            </span>
          ))}
        </blockquote>

        <div className="story">
          <p className="reveal">
            He taught us patience we didn’t know we had, joy we didn’t know
            could exist in such small packages, and a kind of love that doesn’t
            really have adequate words.
          </p>
        </div>
      </div>

      <Print
        src={onTheBox}
        alt="Enuma sitting on a white box beside a lit-up “ONE” sign"
        caption="Twelve months. 365 days of little milestones."
        tilt={6}
        focus="32% 85%"
        className="my-16"
      />

      <div className="mx-auto max-w-[34rem]">
        <div className="story">
          <p className="reveal">
            And now, somehow… Enuma is one. Big emotions, beautiful memories,
            answered prayers, unexpected lessons and a whole lot of love. It
            feels like yesterday we were holding him for the first time. And yet
            here we are, planning his first birthday.
          </p>
        </div>
        <p className="fx-stretch mt-10 font-display text-[2.6rem] whitespace-nowrap italic">
          Time, please.
        </p>

        <div className="story mt-24">
          <p className="reveal">
            Looking back, we realise that the milestone isn’t really about the
            number one. It’s about everything that happened before it.
          </p>
        </div>

        <ol className="mt-8 border-b border-line font-display text-[1.65rem] leading-[1.2] tracking-[-0.01em]">
          {firsts.map((first) => (
            <li key={first} className="border-t border-line py-3.5">
              <span className="fx-pop inline-block origin-left">
                <span className="text-ink-soft">The first </span>
                {first}.
              </span>
            </li>
          ))}
        </ol>

        <div className="story mt-10">
          <p className="reveal">
            And all the little moments nobody else saw. The ordinary days that
            became precious memories. The hard days that made us stronger. The
            funny days that gave us stories. And the beautiful days that
            reminded us just how blessed we are.
          </p>
        </div>
      </div>
    </section>
  );
}
