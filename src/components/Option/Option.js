import React, { useState } from "react";

const Option = ({ option, id, ind, handleCorrect }) => {

 
  return (
    <div  className={`py-3 w-full md:w-5/6 px-4 border border-blue-600 gap-1 m-4 rounded-xl`}>
      <label className="flex items-center" htmlFor={`${ind}-${id}`}>
        <input onClick={() => handleCorrect(option)} className="mr-4" type="radio" name="rad" id={`${ind}-${id}`} />
        <h2>{option}</h2>
      </label>
    </div>
  );
};

export default Option;
