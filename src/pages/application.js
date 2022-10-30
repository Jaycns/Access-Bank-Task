import React from "react";
import "../App.scss";
import Logo from "../images/logo.png";
import { FirstSection, Footer } from "../styles/homeStyle";
import logobg from "../images/Union.webp";
import Background from "../images/blurred-bg.png";
import { Header, Before } from "../styles/apiStyles";

function Application() {
  return (
    <div>
      <FirstSection h="auto">
        <Before />
        <img className="logobg" src={logobg} alt="bg" loading="lazy" />
        <Header className="">
          <img src={Background} alt="bg" />
          <div className="text-box">
            <h1>Applications Catalogue</h1>
            <p>
              Displays the full list of Applications available for developers
            </p>
          </div>
        </Header>
        <Footer>
          <img src={Logo} alt="Logo" />
        </Footer>
      </FirstSection>
    </div>
  );
}

export default Application;
