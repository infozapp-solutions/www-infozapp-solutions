import React from "react";
import { questions } from "./data";
import SingleQues from "./SingleQues";

const Questions = () => {

  return (
    <div className="size py-16">
      <div className="text-center">
        <h1 className="heading">Frequently Asked Questions</h1>
        <p className="py-3 text-base">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
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
