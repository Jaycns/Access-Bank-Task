import React, { useContext } from "react";
import "../styles/layout.scss";
import AppContext from "../context/context";
import { SideBar } from "../styles/layoutStyles";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
function Sidebar() {
  const { menu, activeNav, handleNav, handleLoginOpen } =
    useContext(AppContext);
  return (
    <>
      <SideBar className={menu ? "" : "sidebar"}>
        {/* <div className="box">
          <Link
            to="/"
            id="/"
            onClick={handleNav}
            className={activeNav === "/" ? "active" : ""}
          >
            Home
          </Link>{" "}
          <AiOutlineRight className="icon" />
        </div> */}
        <div className="box">
          <Link
            to="/apis"
            id="/apis"
            onClick={handleNav}
            className={activeNav === "/apis" ? "active" : ""}
          >
            Apis
          </Link>
          <AiOutlineRight className="icon" />
        </div>
        <div className="box">
          <Link
            to="/"
            id="/products"
            onClick={handleNav}
            className={activeNav === "/products" ? "active" : ""}
          >
            Products
          </Link>
          <AiOutlineRight className="icon" />
        </div>
        <div className="box">
          <Link
            to="/"
            id="/apps"
            onClick={handleNav}
            className={activeNav === "/apps" ? "active" : ""}
          >
            Applications
          </Link>
          <AiOutlineRight className="icon" />
        </div>
        <div className="box">
          <Link
            to="/"
            id="/forum"
            onClick={handleNav}
            className={activeNav === "/forum" ? "active" : ""}
          >
            Forum
          </Link>
          <AiOutlineRight className="icon" />
        </div>
        <div className="box signin">
          <p onClick={handleLoginOpen}>Sign In</p>
          <AiOutlineRight className="icon" />
        </div>
      </SideBar>
      {menu && <div className="wrapper" />}
    </>
  );
}

export default Sidebar;
