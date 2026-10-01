import HeaderCaption from "./HeaderCaption";
import { LuCalendarDays } from "react-icons/lu";

import E1 from "../../public/E1.jpeg";
import E2 from "../../public/E2.jpeg";
import E3 from "../../public/E3.jpeg";
import E4 from "../../public/E4.jpeg";
import Invite from "../../public/invite2.jpeg";
import Image from "next/image";

const Invitation = () => {
  return (
    <section id="invitation-section">
      <HeaderCaption title="INVITATION" />

      <h2 className="flex justify-center font-bold md:text-2xl text-xl text-center">
        ONE YEAR DESERVES MORE THAN A PARTY
      </h2>

      <div className="body_font text-lg my-5 text-justify">
        His birthday is Saturday, 3rd Oct. and while we will absolutely
        celebrate with cake, laughter, pictures and all the first-birthday
        excitement… We also want to pause. Because before the decorations,
        before the cake and before everyone starts asking how the baby became so
        big so quickly, there is one thing we know: This year has been a gift.
        So on Sunday, October 4th, we would love for you to join us as we give
        thanks to God for the gift of Enuma, for keeping him, for watching over
        him and for bringing our little family safely to this beautiful
        milestone.
      </div>

      <div className="flex items-center justify-center my-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
          <Image src={E1} alt="Enuma" className="photos" />
          <Image src={E2} alt="Enuma" className="photos" />
          <Image src={E3} alt="Enuma" className="photos" />
          <Image src={E4} alt="Enuma" className="photos" />
        </div>
      </div>

      <div className="my-10">
        <h2 className="flex justify-center font-bold text-2xl mb-5">
         THANKSGIVING
        </h2>

        <div className="lg:flex flex flex-col items-center justify-center">
          <div>
            <Image
              src={Invite}
              alt="invite"
              width={350}
              className="rounded-lg"
            />
          </div>

          <div className="flex flex_it p-10 gap-5 font-bold">
            <div className="flex_it">
              <LuCalendarDays size={40} />
              <p className="text-center">Thanksgiving Service</p>
            </div>
            <h2 className="text-3xl text-center">Sunday 4th October 2026</h2>
            <p className="text-2xl text-center">
              St. Donald&apos;s Catholic Church, Karu.
            </p>
            <h2 className="md:text-center text-center font-bold text-lg">
              Come as you are. Come with your prayers. Come with your love. Come
              celebrate our boy with us.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
