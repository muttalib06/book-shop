import React, { useEffect, useState } from "react";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div></div>;
};

export default Books;
