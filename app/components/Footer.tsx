import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <section className="flex_it my-5">
      <div className="md:text-3xl font-bold">UZUSINACHI II OF IHIAGWA</div>
      <div className="flex items-center gap-2">
        <MdOutlineCopyright /> <span>2026</span>
      </div>
    </section>
  );
};

export default Footer;
