import styled from "styled-components";

export const ApiSection = styled.section`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  box-shadow: 0px 10px 15px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 2rem;
    min-height: 30vh;
    gap: 2rem;
  }
  .header {
    color: #a4c519;
    font-size: 36px;
    text-align: center;
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
      margin: 2rem;
    }
  }
  @media (max-width: 768px) {
    .view-box {
      p {
        font-size: 16px;
      }
    }
    .scroller {
      position: relative;
      overflow: scroll;
      width: 100%;
      height: 50vh;
    }
    .flex-box {
      align-items: center;
      position: absolute;
      z-index: 800;
      gap: 1.6rem;
    }
    .header {
      font-size: 24px;
      margin: 0rem;
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
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 250px;
    border-radius: 10px;
  }
  img {
    left: -20%;
    position: absolute;
    transition: transform 0.5s ease;
    mix-blend-mode: multiply;
  }

  .tranx {
    left: -30%;
    transition: transform 1s ease;
  }
  .flowbox {
    margin: 0.8rem;
    width: 100%;
    height: 280px;
    position: relative;
    overflow: hidden;
  }
  .textbox {
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.4);
    min-height: 5vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    align-items: flex-start;
    position: absolute;
    bottom: 5%;
    left: 0%;
    transform: translateY(60%);
    transition: all 0.6s ease;
    p {
      font-size: 20px;
      font-weight: 500;
      transition: color 0.5s ease;
    }
  }
  .span {
    display: flex;
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
    .p {
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
    p {
      color: #1d2758;
      font-weight: 600;
    }
    img {
      ${"" /* width: 600px; */}
      mix-blend-mode: lighten;
      transform: scale(1.1);
    }
    .textbox {
      background-color: rgba(255, 255, 255, 0.7);
      transform: translateY(20%);
    }
  }
`;
