import React, { useContext } from "react";
import Top from "./topNav";
import Sidebar from "./sidebar";
import SignUp from "./signpop";
import LogIn from "./logpop";
import AppContext from "../context/context";
import "../styles/layout.scss";

const Layout = ({ children }) => {
  const { modal, loginModal } = useContext(AppContext);
  return (
    <>
      <div className="layout">
        <Top />
        <Sidebar />
        {modal && <SignUp />}
        {loginModal && <LogIn />}
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
