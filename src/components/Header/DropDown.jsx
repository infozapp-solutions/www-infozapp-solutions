import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DropDown = () => {
  return (
    <li className="relative dropOne">
      <div id="nav" className="cursor-pointer py-2">
        Drop Down
        <KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />
      </div>

      {/* //main drop down menu  */}
      <ul
        id="shadow"
        className="relative w-full lg:absolute lg:top-9 lg:w-[12rem] py-2 hidden 
        flex-col bg-white dropOneSubmenu"
      >
        <li id="dropDown">Drop Down 1</li>

        <li className="relative drop2">
          <div id="dropDown" className="flex justify-between items-center">
            Drop Down 2
            <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
          </div>

          {/* second drop down menu  */}
          <ul
            id="shadow"
            className="relative w-full top-2 lg:absolute lg:left-[-12rem] py-2 lg:w-[12rem]
             bg-white lg:top-0 hidden flex-col dropMenu2"
          >
            <li id="dropDown">Drop submenu 1</li>
            <li id="dropDown">Drop submenu 2</li>
            <li id="dropDown">Drop submenu 3</li>
            <li id="dropDown">Drop submenu 4</li>
          </ul>
        </li>

        <li id="dropDown">Drop Down 3</li>
        <li id="dropDown">Drop Down 4</li>
      </ul>
    </li>
  );
};

export default DropDown;
