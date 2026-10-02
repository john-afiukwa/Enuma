import React from "react";
import HeaderCaption from "./HeaderCaption";

const Gifting = () => {
  return (
    <section id="gifting-section">
      <HeaderCaption
        title="GIFT THE CHIEF"
        className="text-center text-[23px]"
      />
      <div className="text-left text_warm md:text-justify gift_font">
        If you’d like to bless the birthday boy, we’ve put together a little
        guide to make things easier. <p className="mt-5" /> No pressure. No
        obligation. <p className="mt-5" /> Just love in whatever form you choose
        to give it. <p className="mt-5" />
        <h1 className="text_heading font-bold text-xl text-center">TANGIBLE GIFTS</h1>
        If you’d rather buy something the Chief can unwrap, use, wear, play with
        or eventually destroy — these would be very welcome:
      </div>
      <div className="grid md:grid-cols-3 gap-10 my-5 ">
        <div className="md:pl-8">
          <p className="font-bold">MEALTIME</p>
          <ul className="list-disc">
            <li>Feeding high chair</li>
            <li>Lunch boxes</li>
            <li>Lunch bags</li>
            <li>Water bottles</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">LEARNING & PLAY</p>
          <ul className="list-disc">
            <li>Flash cards</li>
            <li>Shape sorters</li>
            <li>Stacking toys</li>
            <li>Building blocks</li>
            <li>Puzzles suitable for toddlers</li>
            <li>Picture books and board books</li>
            <li>Musical/interactive learning toys</li>
            <li>Age-appropriate educational toys</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">CLOTHES & SHOES</p>
          <ul className="list-disc">
            <li>Clothes 18–24 months</li>
            <li>Comfortable two-piece sets</li>
            <li>T-shirts and shorts</li>
            <li>Sleepwear</li>
            <li>Smart outfits for special occasions</li>
            <li>Sandals</li>
            <li>Sneakers</li>
            <li>Comfortable everyday shoes</li>
          </ul>
        </div>
      </div>{" "}
      <p className="text_warm text-justify gift_font">
        Basically, if it’s useful, educational, fun, adorable or something that
        will help Mum survive toddlerhood… we’re listening.
      </p>
      <div className="flex_it gift_font my-5">
        <h1 className="font-bold text-xl">CASH GIFTS</h1>
        <p className="text_warm text-justify mt-2">
          If you’re thinking: “I love this list, but honestly, I’d rather just
          send something and let Mum handle it”, we completely understand.{" "}
          <p className="mt-5" /> Cash gifts are very welcome too. They can go
          towards Enuma’s growing needs, future purchases, savings and all the
          little expenses that come with raising a very active one-year-old who
          has apparently decided that everything in the house belongs to him.
        </p>

        <div className="details_font flex_it gap-2 md:text-3xl font-bold p-8 shadow-lg rounded-xl text-center">
          <p>NNANNA-JNR OKORO ENUMA ETHELBERT</p>
          <p>FIRST BANK</p>
          <p>3238686897</p>
        </div>

        <p className="text_warm mt-3">
          Every gift, whether big or small, is deeply appreciated.
        </p>
      </div>
    </section>
  );
};

export default Gifting;
