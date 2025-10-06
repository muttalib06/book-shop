import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, author, category, image, rating } = book;
  return (
    <Link to={`/bookDetail/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-6 border border-gray-200 h-full ">
        <figure className="px-10 pt-10 bg-gray-100 p-4 rounded-2xl">
          <img src={image} className="rounded-xl h-[166px] " />
        </figure>
        <div className="mt-3 text-left">
          <div className="flex gap-5 space-y-2">
            <p className="bg-[#23BE0A]/5 py-1 px-2 rounded-xl text-[#23BE0A] ">
              Young Adult
            </p>
            <p className="bg-[#23BE0A]/5 py-1 px-2 rounded-xl text-[#23BE0A] ">
              Identity
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-2xl playfair-display">{bookName}</h2>
            <p>By: {author}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>{category}</p>
            <p className="flex gap-2">
              {rating} <Star></Star>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
