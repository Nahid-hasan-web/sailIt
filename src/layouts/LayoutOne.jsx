import React from "react";
import { Outlet } from "react-router";
import HeaderWithNavbar from "../components/common/HeaderWithNavbar";
import Footer from "../components/common/Footer";
import FloatingButtons from "../components/common/FloatingButtons";

const LayoutOne = () => {
  return (
    <>
      <HeaderWithNavbar />
      <FloatingButtons/>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutOne;
