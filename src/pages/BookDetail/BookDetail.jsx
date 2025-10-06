import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreBD } from "../../Utility/Storage";

const BookDetail = () => {
  const id = useParams();
  const bookId = Number(id.id);
  const bookData = useLoaderData();
  const singleBook = bookData.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    author,
    review,
    tags,
    rating,
    publisher,
    yearOfPublishing,
    totalPages,
    category,
  } = singleBook;

  return (
    <div className="max-w-[80%] mx-auto mt-10 flex  items-center">
      <div className="flex-1 bg-[#131313]/5 self-stretch flex justify-center items-center px-10 rounded-2xl">
        <img src={image} alt="" />
      </div>

      <div className="flex-3 ml-8">
        <div>
          <h2 className="font-bold text-4xl playfair-display ">{bookName}</h2>
          <p className="font-medium text-lg work-sans text-[#131313]/80  border-b border-gray-300  py-3">
            {" "}
            By:
            {author}
          </p>
          <p className="font-medium  work-sans text-[#131313]/80  border-b border-gray-300  py-3">
            {category}
          </p>
        </div>

        <div>
          <p className="my-3 text-[#131313]/70">
            {" "}
            <span className="text-black font-medium">Review:</span> {review}
          </p>
          <div className="flex gap-10 items-center border-b border-gray-300 pb-2">
            <p className="font-bold">Tags</p>

            <div className="space-x-2">
              {tags.map((tag, index) => (
                <button
                  className="bg-[#23BE0A]/5 py-1 px-2 rounded-xl text-[#23BE0A] "
                  key={index}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="my-3 max-w-[50%] space-y-2">
          <div className="grid grid-cols-2">
            <p className="text-[#131313]/70 work-sans">Number of Pages:</p>{" "}
            <p className="font-semibold text-[#131313]">{totalPages}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-[#131313]/70 work-sans">Publisher: </p>{" "}
            <p className="font-semibold text-[#131313]">{publisher}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-[#131313]/70 work-sans">Year of Publishing: </p>{" "}
            <p className="font-semibold text-[#131313]">{yearOfPublishing}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-[#131313]/70 work-sans">Rating: </p>{" "}
            <p className="font-semibold text-[#131313]">{rating}</p>
          </div>
        </div>
        <div className="space-x-2">
          <button onClick={() => addToStoreBD(bookId)} className="btn ">
            Read
          </button>
          <button className="btn bg-[#50B1C9]">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
