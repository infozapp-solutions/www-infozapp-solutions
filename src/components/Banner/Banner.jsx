import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div id="home" className="w-full text-white">
      <div id="banner" className="flex items-center mt-[-5rem] pt-[8rem]">
        <div
          className="max-w-screen-xl sm:pt-0 w-[90%] md:w-[90%] lg:w-[85%] 
          xl:w-[90%] mx-auto font-raleway text-center sm:text-left"
        >
          <h1 className="text-3xl sm:text-5xl font-bold sm:leading-[4rem] xl:w-[35rem]">
            We transform your concepts into digital products
          </h1>

          <p className="text-2xl pt-5 sm:pt-0 sm:text-3xl xl:w-[42rem]">
            We are a group of smart professionals who will help your product reach new heights
          </p>

          <div className="text-center sm:text-left lg:text-left mt-10">
            {/* <button
              id="bannerBtn"
              className=" bg-red-500 py-2.5 px-8 rounded-md
              transition duration-500"
            >
              Contact us
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
