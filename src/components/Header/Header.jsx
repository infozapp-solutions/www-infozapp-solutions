import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./Header.scss";

const Header = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const nav = [
    {
      title: "Home",
      path: "#",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Services",
      path: "#service",
    },
    {
      title: "Portfolio",
      path: "#portfolio",
    },
    {
      title: "Team",
      path: "#team",
    },
    {
      title: "Blog",
      path: "#",
    },
  ];

  // scroll animation handle
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setScroll(true) : setScroll(false);
    });
  }, [scroll]);

  return (
    <header
      className={`sticky top-0 z-30 bg-white ${scroll ? "h-20" : "h-24"} 
      shadow-sm shadow-gray-400 flex items-center transition-all duration-500`}
    >
      <nav
        className="size flex items-center justify-between
        gap-4 lg:justify-center xl:justify-between"
      >
        {/* logo part  */}
        <img className="text-2xl md:text-3xl font-bold tracking-wide" src={"/images/app-logo.png"} alt="app logo">

          {/* Presento<span className="text-red-400">.</span> */}
        </img>

        <ul className="flex items-center gap-7">
          <div
            className={`${showMenu ? "flex" : "hidden"} 
              lg:flex fixed inset-0 bg-slate-800/90 lg:static`}
          >
            {/* close bar menu in mobile version  */}
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-6 right-3 text-white cursor-pointer lg:hidden"
            >
              <ClearIcon sx={{ fontSize: "1.5rem" }} />
            </span>
            <div
              className="fixed bg-white left-4 right-4 top-20 bottom-4 p-5 flex flex-col
              gap-4 lg:gap-6 lg:p-0 xl:gap-8 lg:flex-row lg:items-center lg:static"
            >
              {nav.map((n, i) => (
                <li
                  onClick={() => setActiveNav(n.title)}
                  className={activeNav === n.title ? "text-red-400 " : ""}
                  id="nav"
                  key={i}
                >
                  <a href={n.path}>{n.title}</a>
                </li>
              ))}

              {/* //drop down  */}
              <DropDown />

              <li
                id="nav"
                onClick={() => setActiveNav("Contact")}
                className={activeNav === "Contact" ? "text-red-400" : ""}
              >
                <a href="#contact">Contact</a>
              </li>
            </div>
          </div>

          {/* <li>
            <a
              className="font-semibold bg-red-600 py-2 px-4 md:py-2.5 md:px-7 text-white 
              rounded-md text-sm hover:bg-black"
              href="#home"
            >
              Get Started
            </a>
          </li> */}

          {/* bar icon */}
          <span
            onClick={() => setShowMenu(true)}
            className="lg:hidden cursor-pointer"
          >
            <MenuIcon sx={{ fontSize: "2.5rem" }} />
          </span>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
