import React, { useState, useEffect } from "react";
import {
  FirstSection,
  TopNav,
  Nav,
  ButtonGroup,
  Button,
  Main,
  Carousel,
  SecondSection,
  ThirdSection,
  LastSection,
  Card,
  Footer,
} from "../homeStyle.js";
import Logo from "../images/logo.png";
import Background from "../images/background.png";
import One from "../images/one.svg";
import Two from "../images/two.svg";
import Three from "../images/three.svg";
import Four from "../images/four.svg";
import first from "../images/first.svg";
import second from "../images/second.svg";
import third from "../images/third.svg";

const initialSideBarShow = window.matchMedia("(max-width: 780px)").matches;
const Show = window.matchMedia("(max-width: 1300px)").matches;
function Home({ handleOpen }) {
  const [topNav, setTopNav] = useState(false);
  const [carousel, setCarousel] = useState(0);
  const nextSlide = () => {
    if (carousel === 0) setCarousel(1);
  };
  const prevSlide = () => {
    if (carousel === 1) setCarousel(0);
  };
  const navBg = () => {
    if (window.scrollY >= 40) {
      setTopNav(true);
    } else {
      setTopNav(false);
    }
  };
  window.addEventListener("scroll", navBg);
  useEffect(() => {
    setInterval(() => {
      if (carousel === 0) {
        setCarousel(1);
      }
    }, 40000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setInterval(() => {
      if (carousel === 1) {
        setCarousel(0);
      }
    }, 40000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home">
      {carousel === 0 ? (
        <FirstSection>
          <TopNav className={`header ${topNav ? "active" : ""}`}>
            <img src={Logo} alt="Logo" />
            <Nav>
              <a href="/">Home</a>

              <a href="/">Apis</a>
              <a href="/">Products</a>
              <a href="/">Applications</a>
              <a href="/">Forum</a>
            </Nav>
            <ButtonGroup>
              <a href="/">Sign in</a>
              <Button  onClick={handleOpen}>
                Get Access
              </Button>
            </ButtonGroup>
          </TopNav>
          <Main>
            <h1>
              Developer API <span>Portal</span>
            </h1>
            <p>
              Building partnerships and embracing opportunities with startups,
              <br />
              fintechs and software developers in Africa and beyond.
            </p>
            <Button
              bd="40px"
              width={initialSideBarShow ? "8rem" : Show ? "9rem" : "12rem"}
              onClick={handleOpen}
            >
              Get Access
            </Button>
          </Main>
          <Carousel>
            <div className="line"></div>
            <div className="line inactive" onClick={nextSlide}></div>
          </Carousel>
        </FirstSection>
      ) : (
        <FirstSection style={{ backgroundImage: `url(${Background})` }}>
          <TopNav className={`header ${topNav ? "active" : ""}`}>
            <img src={Logo} alt="Logo" />
            <Nav>
              <a href="/">Home</a>

              <a href="/">Apis</a>
              <a href="/">Products</a>
              <a href="/">Applications</a>
              <a href="/">Forum</a>
            </Nav>
            <ButtonGroup>
              <a href="/">Sign in</a>
              <Button bd={Show ? "5px" : ""} onClick={handleOpen}>
                Get Access
              </Button>
            </ButtonGroup>
          </TopNav>
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
            <Button
              bd="40px"
              width={initialSideBarShow ? "8rem" : Show ? "9rem" : "12rem"}
              onClick={handleOpen}
            >
              Join us
            </Button>
          </Main>
          <Carousel>
            <div className="line inactive" onClick={prevSlide}></div>
            <div className="line"></div>
          </Carousel>
        </FirstSection>
      )}
      <SecondSection>
        <div className="flex-box">
          <Card>
            <img src={One} alt="one" />
            <h1>Payment Initiation</h1>
            <p>
              Deliver an easier banking experience. Send payment
              <br /> instructions in real-time from mobile devices or Enterprise
              Resources Planning Systems
            </p>
          </Card>
          <Card>
            <img src={Two} alt="Two" />
            <h1>Balance Inquiries</h1>
            <p>
              Deliver an easier banking experience. Send payment
              <br />
              instructions in real-time from mobile devices or Enterprise
              Resources Planning Systems
            </p>
          </Card>
          <Card>
            <img src={Three} alt="Three" />
            <h1>Transaction Inquiries</h1>
            <p>
              Deliver an easier banking experience. Send payment <br />
              instructions in real-time from mobile devices or Enterprise
              Resources Planning Systems
            </p>
          </Card>
          <Card>
            <img src={Four} alt="four" />
            <h1>Funds Check</h1>
            <p>
              Deliver an easier banking experience. Send payment <br />
              instructions in real-time from mobile devices or Enterprise
              Resources Planning Systems
            </p>
          </Card>
        </div>
      </SecondSection>
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
        Start integrating with our APIs now and grow your business
        <Button
          bg="#10295F"
          bd="40px"
          width={initialSideBarShow ? "7rem" : Show ? "8rem" : "12rem"}
          onClick={handleOpen}
        >
          Join us
        </Button>
      </LastSection>
      <Footer>
        <img src={Logo} alt="Logo" />
      </Footer>
    </div>
  );
}

export default Home;
