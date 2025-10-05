import React from "react";
import bannerImg from "../../assets/bookd-depositphotos-bgremover.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center max-w-[80%] mx-auto p-6 my-6  bg-gray-200 rounded-md">
      <div className="space-y-3">
        <h2 className="playfair-display text-5xl">
          Books to freshen up your bookshelf
        </h2>
        <button className="btn bg-[#23BE0A] text-white">View the List</button>
      </div>

      <img className="w-3xs" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
