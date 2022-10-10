import React from "react";
import Option from "../Option/Option";

const Quiz = ({ quiz, ind }) => {
  const { id, options, question, correctAnswer } = quiz;
  return (
    <div className=" shadow-2xl w-4/5 m-auto px-40 my-12">
      <h2 className="text-2xl font-bold text-amber-700 mb-8">Quiz {ind + 1}: {}{question}</h2>
      <div className="grid md:grid-cols-2">
        {options.map((option, ind) => (
          <Option key={ind} id={id} ind={ind} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
