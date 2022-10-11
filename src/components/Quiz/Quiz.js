import React, { useState } from "react";
import Option from "../Option/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz, ind }) => {
  const [eye, setEye] = useState(false);
  const { id, options, question, correctAnswer } = quiz;

  const handleCorrect = opt => {
    return opt === correctAnswer ? alert(`this is correct ans`) : alert(`this is false ans`);
  }

  return (
    <div className=" shadow-2xl relative w-4/5 m-auto px-40 my-12">
      <div onClick={() => setEye(!eye)} className="absolute right-24 top-3">
        {eye ? (
          <FontAwesomeIcon icon={faEyeSlash}/>
        ) : (
          <FontAwesomeIcon icon={faEye}/>
        )}
      </div>
      <h2 className="text-2xl font-bold text-amber-700 mb-8">
        Quiz {ind + 1}: {}
        {question}
      </h2>
      <div className="grid md:grid-cols-2 pb-5">
        {options.map((option, ind) => (
          <Option key={ind} id={id} ind={ind} option={option} handleCorrect={handleCorrect}></Option>
        ))}
      </div>
      <div className="pb-10 text-blue-600">
      {eye === true && <h2 className="font-bold text-xl"> The Correct Answer Is: <span className="text-green-600">{correctAnswer}</span></h2>}

      </div>
    </div>
  );
};

export default Quiz;
