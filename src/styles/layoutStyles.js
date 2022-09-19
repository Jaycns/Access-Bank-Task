import styled from "styled-components";

export const ModalBox = styled.div`
  padding: 2rem;
  width: 40rem;
  min-height: ${({ h }) => h || "60"}vh;
  border: 2px solid rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 99;
  background: #f6f7f3;
  transform: translate(100%, 20%);
  .icon {
    position: absolute;
    font-size: 24px;
    right: 6%;
    opacity: 0.6;
    color: #767779;
  }

  img {
    width: 160px;
  }
  h1 {
    font-weight: 400;
    font-size: 40px;
    opacity: 0.7;
    margin-top: 1rem;
  }
  p {
    font-size: 16px;
    margin: 0.8rem 0;
    cursor: pointer;
    span {
      color: #f5821f;
      :hover {
      }
    }
  }
  .checkbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  @media (max-width: 1300px) {
    padding: 1.4rem;
    transform: translate(0%, 10%);
    width: 100%;
    .icon {
      right: 3%;
    }
    img {
      width: 100px;
    }
    h1 {
      font-size: 24px;
      font-weight: 300;
      opacity: 0.8;
    }
    p {
      font-size: 15px;
      font-weight: 300;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 1.4rem;
    transform: translate(0%, 20%);
    min-height: 50vh;
    img {
      width: 80px;
    }
    h1 {
      font-size: 20px;
      margin-top: 10px;
      font-weight: 300;
      opacity: 0.8;
    }
    p {
      font-size: 14px;
    }
  }
`;
export const InputBox = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 1rem;
  overflow: scroll;
  height: ${({ h }) => h || "30"}vh;
  width: 100%;
  position: relative;
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
    display: flex;
    flex-direction: column;
    padding: 0rem 0.5rem;
    margin-top: 10px;
    gap: 0.6rem;
    label {
      font-size: 12px;
      letter-spacing: 1px;
    }
    & div {
      gap: 0.4rem;
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
      font-size: 11px;
      font-weight: 300;
    }
  }
`;
export const ButtonFill = styled.button`
  outline: none;
  background: ${({ bg }) => bg || " #f5821f "};
  border-radius: ${({ bd }) => bd || "5px"};
  color: #fff;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 0.8rem 1.2rem;
  width: ${({ width }) => width || ""};
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    left: 0px;
    top: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }
  :hover {
    ::before {
      transform: translateX(0%);
    }
  }
  :disabled {
    ::before {
      transform: translateX(0%);
      background-color: rgba(255, 255, 255, 0.8);
    }
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
export const TopNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  transition: all 0.3 ease-in-out;
  img {
    width: 160px;
    height: 57px;
  }
  .hamburger {
    position: absolute;
    z-index: 999;
    right: 10%;
    display: none;
    flex-direction: column;
    gap: 0.2rem;
    transition: all 0.5s ease;
    span {
      background-color: #fff;
      width: 12px;
      height: 3px;
    }
    .line1 {
      transition: transform 0.5s ease;
    }
    .line2 {
      width: 22px;
      transition: transform 0.5s ease;
    }
    .line3 {
      align-self: flex-end;
      transition: transform 0.5s ease;
    }
  }
  .hamburger.active {
    gap: 0;
    span {
      width: 14px;
    }
    .line1 {
      transform: rotate(45deg);
    }
    .line2 {
      transform: rotate(-45deg);
      width: 22px;
    }
    .line3 {
      transform: rotate(45deg);
    }
  }
  @media (max-width: 1300px) {
    img {
      width: 100px;
      height: 38px;
    }
  }
  @media (max-width: 768px) {
    a {
      margin: 0;
      padding: 0;
    }
    .hamburger {
      display: flex;
    }
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
    text-decoration: none !important;
    list-style-type: none !important;
    -webkit-text-decoration: none !important;
    outline: none !important;
    height: 40px;
    color: white;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 16px;
    font-weight: 300;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #f5821f;
    }
  }
  a.active {
    border-bottom: 2px solid #f5821f;
    color: #f5821f;
  }
  @media (max-width: 1300px) {
    gap: 1.2rem;
    a {
      font-size: 12px;
      height: 28px;
      letter-spacing: 2px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SideBar = styled.div`
  position: fixed;
  top: 10%;
  width: 100%;
  z-index: 900;
  background-image: linear-gradient(to right, rgb(16, 41, 95), rgb(4, 14, 34));
  backdrop-filter: blur(50px);
  padding-left: 2rem;
  color: #fff;
  transition: transform 0.6s ease;
  .box {
    display: flex;
    justify-content: space-between;
    padding: 1.6rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-right: 2rem;

    a,
    p {
      font-size: 14px;
      letter-spacing: 2px;
      font-weight: 300;
      text-transform: uppercase;
    }
    a {
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: #fff;
    }
    .active {
      color: #f5821f;
    }
    .icon {
      color: #f9f8f8;
      opacity: 0.5;
    }
  }
  .box.signin {
    border-bottom: none;
  }
`;
