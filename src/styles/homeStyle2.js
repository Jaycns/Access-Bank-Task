import styled from "styled-components";

export const ApiSection = styled.section`
  height: 80vh;
  width: 100%;
  padding: 6rem 4rem;
  box-shadow: 0px 10px 15px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    height: auto;
  }
  .header {
    color: #a4c519;
    font-size: 36px;
    text-align: center;
    margin: 4rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
  }
  .flex-box {
    display: flex;
    justify-content: center;
    gap: 6rem;
  }
  .view-box {
    color: #a4c519;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6rem;
    gap: 0.4rem;
    cursor: pointer;
    .hover {
      display: none;
      font-size: 24px;
    }
    .icon {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }
    :hover {
      .hover {
        display: block;
      }
      .icon {
        display: none;
      }
    }
  }
  @media (max-width: 1300px) {
    .header {
      font-size: 28px;
      margin: 3rem;
    }
  }
  @media (max-width: 768px) {
    .view-box {
      p {
        font-size: 16px;
      }
    }
    .flex-box {
      flex-direction: column;
      align-items: center;
    }
    .header {
      font-size: 24px;
      margin: 2rem;
    }
  }
`;
export const ApiCard = styled.div`
  position: relative;
  width: 300px;
  height: 305px;
  cursor: pointer;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 3s ease;
  background-color: rgba(0, 0, 0, 0.2);

  img {
    transform: translateX(-12%);
    transition: transform 1s ease;
    mix-blend-mode: multiply;
  }

  .tranx {
    transform: translateX(-20%);
    transition: transform 1s ease;
  }
  .textbox {
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.6);
    min-height: 5vh;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    align-items: flex-start;
    position: absolute;
    bottom: 5%;
    left: 5%;
    transition: background-color 0.5s ease;
    p {
      opacity: 1;
      font-size: 20px;
      font-weight: 500;
      transition: color 0.5s ease;
    }
  }
  .span {
    display: none;
    align-items: center;
    gap: 0.5rem;
    transition: all 2s ease;
    -webkit-transition: all 2s ease;
    -moz-transition: all 2s ease;
    -o-transition: all 2s ease;
    .icon {
      font-size: 24px;
      color: #a4c519;
      transition: all 0.5s ease;
    }
    .hover {
      font-size: 24px;
      color: #a4c519;
      transition: all 0.5s ease;
      display: none;
    }
    p {
      font-weight: 300;
      font-size: 18px;
    }
    :hover {
      .hover {
        display: block;
      }
      .icon {
        display: none;
      }
    }
  }
  &:hover {
    .span {
      display: flex;
    }
    p {
      color: #10295f;
    }
    img {
      ${"" /* width: 600px; */}
      mix-blend-mode: lighten;
      transform: scale(1.1);
    }
    .textbox {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`;
