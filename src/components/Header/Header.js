import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between relative bg-blue-300">
        <h2 className="ml-8 text-2xl font-bold">Quiz Solver</h2>
        <div onClick={() => setOpen(!open)} className={`h-6 w-6 md:hidden text-2xl mr-4`}>
        {
          open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>  
          
        }
        </div>
      <div className={`md:space-x-20 md:text-xl space-x-8 ml-48 md:mr-8 justify-right md:static absolute ${open ? ('top-40' ,'left-11') : 'top-[-125px]'}`}>
        <Link to={`/`}>Home</Link>
        <Link to={`/statistics`}>Statistics</Link>
        <Link to={`/blog`}>Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
