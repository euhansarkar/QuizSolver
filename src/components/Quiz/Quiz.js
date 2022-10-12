import React, { useState } from "react";
import Option from "../Option/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz, ind }) => {
  const [eye, setEye] = useState(false);
  const { id, options, question, correctAnswer } = quiz;


  const notify = () => {
    toast.error('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }


  const handleCorrect = opt => {
    return opt === correctAnswer ? 
  alert(`this is correct answer`)
        :  alert(`this is wrong answer`)

  }

  return (
    <div className=" shadow-2xl relative md:w-4/5 m-auto px-20 md:px-40 my-12">
      <div onClick={() => setEye(!eye)} className="absolute md:right-24 right-12 top-8 md:top-3">
        {eye ? (
          <FontAwesomeIcon icon={faEyeSlash}/>
        ) : (
          <FontAwesomeIcon icon={faEye}/>
        )}
      </div>
      <h2 className="text-2xl font-bold text-amber-700 mb-8">
        Quiz {ind + 1}: {}
        {question.replace( /(<([^>]+)>)/ig, '')}
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
