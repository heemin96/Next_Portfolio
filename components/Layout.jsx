import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default layout;
