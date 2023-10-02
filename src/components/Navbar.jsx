import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (navTitle) => {
    setActive(navTitle);
    setToggle(false); // Close the mobile menu when a link is clicked
  };

  const renderNavLinks = () => {
    return (
      <ul className="list-none hidden sm:flex flex-row gap-14 absolute right-20">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title ? "text-glow" : "text-slate-200"
            } hover:text-glow ease-in-out duration-300 text-[26px] cursor-pointer`}
            onClick={() => handleNavLinkClick(nav.title)}
            onMouseEnter={() => setActive(nav.title)}
            onMouseLeave={() => setActive("")}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex sm:py-20 py-10 fixed top-0 z-20 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {renderNavLinks()}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl 
            }`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-inter font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-glow" : "text-white"
                  }`}
                  onClick={() => handleNavLinkClick(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
