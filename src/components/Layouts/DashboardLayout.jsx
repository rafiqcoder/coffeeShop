import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import DashSidebar from "../Dashboard/DashSidebar";
import { DataContext } from "../../contextApi/contextApi";

const DashboardLayout = () => {
  const { userData } = React.useContext(DataContext);
  
  console.log("User data in DashboardLayout:", userData);
  return (
    <>
      <Header />
      <main className="flex">
        <DashSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
