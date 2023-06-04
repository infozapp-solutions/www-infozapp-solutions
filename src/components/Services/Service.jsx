import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import "./Services.scss";

const Service = () => {
  const cards = [
    {
      title: "Apps / web development",
      desc: "We develop Cross-platform apps that can work in different environments thanks to a unique blend of native and web app technologies.",
      icon: <MobileFriendlyOutlinedIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Apps / web maintenance",
      desc: "We maintain all previously developed applications as well as customer-requested apps, providing maintenance such as bug fixes, enhancements, and so on.",
      icon: <MobileFriendlyOutlinedIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Talent pool management",
      desc: "Hire a tech talent team for your project as soon as possible. The software industry places a high value on having the right team for the job.",
      icon: <GroupsOutlinedIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "UI/UX Design",
      desc: "Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to Foznik info solutions's UI and UX services.",
      icon: <CreditCardOutlinedIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "IT consulting",
      desc: "Use the expertise and deep tech background of the best minds at Foznik info solutions to create a comprehensive IT strategy for a digital and technological transformation of your organization.",
      icon: <CenterFocusStrongIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Training and placement",
      desc: "For the necessary professionals, we even provide training and placement services.",
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
          {/* <p className="py-3 text-base">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p> */}
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
