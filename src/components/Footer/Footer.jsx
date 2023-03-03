import React from "react";
import Links from "./Links";

const Footer = () => {
  return (
    <div className="bg-footer text-white py-5 lg:py-16">
      <div className="size flex flex-col lg:flex-row justify-between gap-5 lg:gap-3">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            Presento<span className="text-red-400">.</span>
          </h1>
          <div className="font-raleway text-sm leading-6 mt-2">
            <p>A108 Adam Street </p>
            <p>New York, NY 535022</p>
            <p>United States </p>
          </div>
          <div className="font-raleway text-sm mt-3">
            <p>
              <b>Phone:</b> +1 5589 55488 55
            </p>
            <p>
              <b>Email:</b> info@example.com
            </p>
          </div>
        </div>

        <div className="flex-[1.3] mt-2">
          <Links />
        </div>

        <div className="lg:flex-1">
          <h1
            className="font-raleway font-bold text-md relative after:content-['']
          after:absolute after:left-0 after:border-[1.5px] after:bottom-[-0.5rem] after:border-red-500
          after:w-[1.5rem] mb-2 after:rounded-full"
          >
            Join Our Newsletter
          </h1>

          <p className="mt-3">
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>

          <div className="my-7 bg-white flex items-center overflow-hidden rounded-md w-fit">
            <input
              type="text"
              className="bg-transparent w-full py-2 px-3 text-black"
            />
            <button className="bg-red-500 py-2 px-4">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
