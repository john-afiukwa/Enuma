"use client";

import Link from "next/link";
import Enuma from "../../public/enuma.png";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isMenu, setIsMenu] = useState(false);

  const setMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div
      id="animated-navbar"
      className="text_blue bg-slate-100 fixed z-10 top-0 shadow-xl flex justify-between md:justify-around items-center md:py-3 w-full md:px-0 px-10"
    >
      <Link
        href={"#hero-section"}
        className="nav_btn"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("hero-section");
        }}
      >
        <Image src={Enuma} alt="Enuma" className="w-30" />
      </Link>

      <div className="hidden md:flex justify-between items-center gap-6">
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("story-section");
          }}
          href={"#story-section"}
          className="nav_btn"
        >
          Our Story
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("invitation-section");
          }}
          href={"#invitation-section"}
          className="nav_btn"
        >
          Invitation
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("gifting-section");
          }}
          href={"#gifting-section"}
          className="nav_btn"
        >
          Gift the Chief
        </Link>
      </div>

      <div className="md:hidden text_blue cursor-pointer" onClick={() => setMenu()}>
        {isMenu ? (
          <TbLetterX className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </div>

      <div
        className={
          isMenu
            ? "fixed right-0 top-12 w-50 md:hidden h-auto bg-slate-100 pl-5 py-5 ease-in duration-500"
            : "fixed right-[-100%] top-0 ease-in duration-500"
        }
      >
        <div className="flex flex-col gap-6">
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("story-section");
              setMenu();
            }}
            href={"#story-section"}
            className="nav_btn-menu"
          >
            Our Story
          </Link>
          <Link
            onClick={(e) => {
              setMenu();
              e.preventDefault();
              scrollToSection("invitation-section");
            }}
            href={"#invitation-section"}
            className="nav_btn-menu"
          >
            Invitation
          </Link>
          <Link
            onClick={(e) => {
              setMenu();
              e.preventDefault();
              scrollToSection("gifting-section");
            }}
            href={"#gifting-section"}
            className="nav_btn-menu"
          >
            Gift the Chief
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
