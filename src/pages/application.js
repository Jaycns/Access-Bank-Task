import React from "react";
import "../App.scss";
import Logo from "../images/logo.png";
import { FirstSection, Footer } from "../styles/homeStyle";
import logobg from "../images/Union.webp";
import Background from "../images/blurred-bg.png";
import { Header, Before, Mainer } from "../styles/apiStyles";
import dan from "../images/products/dan.webp";
import dar from "../images/products/dar.webp";
import dani from "../images/products/dani.webp";
import dmi from "../images/products/dmi.webp";
import frez from "../images/products/frez.webp";
import isa from "../images/products/isa.webp";

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
        <Mainer className="mainer">
          <div className="container">
            <div className="card">
              <div className="line"></div>
              <div className="profile">
                <div className="img">
                  <img src={dan} alt="dan" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="line"></div>
              <div className="profile">
                <div className="img">
                  <img src={dar} alt="dan" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="line"></div>
              <div className="profile">
                <div className="img">
                  <img src={dani} alt="dan" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="line"></div>
              <div className="profile">
                <div className="img">
                  <img src={isa} alt="dan" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="line"></div>
              <div className="profile">
                <div className="img">
                  <img src={dmi} alt="dan" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="line"></div>
              <div className="profile">
                <div className="img">
                  <img src={frez} alt="dan" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </Mainer>
        <Footer>
          <img src={Logo} alt="Logo" />
        </Footer>
      </FirstSection>
    </div>
  );
}

export default Application;
