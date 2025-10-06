import React, { Suspense } from "react";
import Banner from "../header/Banner";
import Books from "../../pages/books/Books";
import Spinner from "../Spinner/Spinner";
const promiseData = fetch("/books.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<Spinner></Spinner>}>
        <Books promiseData={promiseData}></Books>
      </Suspense>
    </div>
  );
};

export default Home;
