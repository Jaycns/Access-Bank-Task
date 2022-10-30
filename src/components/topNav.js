import React, { useContext } from "react";
import AppContext from "../context/context";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "../styles/homeStyle.js";
import { TopNav, Nav } from "../styles/layoutStyles";
function Top() {
  const {
    topNav,
    handleOpen,
    handleLoginOpen,
    handleMenu,
    hamburger,
    activeNav,
    handleNav,
  } = useContext(AppContext);

  return (
    <>
      <TopNav className={`header ${topNav ? "active" : ""}`}>
        <Link to="/" onClick={handleNav}>
          <img src={Logo} alt="Logo" />
        </Link>
        <div
          className={`hamburger ${hamburger ? "active" : ""}`}
          onClick={handleMenu}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
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
            to="/products"
            id="/products"
            className={activeNav === "/products" ? "active" : ""}
            onClick={handleNav}
          >
            Products
          </Link>
          <Link
            to="/application"
            id="/applications"
            className={activeNav === "/applications" ? "active" : ""}
            onClick={handleNav}
          >
            Applications
          </Link>
          <Link
            to="/forum"
            id="/forum"
            className={activeNav === "/forum" ? "active" : ""}
            onClick={handleNav}
          >
            Forum
          </Link>
        </Nav>
        <ButtonGroup>
          <p onClick={handleLoginOpen}>Sign in</p>
          <Button onClick={handleOpen}>Get Access</Button>
        </ButtonGroup>
      </TopNav>
    </>
  );
}

export default Top;
