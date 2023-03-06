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
      title: "Requirement gathering",
      desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      icon: <ArticleIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title: "Design the product",
      desc: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
      icon: <ImageIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title: "Develop the product",
      desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      icon: <ViewInArOutlinedIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title: "Deploy the product",
      desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      icon: <ShieldOutlinedIcon sx={{ fontSize: "2.5rem" }} />,
    },
  ];
  return (
    <div id="about" className="clipBg text-white mt-[10rem]">
      <div className="size flex flex-col justify-center lg:flex-row py-[2rem] gap-7">
        <div className="w-30 text-center lg:text-left">
          <h1 className="text-4xl font-bold font-raleway w-full lg:w-[26rem]">
            We are a new Indian startup
          </h1>
          <p className="pt-[2rem] w-full lg:w-[27rem]">
            We are a leading provider of innovative software solutions. 
            We are passionate about assisting our customers in reaching their objectives, 
            and we strive to provide the best service possible. 
            Our team of experts is always available to provide advice and support, 
            and we are constantly developing new and improved products to meet the needs of our customers. 
            We are committed to making a difference in the world as a company, 
            and we are proud to be able to provide our products and services to people all over the world
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
