import Print from "./Print";
import Countdown from "./Countdown";
import withTheBall from "../../public/E4.jpeg";

const directions =
  "https://www.google.com/maps/search/?api=1&query=St.+Donald%27s+Catholic+Church%2C+Karu";

const comeLines = [
  "Come as you are.",
  "Come with your prayers.",
  "Come with your love.",
  "Come celebrate our boy with us.",
];

export default function Thanksgiving() {
  return (
    <section
      id="thanksgiving"
      className="mt-24 scroll-mt-4 rounded-t-[2.5rem] bg-paper-deep px-6 pt-16 pb-20 md:pt-28"
    >
      <div className="mx-auto max-w-[34rem]">
        <p className="reveal font-display text-lg italic text-accent">
          You’re invited
        </p>
        <h2 className="reveal mt-3 font-display text-[2.6rem] leading-[1.02] font-[450] tracking-[-0.025em] md:text-6xl">
          One year deserves more than a party
        </h2>

        <div className="story mt-10">
          <p className="reveal">
            His birthday is Saturday, 3rd October, and while we will absolutely
            celebrate with cake, laughter, pictures and all the first-birthday
            excitement… we also want to pause.
          </p>
          <p className="reveal">
            Because before the decorations, before the cake and before everyone
            starts asking how the baby became so big so quickly, there is one
            thing we know: this year has been a gift.
          </p>
          <p className="reveal">
            So on Sunday, we would love for you to join us as we give thanks to
            God for the gift of Enuma, for keeping him, for watching over him and
            for bringing our little family safely to this beautiful milestone.
          </p>
        </div>

        <div className="fx-pop mt-14 flex origin-bottom-left items-end gap-5">
          <span className="fx-breathe font-display text-[8.5rem] leading-[0.75] font-[350] tracking-[-0.05em] text-accent tabular-nums">
            4
          </span>
          <div className="pb-1 font-display text-2xl leading-tight">
            <p>Sunday</p>
            <p>October 2026</p>
          </div>
        </div>
        <Countdown />
        <p className="reveal mt-4 font-display text-[1.4rem] leading-snug">
          St. Donald’s Catholic Church, Karu
        </p>

        <div className="reveal mt-8 grid grid-cols-2 gap-3">
          <a
            href="/thanksgiving.ics"
            download="enuma-thanksgiving.ics"
            className="flex h-12 items-center justify-center rounded-full bg-accent px-4 font-medium text-accent-ink transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:-rotate-1 active:scale-[0.95]"
          >
            Add to calendar
          </a>
          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full px-4 font-medium ring-1 ring-line transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ring-inset hover:-translate-y-0.5 hover:rotate-1 active:scale-[0.95]"
          >
            Get directions
          </a>
        </div>
      </div>

      <Print
        src={withTheBall}
        alt="Enuma sitting on a wooden box holding a football, sunglasses on his head"
        caption="Ready when you are."
        tilt={4}
        focus="45% 65%"
        className="mt-16"
      />

      <div className="mx-auto mt-16 max-w-[34rem] font-display text-[1.75rem] leading-[1.3] italic">
        {comeLines.map((line, i) => (
          <p
            key={line}
            className={i % 2 ? "fx-slide-right text-right" : "fx-slide-left"}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
