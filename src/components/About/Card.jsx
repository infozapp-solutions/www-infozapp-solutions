import React from "react";

const Card = ({ card }) => {
  const { icon, title, desc } = card;
  return (
    <div className="text-center lg:text-left">
      <span className="text-red-500">{icon}</span>
      <h1 className="text-xl py-2 font-bold font-raleway">{title}</h1>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
};

export default Card;
