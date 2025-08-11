import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

const FrontendLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default FrontendLayout;
