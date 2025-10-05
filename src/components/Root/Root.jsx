import React from "react";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
