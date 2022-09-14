import React, { useContext } from "react";
import AppContext from "../context/context";
import "../App.scss";
import {
  FirstSection,
  Main,
  Carousel,
  SecondSection,
  ThirdSection,
  LastSection,
  Card,
  Footer,
} from "../styles/homeStyle.js";
import { ButtonFill } from "../styles/layoutStyles";

import { ApiSection, ApiCard } from "../styles/homeStyle2";
import Logo from "../images/logo.png";
import Background from "../images/background.png";
import One from "../images/debit-card.gif";
import Two from "../images/create-order.gif";
import Three from "../images/money.gif";
import Four from "../images/bal_inq.gif";
import first from "../images/test.svg";
import second from "../images/subscribe.svg";
import third from "../images/integrate.svg";
import logobg from "../images/Union.png";
import mbox from "../images/mbox.svg";
import Inq from "../images/Inq.png";
import Auth from "../images/authenticate.png";
import Tranx from "../images/tranx.png";
import Partners from "../images/partners.png";
import { AiOutlineRightCircle, AiFillRightCircle } from "react-icons/ai";

const initialSideBarShow = window.matchMedia("(max-width: 780px)").matches;
const Show = window.matchMedia("(max-width: 1300px)").matches;
function Home() {
  const {
    nextSlide,
    prevSlide,
    carousel,
    handleOpen,
    handleChatbox,
    cardAnimation,
  } = useContext(AppContext);
  return (
    <div className="home">
      {carousel === 0 ? (
        <FirstSection>
          <img className="logobg" src={logobg} alt="bg" />
          <div className="mbox" onClick={handleChatbox}>
            <img src={mbox} alt="mbox" className="chatbox" />
          </div>
          <Main>
            <h1>
              Developer API <span>Portal</span>
            </h1>
            <p>
              Building partnerships and embracing opportunities with startups,
              <br />
              fintechs and software developers in Africa and beyond.
            </p>
            <ButtonFill
              width={initialSideBarShow ? "8rem" : Show ? "9rem" : "12rem"}
              onClick={handleOpen}
            >
              Get Access
            </ButtonFill>
          </Main>
          <Carousel>
            <div className="line"></div>
            <div className="line inactive" onClick={nextSlide}></div>
          </Carousel>
        </FirstSection>
      ) : (
        <FirstSection
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
          }}
        >
          <div className="mbox" onClick={handleChatbox}>
            <img src={mbox} alt="mbox" className="chatbox" />
          </div>

          <Main>
            <h1 className="text">
              <span>Grow</span>
              <span>Build</span>
              <span>Innovate</span>
            </h1>
            <p>
              Enjoy a wide array of the growing number of APIs that can
              <br />
              complement your imagination.
            </p>
            <ButtonFill
              width={initialSideBarShow ? "8rem" : Show ? "9rem" : "12rem"}
              onClick={handleOpen}
            >
              Join us
            </ButtonFill>
          </Main>
          <Carousel>
            <div className="line inactive" onClick={prevSlide}></div>
            <div className="line"></div>
          </Carousel>
        </FirstSection>
      )}
      <SecondSection>
        <h1 className="header">What to expect</h1>
        <div className={`flex-box ${cardAnimation ? "active" : ""}`}>
          <Card>
            <div className="top">
              <img src={One} alt="one" />
              <h1>Payment Initiation</h1>
            </div>
            <p>
              Make and complete payments; cross border interbank
              <br /> and intrabank transfers
            </p>
          </Card>
          <Card>
            <div className="top">
              <img src={Two} alt="Two" />
              <h1>Balance Inquiries</h1>
            </div>
            <p>
              Check your account balance and self generate bank <br />
              statements
            </p>
          </Card>
          <Card>
            <div className="top">
              <img src={Three} alt="Three" />
              <h1>Transaction Inquiries</h1>
            </div>
            <p>
              View your transactions and send payment avidence to <br />
              vendors and merchants
            </p>
          </Card>
          <Card>
            <div className="top">
              <img src={Four} alt="four" />
              <h1>Payment Reception</h1>
            </div>
            <p>
              Create a merchant profile and receive payments via <br />
              AccessPay
            </p>
          </Card>
        </div>
      </SecondSection>
      <ApiSection>
        <h1 className="header">Api Categories</h1>
        <div className="scroller">
          <div className="flex-box">
            <ApiCard className="card">
              <img src={Inq} alt="inq" />
              <div className="flowbox">
                <div className="textbox">
                  <p>Inquiries</p>
                  <div className="span">
                    <AiFillRightCircle className="hover" />
                    <AiOutlineRightCircle className="icon" />{" "}
                    <p className="p">Learn More</p>
                  </div>
                </div>
              </div>
            </ApiCard>

            <ApiCard className="card">
              <img src={Auth} alt="auth" />
              <div className="flowbox">
                <div className="textbox">
                  <p>Authentication</p>
                  <div className="span">
                    <AiFillRightCircle className="hover" />
                    <AiOutlineRightCircle className="icon" />{" "}
                    <p className="p">Learn More</p>
                  </div>
                </div>
              </div>
            </ApiCard>
            <ApiCard className="card">
              <img src={Partners} alt="tranx" className="tranx" />
              <div className="flowbox">
                <div className="textbox">
                  <p>Partners</p>
                  <div className="span">
                    <AiFillRightCircle className="hover" />
                    <AiOutlineRightCircle className="icon" />{" "}
                    <p className="p">Learn More</p>
                  </div>
                </div>
              </div>
            </ApiCard>
            <ApiCard className="card">
              <img src={Tranx} alt="tranx" className="tranx" />
              <div className="flowbox">
                <div className="textbox">
                  <p>Transactions</p>
                  <div className="span">
                    <AiFillRightCircle className="hover" />
                    <AiOutlineRightCircle className="icon" />{" "}
                    <p className="p">Learn More</p>
                  </div>
                </div>
              </div>
            </ApiCard>
          </div>
        </div>
        <div className="view-box">
          <AiFillRightCircle className="hover" />
          <AiOutlineRightCircle className="icon" /> <p>View all</p>
        </div>
      </ApiSection>
      <ThirdSection>
        <h1>How It Works</h1>
        <div className="flex-box">
          <div className="holder">
            <img src={first} alt="first" />
            <h2>Test</h2>
            <p>Register to get access to our Sandbox environment</p>
          </div>
          <div className="holder">
            <img src={second} alt="second" />
            <h2>Subscribe</h2>
            <p>
              Submit Subcription to get credentials to access speccific products
            </p>
          </div>
          <div className="holder">
            <img src={third} alt="first" />
            <h2>Integrate</h2>
            <p>Configure your system with our production endpoints</p>
          </div>
        </div>
      </ThirdSection>
      <LastSection>
        <div className="flex-box">
          <h1>Start integrating with our APIs now and grow your business</h1>
          <ButtonFill
            bg="#10295F"
            width={initialSideBarShow ? "7rem" : Show ? "8rem" : "12rem"}
            onClick={handleOpen}
          >
            Join us
          </ButtonFill>
        </div>
        <img className="logobg" src={logobg} alt="bg" />
      </LastSection>
      <Footer>
        <img src={Logo} alt="Logo" />
      </Footer>
    </div>
  );
}

export default Home;
