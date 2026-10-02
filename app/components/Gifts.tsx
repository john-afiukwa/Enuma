import Image from "next/image";
import theChief from "../../public/E1.jpeg";
import CopyButton from "./CopyButton";

const wishlist = [
  {
    title: "At mealtime",
    items: ["Feeding high chair", "Lunch boxes", "Lunch bags", "Water bottles"],
  },
  {
    title: "Learning and play",
    items: [
      "Flash cards",
      "Shape sorters",
      "Stacking toys",
      "Building blocks",
      "Puzzles suitable for toddlers",
      "Picture books and board books",
      "Musical and interactive learning toys",
      "Age-appropriate educational toys",
    ],
  },
  {
    title: "Clothes and shoes",
    items: [
      "Clothes, 18–24 months",
      "Comfortable two-piece sets",
      "T-shirts and shorts",
      "Sleepwear",
      "Smart outfits for special occasions",
      "Sandals",
      "Sneakers",
      "Comfortable everyday shoes",
    ],
  },
];

export default function Gifts() {
  return (
    <section id="gifts" className="scroll-mt-4 px-6 pt-20 md:pt-32">
      <div className="mx-auto max-w-[34rem]">
        <p className="reveal font-display text-lg italic text-accent">
          No pressure, no obligation
        </p>
        <h2 className="reveal mt-3 font-display text-[2.6rem] leading-[1.02] font-[450] tracking-[-0.025em] md:text-6xl">
          Gift the Chief
        </h2>
        <div className="story mt-10">
          <p className="reveal">
            If you’d like to bless the birthday boy, we’ve put together a little
            guide to make things easier. Just love, in whatever form you choose
            to give it.
          </p>
        </div>
      </div>

      <figure className="reveal mx-auto mt-14 max-w-[24rem]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_var(--shadow)]">
          <Image
            src={theChief}
            alt="Enuma in a wine velvet robe embroidered with lions, red cap and coral beads"
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 24rem, 88vw"
            className="photo object-cover object-[55%_35%]"
          />
        </div>
        <figcaption className="mt-3 text-center font-display text-[0.95rem] italic text-ink-soft">
          The Chief himself.
        </figcaption>
      </figure>

      <div className="mx-auto mt-16 max-w-[34rem]">
        <h3 className="reveal font-display text-3xl tracking-[-0.015em]">
          Something to unwrap
        </h3>
        <div className="story mt-4">
          <p className="reveal">
            If you’d rather buy something the Chief can unwrap, use, wear, play
            with or eventually destroy, these would be very welcome.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {wishlist.map((group) => (
            <div key={group.title} className="reveal">
              <h4 className="font-display text-xl italic text-accent">
                {group.title}
              </h4>
              <ul className="mt-3 border-b border-line text-[1.05rem]">
                {group.items.map((item) => (
                  <li key={item} className="border-t border-line py-2.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="story mt-10">
          <p className="reveal">
            Basically, if it’s useful, educational, fun, adorable or something
            that will help Mum survive toddlerhood… we’re listening.
          </p>
        </div>

        <h3 className="reveal mt-20 font-display text-3xl tracking-[-0.015em]">
          Or, let Mum handle it
        </h3>
        <div className="story mt-4">
          <p className="reveal">
            If you’re thinking “I love this list, but honestly, I’d rather just
            send something”, we completely understand. Cash gifts are very
            welcome too. They go towards Enuma’s growing needs, future
            purchases, savings and all the little expenses that come with
            raising a very active one-year-old who has apparently decided that
            everything in the house belongs to him.
          </p>
        </div>

        <div className="reveal mt-8 rounded-[1.75rem] bg-paper-deep p-6">
          <p className="text-ink-soft">First Bank</p>
          <p className="mt-1 font-display text-[2.4rem] leading-none tracking-[0.02em] tabular-nums select-all">
            3238686897
          </p>
          <p className="mt-3 text-[1.05rem] leading-snug">
            Nnanna-Jnr Okoro Enuma Ethelbert
          </p>
          <CopyButton value="3238686897" />
        </div>

        <p className="reveal mt-6 font-display text-lg italic text-ink-soft">
          Every gift, whether big or small, is deeply appreciated.
        </p>
      </div>
    </section>
  );
}
