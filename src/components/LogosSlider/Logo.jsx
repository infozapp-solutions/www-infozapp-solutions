import React from "react";
import Slider from "react-slick/lib/slider";
import { settings } from "./Slider";
import "./Logo.scss";

const Logo = () => {
  const logo = [
    "../../images/logo.png",
    "../../images/logo.png",
    "../../images/logo.png",
    "../../images/logo.png",
    "../../images/logo.png",
    "../../images/logo.png",
    "../../images/logo.png",
    "../../images/logo.png",
  ];

  const logoSlider = logo.map((item, i) => (
    <div key={i}>
      <img
        className="h-10 grayscale cursor-pointer hover:grayscale-0 mx-auto"
        src={item}
        alt="logos"
      />
    </div>
  ));
  return (
    <div className="size my-14">
      <Slider {...settings}>{logoSlider}</Slider>
    </div>
  );
};

export default Logo;
