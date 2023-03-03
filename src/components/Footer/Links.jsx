import React from "react";
import { links } from "./data";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Links = () => {
  return (
    <div className="flex sm:items-center flex-col gap-5 sm:flex-row sm:gap-20">
      {links.map((l, i) => (
        <div key={i}>
          <h1
            className="font-raleway font-bold text-md relative after:content-['']
          after:absolute after:left-0 after:border-[1.5px] after:bottom-[-0.5rem] after:border-red-500
          after:w-[1.5rem] mb-2 after:rounded-full"
          >
            {l.title}
          </h1>
          <ul>
            {l.sub.map((menu, i) => (
              <li key={i} className="text-sm leading-8 flex items-center">
                <KeyboardArrowRightIcon sx={{ fontSize: "1.2rem" }} />
                <a href={menu.path} className="text-gray-400 hover:text-white">
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Links;
