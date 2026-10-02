import Image from "next/image";
import portrait from "../../public/enuma2.jpeg";

export default function Opening() {
  return (
    <section
      id="opening"
      className="relative flex min-h-[100svh] flex-col md:mx-auto md:grid md:max-w-6xl md:grid-cols-2 md:items-center md:gap-14 md:px-10 md:py-16"
    >
      <div className="px-6 pt-[max(3.5rem,calc(env(safe-area-inset-top)+2rem))] md:p-0">
        <p className="enter font-display text-lg italic text-accent">
          3 October 2026
        </p>
        <h1 className="enter mt-2 font-display text-[clamp(4rem,20vw,8.5rem)] leading-[0.86] font-[430] tracking-[-0.04em] [animation-delay:120ms]">
          Enuma
          <br />
          <em className="font-[380]">is one.</em>
        </h1>
        <p className="enter mt-6 max-w-[24ch] text-lg leading-snug text-ink-soft [animation-delay:240ms]">
          One year of tiny hands, big laughs and answered prayers.
        </p>
      </div>

      <div className="enter hero-fade relative mt-4 min-h-[56svh] flex-1 [animation-delay:360ms] md:mt-0 md:h-[82svh] md:flex-none md:overflow-hidden md:rounded-[2.25rem] md:shadow-[0_40px_80px_-40px_var(--shadow)]">
        <Image
          src={portrait}
          alt="Enuma at a little white piano, next to a letter board that reads “Enuma is one”"
          fill
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="photo object-cover object-bottom"
        />
      </div>
    </section>
  );
}
