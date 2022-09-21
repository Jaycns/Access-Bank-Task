import styled from "styled-components";

export const SignForm = styled.div`
  width: 40rem;
  position: fixed;
  z-index: 1000;
  right: 0%;
  top: 3%;
  left: 0%;
  margin: auto;
  border-radius: 10px;
  padding: 4rem;
  background-color: #fff;
  box-shadow: 0px 4px 40px rgba(29, 39, 88, 0.4);
  @media (max-width: 1300px) {
    top: 2%;
    padding: 3rem;
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
    margin-bottom: 1.6rem;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 3.2rem;
    color: #000;
    opacity: 0.8;

    span {
      text-decoration: underline;
      color: #ef7d00;
      cursor: pointer;
    }
  }
  @media (max-width: 1300px) {
    h1 {
      margin-bottom: 1.6rem;
    }
    p {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 768px) {
    right: 0%;
    top: 10%;
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
    @media (max-width: 1300px) {
      gap: 1.6rem;
      justify-content: space-between;
    }
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
      @media (max-width: 1300px) {
        padding: 0.98rem 1.2rem;
      }
      @media (max-width: 768px) {
        padding: 0.72rem 1.2rem;
      }
    }
    .google-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
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
    .holder.log {
      height: auto;
    }
    .holder {
      display: flex;
      flex-direction: column;
      gap: 2.2rem;
      position: relative;
      overflow: scroll;
      height: 30vh;

      @media (max-width: 1300px) {
        height: 30vh;
        gap: 1.2rem;
      }
      p {
        margin: 0;
      }
      button {
        font-size: 16px;
        padding: 1rem;
      }
      input {
        font-size: 18px;
        outline: none;
        transition: all 0.1s ease;
        :focus {
          border: 2px solid #4180ff;
        }
      }
      .password {
        display: flex;
        align-items: center;
        position: relative;
        .eye {
          margin-left: -2rem;
          font-size: 20px;
        }
      }
      .pass-box {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: -1rem;
        @media (max-width: 1300px) {
          margin-top: -0.5rem;
        }
        span {
          color: #ef7d00;
          font-size: 16px;
        }
        .check-box {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          input {
            width: 20px;
          }
        }
      }
      @media (max-width: 768px) {
        height: auto;
        gap: 1rem;
        justify-content: space-between;
        input {
          font-size: 14px;
        }
        button {
          height: 50px !important;
          font-size: 14px;
        }
        .pass-box {
          margin-top: 0rem;
          span {
            font-size: 10px;
          }
          .check-box {
            p {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
`;
