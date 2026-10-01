import Image from "next/image";
import Enumahero from "../../public/enuma-hero.png";
import Overlay from "../../public/overlay.jpeg";
import TextOverlay from "../../public/text-overlay.jpeg"

const Hero = () => {
  return (
    <div id="hero-section" className="h-screen w-full">
      <Image
        src={Enumahero}
        alt="Enuma-Hero"
        className="relative w-full h-screen object-cover"
      />
        <Image src={Overlay} alt="overlay" className="lg:w-130 sm:w-60 md:w-90 w-60 absolute bottom-120 left-20 lg:bottom-40 md:bottom-50 sm:bottom-85 sm:left-20 lg:left-15" />
        <Image src={TextOverlay} alt="overlay" className="lg:w-130 sm:w-60 md:w-90 w-60 absolute bottom-100 left-20 lg:bottom-10 md:bottom-30 sm:bottom-70 sm:left-20 lg:left-15" />
    
    </div>
  );
};

export default Hero;
