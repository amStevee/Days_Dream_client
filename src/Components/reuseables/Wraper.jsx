import React from "react";
import { Navbar } from "react-bootstrap";
import Footer from "../Footer";

export default function Wraper({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
