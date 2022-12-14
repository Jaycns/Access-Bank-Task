import React, { useContext } from "react";
import "../styles/layout.scss";
import AppContext from "../context/context";
import { SideBar } from "../styles/layoutStyles";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
function Sidebar() {
  const { menu, activeNav, handleNav, handleLoginOpen, closeAll } =
    useContext(AppContext);
  return (
    <>
      <SideBar className={menu ? "" : "sidebar"}>
        <div className="box">
          <Link
            to="/apis"
            id="/apis"
            onClick={handleNav}
            className={activeNav === "/apis" ? "active" : ""}
          >
            Apis
            <AiOutlineRight className="icon" />
          </Link>
        </div>
        <div className="box">
          <Link
            to="/products"
            id="/products"
            onClick={handleNav}
            className={activeNav === "/products" ? "active" : ""}
          >
            Products
            <AiOutlineRight className="icon" />
          </Link>
        </div>
        <div className="box">
          <Link
            to="/application"
            id="/apps"
            onClick={handleNav}
            className={activeNav === "/apps" ? "active" : ""}
          >
            Applications
            <AiOutlineRight className="icon" />
          </Link>
        </div>
        <div className="box">
          <Link
            to="/forum"
            id="/forum"
            onClick={handleNav}
            className={activeNav === "/forum" ? "active" : ""}
          >
            Forum
            <AiOutlineRight className="icon" />
          </Link>
        </div>
        <div className="box signin" onClick={handleLoginOpen}>
          <p>Sign In</p>
          <AiOutlineRight className="icon" />
        </div>
      </SideBar>
      {menu && <div className="wrapper" onClick={closeAll} />}
    </>
  );
}

export default Sidebar;
