import { use } from "react";
import Book from "../book/Book";

const Books = ({ promiseData }) => {
  const booksData = use(promiseData);
  console.log(booksData)
  return (
    <div className="max-w-[80%] mx-auto mt-5">
      <h2 className="playfair-display font-semibold text-2xl text-center">Books</h2>
      <div className="grid grid-cols-3 gap-5">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
