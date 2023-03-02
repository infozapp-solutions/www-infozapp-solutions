import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import ImageIcon from "@mui/icons-material/Image";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import "./About.scss";
import Card from "./Card";

const About = () => {
  const cards = [
    {
      title: "Corporis voluptates sit",
      desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      icon: <ArticleIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title: "Labore consequatur",
      desc: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
      icon: <ImageIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title: "Ullamco laboris nisi",
      desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      icon: <ViewInArOutlinedIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title: "Beatae veritatis",
      desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      icon: <ShieldOutlinedIcon sx={{ fontSize: "2.5rem" }} />,
    },
  ];
  return (
    <div id="about" className="clipBg text-white mt-[10rem]">
      <div className="size flex flex-col justify-center lg:flex-row py-[2rem] gap-7">
        <div className="w-30 text-center lg:text-left">
          <h1 className="text-4xl font-bold font-raleway w-full lg:w-[26rem]">
            Voluptatem dignissimos provident quasi
          </h1>
          <p className="pt-[2rem] w-full lg:w-[27rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit
          </p>

          <div className="flex items-center justify-center lg:justify-start">
            <button
              className="border-2 border-red-500 mt-[2rem] py-2 px-7 rounded-full
            hover:bg-red-500 transition duration-500 text-sm flex items-center font-bold uppercase"
            >
              About Us <KeyboardArrowRightOutlinedIcon />
            </button>
          </div>
        </div>

        <div className="flex-1 cards mt-[3rem] lg:mt-0">
          {cards.map((card, i) => (
            <Card card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
