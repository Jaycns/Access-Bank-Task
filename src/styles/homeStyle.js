import styled from "styled-components";

export const FirstSection = styled.section`
  background: linear-gradient(to right, #10295f, #040b1b);
  height: ${({ h }) => h || "100vh"};
  width: 100%;
  color: white;
  padding: 1rem 2rem;
  z-index: 99;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  .logobg {
    position: absolute;
    right: -10%;
    bottom: -13%;
    mix-blend-mode: lighten;
    overflow: hidden;
    opacity: 0.5;
    width: 900px;
    @media (max-width: 1300px) {
      width: 750px;
      right: -15%;
      bottom: -15%;
    }
    @media (max-width: 768px) {
      width: 500px;
      opacity: 0.2;
      top: 10%;
      left: 10%;
    }
  }
  .mbox {
    position: fixed;
    right: 10%;
    bottom: 10%;
    height: 5rem;
  }
  .chatbox {
    animation: jump 2s ease-in-out infinite alternate 5s;
    position: relative;

    @keyframes jump {
      0% {
        transform: translateY(-0%);
      }
      50% {
        transform: translateY(10%);
      }
      100% {
        transform: translateY(-20%);
      }
    }

    &:hover {
      animation-play-state: paused;
    }

    @media (max-width: 768px) {
      width: 60px;
    }
  }
`;
export const Carousel = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  margin-top: -4rem;
  .line {
    height: 0.5rem;
    width: 2.8rem;
    background-color: #fff;
    opacity: 0.9;
    border-radius: 10px;
    transition: 0.3s;
  }
  .line.inactive {
    opacity: 0.4;
    cursor: pointer;
    &:hover {
      background-color: #f6f7f3;
      box-shadow: 0px 0px 3px 1px #f6f7f3;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 40px;
  p {
    color: white;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 16px;
    font-weight: 300px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: #f5821f;
    }
  }
  @media (max-width: 1300px) {
    gap: 1rem;
    p {
      font-size: 11px;
    }
  }
  @media (max-width: 768px) {
    gap: 0.8rem;
    p {
      display: none;
      font-size: 11px;
      letter-spacing: 2px;
    }
  }
`;
export const Button = styled.button`
  outline: none;
  background: transparent;
  border-radius: ${({ bd }) => bd || "5px"};
  color: ${({ bg }) => bg || "#f5821f"};
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 0.8rem 1.2rem;
  width: ${({ width }) => width || ""};
  border: 1px solid #f5821f;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    background: ${({ bg }) => bg || "#f5821f"};
    color: white;
  }
  @media (max-width: 1300px) {
    font-size: 11px;
    letter-spacing: 2px;
    padding: 0.6rem 1rem;
  }
  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 11px;
    letter-spacing: 2px;
  }
  @media (max-width: 328px) {
    font-size: 8px;
  }
`;

export const Main = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
  h1 {
    font-size: 72px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 0;
    height: 80px;
    transition: 0.3s ease-in-out;

    @keyframes slide {
      0 {
        justify-content: flex-start;
      }
      50% {
        justify-content: center;
      }

      100% {
        justify-content: flex-end;
      }
    }

    span {
      color: #f5821f;
    }
  }
  .text {
    display: flex;
    flex-direction: column;

    overflow: hidden;
    animation: slide 20s linear infinite;
  }
  p {
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
    line-height: 2rem;
    opacity: 0.9;
    margin: 1.6rem;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    h1 {
      font-size: 36px;
      height: 40px;
    }
    .text {
      height: 35px;
    }
    p {
      font-size: 14px;
      font-weight: 200;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 32px;
      height: 60px;
    }
    .text {
      height: 35px;
    }
    p {
      font-size: 14px;
      font-weight: 200;
    }
  }
`;
export const SecondSection = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: #f6f7ff;
  padding: 6rem 4rem;
  text-align: center;
  color: #10295f;
  .header {
    color: #f5821f;
    margin-bottom: 4rem;
    font-size: 36px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .flex-box {
    display: grid;
    grid-template-columns: auto auto;
    gap: 4rem;
    justify-content: center;
  }
  @media (max-width: 1300px) {
    .flex-box {
      display: grid;
      grid-template-columns: auto auto;
    }
    .header {
      font-size: 28px;
      margin: 3rem;
    }
  }
  @media (max-width: 768px) {
    .flex-box {
      display: flex;
      flex-direction: column;
    }
    .header {
      font-size: 24px;
      margin: 2rem;
    }
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.8rem;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(245, 130, 31, 0);
  border-radius: 10px;
  padding: 2rem 2rem 6rem;
  transition: 0.3s ease-in-out;

  h1 {
    font-weight: 400;
    font-size: 32px;
    color: #10295f;
    opacity: 0.9;
  }
  p {
    font-weight: 200;
    font-size: 18px;
    opacity: 1;
    margin-top: 0;
  }
  @media (max-width: 1300px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-weight: 200;
      opacity: 0.8;
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-weight: 300;
      font-size: 28px;
    }
    p {
      font-weight: 200;
      opacity: 0.8;
      font-size: 13px;
    }
  }
`;

export const ThirdSection = styled.section`
  width: 100%;
  height: 70vh;
  padding: 6rem;
  margin: 0 auto;
  text-align: center;
  background-color: #f6f7ff;
  box-shadow: 0px 10px 15px 15px rgba(0, 0, 0, 0.1);
  border-bottom: 8px solid #10295f;
  color: #1d2758;
  h1 {
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 4px;
    color: #f5821f;
    text-transform: uppercase;
    margin-bottom: 4rem;
  }
  .flex-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    margin-top: 2rem;
  }
  .holder {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    img {
      width: 180px;
    }
    h2 {
      font-size: 32px;
      font-weight: 600;
      opacity: 0.7;
      letter-spacing: 1.6px;
    }
    p {
      font-weight: 200;
      letter-spacing: 1%;
      font-size: 20px;
      opacity: 0.8;
      width: 50%;
      text-align: center;
      line-height: 2rem;
    }
  }
  @media (max-width: 1300px) {
    h1 {
      font-size: 28px;
      letter-spacing: 2.5px;
    }
    .holder {
      h2 {
        font-size: 28px;
        font-weight: 300;
        opacity: 0.8;
      }
      p {
        font-size: 15px;
        font-weight: 200;
        opacity: 0.9;
      }
    }
    img {
      width: 100px;
    }
  }
  @media (max-width: 768px) {
    height: auto;
    h1 {
      font-size: 24px;
      letter-spacing: 2px;
    }
    .holder {
      h2 {
        font-size: 24px;
        font-weight: 300;
        opacity: 0.8;
      }
      p {
        font-size: 13px;
        font-weight: 200;
        opacity: 0.9;
      }
    }
    img {
      width: 60px;
    }
    .flex-box {
      flex-direction: column;
    }
  }
`;
export const LastSection = styled.section`
  position: relative;
  background-color: #f5821f;
  display: flex;
  height: 60vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  letter-spacing: 1%;
  color: white;
  font-size: 32px;
  font-weight: 500;
  padding: 8rem;
  overflow: hidden;
  .logobg {
    left: 2%;
    opacity: 0.2;
    position: absolute;
    width: 620px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 1300px) {
    text-align: center;
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 2rem;
    text-align: center;
  }
`;
export const Footer = styled.footer`
  background: linear-gradient(to right, #10295f, #040b1b);
  padding: 2rem;
  padding-right: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 20vh;

  img {
    width: 160px;
  }
  @media (max-width: 1300px) {
    height: 15vh;
    img {
      width: 120px;
    }
  }
  @media (max-width: 768px) {
    height: 12vh;
    img {
      width: 100px;
    }
  }
  @media (max-width: 328px) {
    img {
      width: 70px;
      height: 25px;
    }
  }
`;
