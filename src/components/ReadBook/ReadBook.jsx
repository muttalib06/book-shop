import { Map, MapPin, StickyNote, User } from "lucide-react";
import React from "react";

const ReadBook = ({ book }) => {
  const {
    bookName,
    image,
    author,
    tags,
    rating,
    publisher,
    yearOfPublishing,
    totalPages,
    category,
  } = book;
  return (
    <div className="flex items-center shadow border border-gray-300 p-6 gap-5 space-y-2">
      <div className="bg-[#131313]/5 px-10 p-5 rounded-2xl self-stretch flex justify-center items-center">
        <img className="w-32 h-40" src={image} alt="" />
      </div>
      <div>
        <div>
          <h2 className="font-bold text-2xl playfair-display">{bookName}</h2>
          <p>{author}</p>
        </div>
        <div className=" flex justify-around items-center gap-3">
          <p>Tag: </p>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-[#23BE0A]/5 py-1 px-2 rounded-xl text-[#23BE0A] mr-2"
            >
            {tag}
            </button>
          ))}
          <p className="flex gap-2">
            {" "}
            <MapPin></MapPin> of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex items-center gap-3 my-2">
          <p className="flex gap-3 items-center">
            <User></User> Publisher: {publisher}
          </p>
          <p className="flex gap-3 items-center">
            <StickyNote></StickyNote> Pages: {totalPages}
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#328EFF]/15 py-1 px-2 rounded-xl text-[#328EFF]">
            Category: {category}
          </button>
          <button className="bg-[#FFAC33]/15 py-1 px-2 rounded-xl text-[#FFAC33]">Rating: {rating}</button>
          <button className="bg-[#23BE0A] py-1 px-2 rounded-xl text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
