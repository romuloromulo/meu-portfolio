import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { HashLink } from "react-router-hash-link";
import classes from "./navbar.module.css";

function NavbarC() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 700 && setOpenNav(false)
    );
    console.log(window.innerWidth);
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -140;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  z-2 lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-md text-dim-gray hover:text-cool-black-100">
        <HashLink
          smooth
          to="/#Home"
          id="style-2"
          data-replace=" // home"
          className={`flex items-center z-10  ${classes.linkNav}`}>
          // home
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium  text-md  text-dim-gray hover:text-cool-black-100">
        <HashLink
          smooth
          scroll={(el) => scrollWithOffset(el)}
          to="/#Sobre"
          id="style-2"
          data-replace="// sobre mim"
          className={`flex items-center ${classes.linkNav}`}>
          <span>// sobre mim</span>
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-dim-gray text-md hover:text-cool-black-100">
        <HashLink
          smooth
          scroll={(el) => scrollWithOffset(el)}
          to="/#Portfolio"
          href="#"
          id="style-2"
          data-replace="// portfólio"
          className={`flex items-center ${classes.linkNav}`}>
          // portfólio
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium  text-dim-gray text-md hover:text-cool-black-100">
        <HashLink
          smooth
          to="/#Contato"
          id="style-2"
          data-replace="// contato"
          className={`flex items-center ${classes.linkNav}`}>
          // contato
        </HashLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="z-10 border-transparent rounded-b-md rounded-t-none fixed shadow-none  w-48 lg:w-[55%] bg-cool-black-300 lg:rounded-full lg:bg-opacity-20 lg:border lg:border-cool-black-200  lg:bg-cool-black-700 lg:h-20 lg:mt-8 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="flex  items-center shadow-none lg:justify-center  lg:items-center lg:mt-2">
        <div className="flex items-center gap-4">
          <div className="relative hidden rounded-lg lg:block">{navList}</div>

          <IconButton
            variant="text"
            className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}

export default NavbarC;
