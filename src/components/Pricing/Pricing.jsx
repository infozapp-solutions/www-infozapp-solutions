import React from "react";
import { prices } from "./Prices";
import "./Pricing.scss";
import SinglePrice from "./SinglePrice";

const Pricing = () => {
  return (
    <div className="clipBg text-white mt-20">
      <div className="size">
        <div className="text-center">
          <h1 className="heading">pricing</h1>
          <p className="py-3 text-base">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
        </div>

        <div id="pricing" className="mt-6">
          {prices.map((price, i) => (
            <SinglePrice key={i} price={price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
