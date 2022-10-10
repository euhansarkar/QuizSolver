import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between">
        <h2 className="ml-8 text-2xl font-bold">Quiz Solver</h2>
      <div className="space-x-20 text-xl mr-8">
        <Link to={`/`}>Home</Link>
        <Link to={`/statistics`}>Statistics</Link>
        <Link to={`/blog`}>Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
