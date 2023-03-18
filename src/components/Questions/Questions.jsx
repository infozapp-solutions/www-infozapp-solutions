import React from "react";
import { questions } from "./data";
import SingleQues from "./SingleQues";

const Questions = () => {

  return (
    <div className="size py-16">
      <div className="text-center">
        <h1 className="heading">Frequently Asked Questions</h1>
        <p className="py-3 text-base">
          Based on over three years of experience and questions we receive from our clients, 
          we wrote down a list of Frequently Asked Questions (FAQ).
        </p>
      </div>

      <div>
        {questions.map((q, i) => (
          <SingleQues q={q} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
