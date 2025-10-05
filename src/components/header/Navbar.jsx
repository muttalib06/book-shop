import React from "react";

const Navbar = () => {
  return (
    <div className=" work-sans navbar bg-base-100  flex justify-between items-center px-4 py-3 max-w-[80%] mx-auto mt-10">
      <h1 className="text-3xl font-bold">Book Vibe</h1>
      <ul className="flex justify-between items-center gap-6 text-[#131313] text-lg font-normal">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Listed Books</a>
        </li>
        <li>
          <a href="">Pages to Read</a>
        </li>
      </ul>
      <div className="space-x-3">
        
          <button className="btn  bg-[#23BE0A] text-white">Sign In</button>
          <button className="btn  bg-[#59C6D2] text-white">Sign Up</button>
        
      </div>
    </div>
  );
};

export default Navbar;
