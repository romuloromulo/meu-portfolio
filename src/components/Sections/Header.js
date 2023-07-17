import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import NavbarC from "../Layout/Navbar";
import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const socialLinks = [
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/romuloromulo",
  },

  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/r%C3%B4mulo-rodrigues-viana-380ba5248/",
  },

  {
    id: 3,
    icon: <IoLogoWhatsapp />,
    url: "https://wa.me/5598982182264?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os+de+desenvolvedor+front-end%21",
  },
];

function Header() {
  const typeText = (
    <Typewriter
      options={{ autoStart: true, loop: true }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Desenvolvedor front-end")
          .pauseFor(2500)
          .deleteAll()
          .typeString("React JS")
          .pauseFor(2500)
          .deleteChars(2)
          .typeString("Native")
          .pauseFor(2500)
          .deleteAll()
          .start();
      }}
    />
  );
  // <div className="bg-orange-500 mt-8 text-center flex flex-col items-center md:text-start lg:items-start md:items-start ">

  return (
    <section id="Home">
      <div className={`container mx-auto md:flex-col md:flex lg:items-center`}>
        <NavbarC />
        <div className="flex flex-col items-center md:flex-row justify-center h-full w-full lg:py-10 lg:px-10  lg:gap-14">
          <div className=" w-3/5 items-center  md:ml-8 lg:translate-y-[-4rem] lg:translate-x-12 flex flex-col justify-center md:w-2/5  md:items-start	mt-10 h-ful md:text-start lg:items-start md:items-startl lg:w-2/5">
            <h1
              className={`tracking-tighter font-medium text-3xl lg:text-6xl text-normal text-dim-gray mt-12 md:mt-0 md:text-5xl sm:text-4xl`}>
              Olá, eu sou{" "}
              <span className="font-semibold  transition ease-in-out delay-250 text-cool-black-100 ">
                Rômulo.
              </span>
            </h1>
            <div>
              <p className="md:mt-4 text-normal font-semibold text-cool-black-200 text-md sm:text-lg mt-1 lg:text-xl md:text-xl  ">
                {typeText}
              </p>
            </div>
            <div>
              <ul className="flex gap-4 sm:gap-2 sm:mt-[-rem]">
                {socialLinks.map((link) => (
                  <a
                    href={link.url}
                    target="__blank"
                    key={link.id}
                    className="text-dim-gray-100 hover:text-cool-black-300 mt-4 dark:hover:text-indigo-400 cursor-pointer  dark:bg-ternary-dark shadow-sm p-1 duration-300 ">
                    <li className="text-2xl sm:text-2xl md:text-3xl">
                      {link.icon}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-100  mt-16 translate-y-[-4rem]  mb-5 md:mb-0 w-4/5 md:mt-40 md:w-2/3 flex item-center justify-center text-right sm:mt-15 ">
            <img
              src={developerDark}
              className="w-full h-full"
              alt="Developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
