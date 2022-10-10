import React from "react";
import Option from "../Option/Option";

const Quiz = ({ quiz }) => {
  const { id, options, question, correctAnswer } = quiz;
  return (
    <div className="border">
      <h2>{question}</h2>
      <div className="grid grid-cols-2">
        {options.map((option, ind) => (
          <Option key={ind} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
