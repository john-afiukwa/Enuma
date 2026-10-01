import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Invitation from "./components/Invitation";
import Gifting from "./components/Gifting";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />

        <Hero />
      </header>
      <div className="lg:mx-35 mx-15">
        <Story />
        <hr />
        <Invitation />
        <hr />
        <Gifting />
        <hr />
        <Summary />
      </div>
      <hr />
      <Footer />
    </>
  );
}
