import React from "react";
import "../App.scss";
// import AppContext from "../context/context";
import { FirstSection } from "../styles/homeStyle";
import logobg from "../images/Union.svg";
import Background from "../images/blurred-bg.png";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Header, Mainer, Before } from "../styles/apiStyles";
import accbase from "../images/apis_img/Accountbased.png";
import calc from "../images/apis_img/calculator.png";
import collect from "../images/apis_img/Collective.png";
import cross from "../images/apis_img/Crossborder.png";
import custom from "../images/apis_img/Customer.png";
import fx from "../images/apis_img/fx.png";

function Apis() {
  return (
    <div>
      <FirstSection h="150">
        <Before />
        <img className="logobg" src={logobg} alt="bg" />
        <Header className="">
          <img src={Background} alt="bg" />
          <div className="text-box">
            <h1>Api Catalogue</h1>
            <p>Displays the full list of APIs available for developers</p>
          </div>
        </Header>

        <Mainer className="main-holder">
          <div className="sidebar">
            <h1>All APIs</h1>
            <div className="api-container">
              <div className="drop-down">
                <span>r</span>
                <p>Inquiries</p>
                <BsChevronDown className="icon-down" />
              </div>
              <div className="drop-down">
                <span>r</span>
                <p>Authentication</p>
                <BsChevronDown className="icon-down" />
              </div>
              <div className="drop-down">
                <span>r</span>
                <p>Partners</p>
                <BsChevronDown className="icon-down" />
              </div>
              <div className="drop-down">
                {" "}
                <span>r</span>
                <p>Transactions</p>
                <BsChevronDown className="icon-down" />
              </div>
            </div>
          </div>
          <div className="catalague">
            <div className="search-box">
              <FiSearch className="icon-search" />
              <input type="text" placeholder="Search by API name or category" />
            </div>
            <div className="grid-box">
              <div className="apibox">
                <img src={accbase} alt="" />
                <div className="dark-blur"></div>
                <p>Account-based API</p>
              </div>
              <div className="apibox">
                {" "}
                <img src={calc} alt="" />
                <div className="dark-blur"></div>
                <p>Loan Calculator</p>
              </div>
              <div className="apibox">
                {" "}
                <img src={collect} alt="" />
                <div className="dark-blur"></div>
                <p>Collective API</p>
              </div>
              <div className="apibox">
                {" "}
                <img src={cross} alt="" />
                <div className="dark-blur"></div>
                <p>Cross Border</p>
              </div>
              <div className="apibox">
                {" "}
                <img src={custom} alt="" />
                <div className="dark-blur"></div>
                <p>Customer API</p>
              </div>
              <div className="apibox">
                {" "}
                <img src={fx} alt="" />
                <div className="dark-blur"></div>
                <p>Foreign Exchange Rate</p>
              </div>
            </div>
          </div>
        </Mainer>
      </FirstSection>
    </div>
  );
}

export default Apis;