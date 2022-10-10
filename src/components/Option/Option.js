import React from "react";

const Option = ({ option, id, ind }) => {
  return (
    <div className=" py-3 px-4 border border-blue-600 gap-3 m-4 rounded-xl">
      <label className="flex" htmlFor={`${ind}-${id}`}>
        <input className="mr-4" type="radio" name="rad" id={`${ind}-${id}`} />
        <h2>{option}</h2>
      </label>
    </div>
  );
};

export default Option;
