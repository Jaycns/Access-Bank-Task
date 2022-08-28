import styled from "styled-components";

export const FirstSection = styled.section`
  background: linear-gradient(to right, #10295f, #040b1b);
  height: 100vh;
  width: 100%;
  color: white;
  padding: 1rem 2rem;
  z-index: 99;
  position: relative;
  .second {
    background: url(./images/background.png);
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
export const TopNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3 ease-in-out;
  img {
    width: 160px;
    height: 57px;
  }
  @media (max-width: 1300px) {
    img {
      width: 100px;
      height: 38px;
    }
  }
  @media (max-width: 768px) {
    img {
      width: 100px;
      height: 35px;
    }
  }
  @media (max-width: 328px) {
    img {
      width: 70px;
      height: 25px;
    }
  }
`;
export const Nav = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  a {
    text-decoration: none;
    height: 40px;
    color: white;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 16px;
    font-weight: 300px;
    transition: 0.3s ease-in-out;
    &:first-child {
      border-bottom: 2px solid #f5821f;
      color: #f5821f;
    }
    &:hover {
      color: #f5821f;
    }
  }
  @media (max-width: 1300px) {
    gap: 1.2rem;
    a {
      font-size: 12px;
      height: 20px;
      letter-spacing: 2px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 40px;
  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 16px;
    font-weight: 300px;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #f5821f;
    }
  }
  @media (max-width: 1300px) {
    gap: 1rem;
    a {
      font-size: 11px;
    }
  }
  @media (max-width: 768px) {
    gap: 0.8rem;
    a {
      display: none;
      font-size: 11px;
      letter-spacing: 2px;
    }
  }
`;

export const Button = styled.button`
  outline: none;
  background: ${({ bg }) => bg || "#f5821f"};
  border-radius: ${({ bd }) => bd || "5px"};
  color: white;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 0.8rem 1.2rem;
  width: ${({ width }) => width || ""};
  border: 1px solid #f5821f;
  transition: 0.3s ease-in-out;
  &:hover {
    background: transparent;
    color: #f5821f;
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

  h1 {
    font-size: 72px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 0;
    height: 80px;

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
      transition: all 0.5 ease-in-out;
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
  min-height: 40vh;
  background-color: #fff;
  padding: 2rem;
  .flex-box {
    display: flex;
    gap: 1.2rem;
  }
  @media (max-width: 1300px) {
    .flex-box {
      display: grid;
      grid-template-columns: auto auto;
    }
  }
  @media (max-width: 768px) {
    .flex-box {
      flex-direction: column;
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
  border: 1px solid rgba(245, 130, 31, 0.3);
  border-radius: 10px;
  padding: 0.8rem 1rem 6rem;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 4px 3px rgba(245, 130, 31, 0.1);
    border: 1px solid rgba(245, 130, 31, 0);
    transform: scale(1.05);
  }

  h1 {
    font-weight: 400;
    font-size: 32px;
    opacity: 0.7;
  }
  p {
    font-weight: 300;
    font-size: 16px;
    opacity: 0.7;
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
  min-height: 40vh;
  padding: 4rem;
  text-align: center;
  background-color: rgb(255, 255, 255);

  h1 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 4px;
    color: #f5821f;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
  .flex-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1.2rem;
    margin-top: 2rem;
  }
  .holder {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    h2 {
      font-size: 32px;
      font-weight: 500;
      opacity: 0.7;
      letter-spacing: 1.6px;
    }
    p {
      font-weight: 400;

      opacity: 0.8;
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
  background-color: #f5821f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
  color: white;
  font-size: 32px;
  font-weight: 500;
  padding: 8rem;
  button {
    :hover {
      border: 1px solid #10295f;
      color: #10295f;
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
  background-color: #10295f;
  padding: 2rem;
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
export const ModalBox = styled.div`
  padding: 2rem;
  width: 40rem;
  min-height: 80vh;
  border: 2px solid rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 99;
  background: #f6f7f3;
  transform: translate(100%, 20%);
  img {
    width: 160px;
  }
  h1 {
    font-weight: 400;
    font-size: 40px;
    opacity: 0.7;
    margin-top: 1rem;
  }
  .checkbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media (max-width: 1300px) {
    padding: 1.4rem;
    transform: translate(0%, 10%);
    width: 100%;
    img {
      width: 100px;
    }
    h1 {
      font-size: 24px;
      font-weight: 300;
      opacity: 0.8;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 1.4rem;
    transform: translate(0%, 10%);
    img {
      width: 100px;
    }
    h1 {
      font-size: 24px;
      font-weight: 300;
      opacity: 0.8;
    }
  }
`;
export const InputBox = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  label {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    opacity: 0.9;
    font-weight: 300;
    text-align: left;
  }
  input,
  select {
    width: 20rem;
    padding: 0.5rem 0.5rem;
    outline: none;
    background: transparent;
  }
  input[type="text"],
  input[type="password"] {
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    transition: 0.3s ease-in-out;
    font-size: 18px;
    font-weight: 300;
    opacity: 0.7;
    letter-spacing: 2px;

    :focus {
      border-bottom: 2px solid #f5821f;
    }
  }

  select {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: auto auto;
    label {
      font-size: 12px;
      letter-spacing: 1.5px;
    }
    & div {
      gap: 0.6rem;
    }
  }
  @media (max-width: 768px) {
    label {
      font-size: 12px;
    }
    & div {
      gap: 0.6rem;
    }
    input,
    select {
      width: 80%;
    }
  }
`;
export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 300;
    opacity: 0.9;
    span {
      color: #f5821f;
    }
  }
  @media (max-width: 1300px) {
    p {
      font-size: 14px;
      font-weight: 300;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 13px;
      font-weight: 300;
    }
  }
`;
