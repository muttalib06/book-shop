import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className=" work-sans navbar bg-base-100  flex justify-between items-center px-4 py-3 max-w-[80%] mx-auto mt-10">
      <h1 className="text-3xl font-bold">Book Vibe</h1>
      <ul className="flex justify-between items-center gap-6 text-[#131313] text-lg font-normal">
        <Link to="/">Home</Link>
        <Link to="/listedBook">Listed Books</Link>
        <Link to="/">Pages to Read</Link>
      </ul>
      <div className="space-x-3">
        <button className="btn  bg-[#23BE0A] text-white">Sign In</button>
        <button className="btn  bg-[#59C6D2] text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
