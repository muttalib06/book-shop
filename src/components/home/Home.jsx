import React, { Suspense } from "react";
import Banner from "../header/Banner";
import Books from "../../pages/books/Books";
const promiseData = fetch("books.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<h3>Loading Data....</h3>}>
        <Books promiseData={promiseData}></Books>
      </Suspense>
    </div>
  );
};

export default Home;
