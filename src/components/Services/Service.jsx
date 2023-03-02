import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Services.scss";

const Service = () => {
  const cards = [
    {
      title: "Lorem Ipsum",
      desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      icon: <EmailOutlinedIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Lorem Ipsum",
      desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      icon: <SignalCellularAltOutlinedIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Lorem Ipsum",
      desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      icon: <WbSunnyOutlinedIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Lorem Ipsum",
      desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      icon: <CreditCardOutlinedIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Lorem Ipsum",
      desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      icon: <CenterFocusStrongIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Lorem Ipsum",
      desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      icon: <CalendarMonthIcon sx={{ fontSize: "3rem" }} />,
    },
  ];
  return (
    <div id="service" className="clipBg text-white mt-[7rem]">
      <div className="size">
        <div className="text-center">
          <h1
            className="text-4xl pb-4 uppercase font-semibold relative after:content-[''] inline-block
            after:border-b-[3px] after:border-red-500 after:w-12  after:bottom-0  after:left-1/3 after:absolute"
          >
            services
          </h1>
          <p className="py-3 text-base">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
        </div>

        <div className="cards my-7">
          {cards.map((card, i) => (
            <div
              key={i}
              className="w-full bg-card flex gap-[1rem] p-7 rounded-md"
            >
              <span className="text-red-500">{card.icon}</span>
              <div>
                <h1 className="text-lg text-raleway font-bold pb-3">
                  {card.title}
                </h1>
                <p className="text-md">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
