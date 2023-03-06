import React from "react";
import Counts from "./Counts/Counts";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Information from "./Information/Information";
import Logo from "./LogosSlider/Logo";
import Service from "./Services/Service";
// import Testimonials from "./Testimonials/Testimonials";
// import Pricing from "./Pricing/Pricing";
import Questions from "./Questions/Questions";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Copyright from "./Copyright/Copyright";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Logo />
      <About />
      <Counts />
      <Information />
      <Service />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Questions />
      <Team />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
