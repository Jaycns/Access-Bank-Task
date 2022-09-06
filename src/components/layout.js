import React from "react";
import Top from "./topNav";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Top />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
