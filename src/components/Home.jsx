import React from "react";
import Counts from "./Counts/Counts";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Information from "./Information/Information";
import Logo from "./LogosSlider/Logo";
import Service from "./Services/Service";
import Testimonials from "./Testimonials/Testimonials";
import Pricing from "./Pricing/Pricing";
import Questions from "./Questions/Questions";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Logo />
      <About />
      <Counts />
      <Information />
      <Service />
      <Testimonials />
      <Pricing />
      <Questions />
    </div>
  );
};

export default Home;
