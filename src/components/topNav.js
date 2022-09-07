import React, { useContext, useState } from "react";
import AppContext from "../context/context";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { TopNav, Nav, ButtonGroup, Button } from "../styles/homeStyle.js";
function Top() {
  const { topNav, handleOpen, handleLoginOpen } = useContext(AppContext);
  const [activeNav, setActiveNav] = useState("/");
  const handleNav = (e) => {
    setActiveNav(e.target.getAttribute("id"));
    console.log(activeNav);
  };
  return (
    <>
      <TopNav className={`header ${topNav ? "active" : ""}`}>
        <img src={Logo} alt="Logo" />
        <Nav>
          <Link
            to="/"
            id="/"
            className={activeNav === "/" ? "active" : ""}
            onClick={handleNav}
          >
            Home
          </Link>
          <Link
            to="/apis"
            id="/apis"
            className={activeNav === "/apis" ? "active" : ""}
            onClick={handleNav}
          >
            Apis
          </Link>
          <Link
            to="/"
            id="/products"
            className={activeNav === "/products" ? "active" : ""}
            onClick={handleNav}
          >
            Products
          </Link>
          <Link
            to="/"
            id="/applications"
            className={activeNav === "/applications" ? "active" : ""}
            onClick={handleNav}
          >
            Applications
          </Link>
          <Link
            to="/"
            id="/forum"
            className={activeNav === "/forum" ? "active" : ""}
            onClick={handleNav}
          >
            Forum
          </Link>
        </Nav>
        <ButtonGroup>
          <p  onClick={handleLoginOpen}>Sign in</p>
          <Button onClick={handleOpen}>Get Access</Button>
        </ButtonGroup>
      </TopNav>
    </>
  );
}

export default Top;
