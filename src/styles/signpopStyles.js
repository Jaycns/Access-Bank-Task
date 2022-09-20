import styled from "styled-components";

export const SignForm = styled.div`
  width: 40rem;
  position: fixed;
  z-index: 900;
  transform: translate(0%, 0%);
  right: 33%;
  top: 10%;
  border-radius: 10px;
  padding: 4rem;
  background-color: #fff;
  box-shadow: 0px 4px 40px rgba(29, 39, 88, 0.4);
  @media (max-width: 1300px) {
    right: 25%;
    top: 8%;
  }

  .icon {
    position: absolute;
    right: 6%;
    top: 4%;
    font-size: 24px;
    font-weight: 200;
    color: #767779;
  }
  h1 {
    font-size: 40px;
    font-weight: medium;
    margin-bottom: 2rem;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4rem;
    color: #000;
    opacity: 0.8;

    span {
      text-decoration: underline;
      color: #ef7d00;
    }
    @media (max-width: 1300px) {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 768px) {
    right: 0%;
    top: 8%;
    width: 100%;
    border-radius: 0;
    padding: 2rem;
    height: 100vh;
    h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .icon {
      display: none;
    }
    p {
      font-size: 12px;
      margin-bottom: 1.5rem;
    }
    .shadow {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 1rem;
    }
  }
  .flex-box {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (max-width: 768px) {
      gap: 1rem;
      justify-content: space-between;
    }
    button {
      width: 8rem;
    }
    .google-box,
    input {
      width: 100%;
      padding: 1.2rem 1.6rem;
      border: 1px solid #767779;
      border-radius: 6px;
      @media (max-width: 768px) {
        padding: 0.72rem 1.2rem;
      }
    }
    .google-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 24px;
      }
      p {
        margin: 0;
        font-size: 18px;
      }
      @media (max-width: 768px) {
        justify-content: center;
        gap: 1rem;

        p {
          font-size: 12px;
        }
        img {
          width: 14px;
        }
      }
    }
    .or {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      p {
        margin: 0;
      }
      .line {
        background-color: #767779;
        height: 1px;
        width: 100%;
      }
    }
    .holder {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      position: relative;
      overflow: scroll;
      height: 25vh;
      p {
        margin: 0;
      }
      input {
        font-size: 18px;
        transition: all 0.3s ease;
      }
      @media (max-width: 768px) {
        height: auto;
        gap: 1rem;
        justify-content: space-between;
        input {
          font-size: 14px;
        }
      }
    }
  }
`;
