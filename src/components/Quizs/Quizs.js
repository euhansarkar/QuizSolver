import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizs = () => {
  const quizs = useLoaderData();
  console.log(quizs);
  return (
    <div className="shadow-2xl rounded-lg">
        <h2 className="text-5xl mt-6 capitalize">Quiz Of {quizs.data.name}</h2>
      <div className="grid grid-cols-1 relative">
        {quizs.data.questions.map((quiz, ind) => (
          <Quiz key={quiz.id} quiz={quiz} ind={ind}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Quizs;
