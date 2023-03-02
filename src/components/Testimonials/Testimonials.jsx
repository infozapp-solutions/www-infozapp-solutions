import React from "react";
import Slider from "react-slick/lib/slider";
import { settings } from "./Slider";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonials = () => {
  const cards = [
    {
      user: "Math Brandon",
      position: "web developer",
      comment: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius distinctio maiores ex, 
        nihil iste atque inventore obcaecati ab modi. 
        Id sed dolor ullam possimus consequuntur, repellendus maiores dignissimos aliquam eaque?`,
      img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/testimonials/testimonials-1.jpg",
    },
    {
      user: "Saol Goodman",
      position: "Manager",
      comment: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius distinctio maiores ex, 
        nihil iste atque inventore obcaecati ab modi. 
        Id sed dolor ullam possimus consequuntur, repellendus maiores dignissimos aliquam eaque?`,
      img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/testimonials/testimonials-4.jpg",
    },
    {
      user: "Sara Wilsson",
      position: "designer",
      comment: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius distinctio maiores ex, 
        nihil iste atque inventore obcaecati ab modi. 
        Id sed dolor ullam possimus consequuntur, repellendus maiores dignissimos aliquam eaque?`,
      img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/testimonials/testimonials-2.jpg",
    },
    {
      user: "Math Brandon",
      position: "web developer",
      comment: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius distinctio maiores ex, 
        nihil iste atque inventore obcaecati ab modi. 
        Id sed dolor ullam possimus consequuntur, repellendus maiores dignissimos aliquam eaque?`,
      img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/testimonials/testimonials-1.jpg",
    },
    {
      user: "Saol Goodman",
      position: "Manager",
      comment: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius distinctio maiores ex, 
        nihil iste atque inventore obcaecati ab modi. 
        Id sed dolor ullam possimus consequuntur, repellendus maiores dignissimos aliquam eaque?`,
      img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/testimonials/testimonials-4.jpg",
    },
    {
      user: "Sara Wilsson",
      position: "designer",
      comment: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius distinctio maiores ex, 
        nihil iste atque inventore obcaecati ab modi. 
        Id sed dolor ullam possimus consequuntur, repellendus maiores dignissimos aliquam eaque?`,
      img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/testimonials/testimonials-2.jpg",
    },
  ];

  const card = cards.map((card, i) => (
    <div key={i} className="my-6">
      <div className="w-[90%] mx-auto box p-9 rounded-xl">
        <div className="flex items-center gap-4">
          <img className="h-20 rounded-md" src={card.img} alt="cartImg" />
          <div>
            <h1 className="text-xl font-semibold font-raleway leading-4">
              {card.user}
            </h1>
            <span className="text-slate-400 text-sm font-semibold capitalize">
              {card.position}
            </span>
          </div>
        </div>
        <div>
          <p className="mt-4 text-gray-600 italic">
            <span className=" text-red-200">
              <FormatQuoteIcon sx={{ fontSize: "2.2rem" }} />
            </span>
            {card.comment}
            <span className="text-red-200">
              <FormatQuoteIcon sx={{ fontSize: "2.2rem" }} />
            </span>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="size py-16">
      <div className="text-center">
        <h1 className="heading">testimonials</h1>
        <p className="py-3 text-base">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        </p>
      </div>

      {/* slider  */}
      <div className="mr-[1rem]">
        <Slider {...settings}>{card}</Slider>
      </div>
    </div>
  );
};

export default Testimonials;
