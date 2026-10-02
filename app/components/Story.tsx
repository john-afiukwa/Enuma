import { GiAlienFire } from "react-icons/gi";
import HeaderCaption from "./HeaderCaption";

const Story = () => {
  return (
    <section id="story-section">
      <HeaderCaption title="OUR STORY" />

      <h2 className="flex justify-center font-bold md:text-2xl text-center">
        THE LITTLE BOY WHO CAME ALONG AND CHANGED EVERYTHING{" "}
      </h2>

      <div className="global_font text_warm md:text-lg md:grid md:grid-cols-2 gap-10 my-5">
        <div className="text-center md:text-justify">
          It started with a tiny baby, a million hopes, a few prayers and
          absolutely no idea how quickly time would move. Then came Enuma. Our
          little boy arrived and suddenly, life had a new soundtrack — tiny
          cries, sleepy stretches, unexpected giggles, midnight wake-ups, messy
          feeds, countless cuddles and the beautiful kind of tiredness that
          somehow still makes you smile. <p className="mt-5" /> We watched him discover his hands. Then
          his feet. Then food… The most amazing part. Every new food felt
          like a new discovery. His favorite food changed every day. Then the
          fascinating concept of self feeding and feeding another person. He
          learned to smile, laugh, sit, crawl, explore, reach for everything he
          wasn’t supposed to touch and give us that innocent little face that
          somehow makes all the mischief completely forgivable.
        </div>

        <div className="text-center md:text-justify">
          <p className="mt-5 md:mt-0"/>We watched a tiny baby slowly become this curious, cheeky little boy
          with a personality of his own. And somewhere between the first bath
          and the first laugh, the sleepless nights and the countless cuddles,
          we realised something: We weren’t just watching him grow. He was
          growing us too. He taught us patience we didn’t know we had, joy we
          didn’t know could exist in such small packages, and a kind of love
          that doesn’t really have adequate words. And now, somehow… ENUMA TURNS
          ONE tomorrow! <p className="mt-5"/> Twelve months. 365 days of little milestones,
          big emotions, beautiful memories, answered prayers, unexpected lessons
          and a whole lot of love. It feels like yesterday we were holding him
          for the first time. And yet here we are, planning his first birthday.
          Time, please.
        </div>
      </div>
    </section>
  );
};

export default Story;
