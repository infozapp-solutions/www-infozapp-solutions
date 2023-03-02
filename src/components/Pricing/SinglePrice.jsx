import React from "react";

const SinglePrice = ({ price }) => {
  return (
    <div
      className={`${price.type === "Business" ? "bg-red-500" : "bg-card"}
        flex flex-col justify-center items-center gap-4 py-[2rem] rounded-xl`}
    >
      <h6 className="uppercase text-lg font-semibold">{price.type}</h6>
      <div className="relative text-4xl">
        <span className="absolute text-base left-[-0.6rem]">$</span>
        {price.price}
        <span className="text-base font-light"> / month</span>
      </div>

      {/* sub menu  */}
      <div className="flex flex-col items-center gap-3">
        {price.services.map((service, i) => (
          <p
            key={i}
            className={`${!service.available && "line-through text-slate-400"}`}
          >
            {service.title}
          </p>
        ))}
      </div>

      <div className="mt-8">
        <button
          className="border-2 border-gray-500 py-[0.6rem] 
                    capitalize font-raleway text-sm px-10 rounded-md hover:border-white"
        >
          buy now
        </button>
      </div>
    </div>
  );
};

export default SinglePrice;
