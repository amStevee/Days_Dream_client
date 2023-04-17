import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Wraper({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
