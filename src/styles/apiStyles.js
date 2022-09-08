import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 40vh;
  position: absolute;
  overflow: hidden;
  top: 0;
  z-index: 99;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  img {
    width: 100%;
    transform: translate(0%, 60%);
    position: absolute;
  }
  .text-box {
    margin: 2rem 12rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;

    h1 {
      opacity: 1;
      font-weight: 600;
      font-size: 40px;
      text-transform: uppercase;
    }
    p {
      font-weight: 100;
      font-size: 20px;
    }
  }
  @media (max-width: 1300px) {
    .text-box {
      margin: 2rem 7rem;
    }
  }
  @media (max-width: 1024px) {
    .text-box {
      margin: 2rem 3rem;
    }
  }
`;
export const Mainer = styled.div`
  padding: 1rem 10rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  min-height: 80vh;
  justify-content: space-between;
  margin-bottom: 6rem;
@media (max-width: 1300px) {
   padding: 1rem 5rem; 
}
@media (max-width: 1024px) {
   padding: 1rem; 
}
  .sidebar {
    background-color: rgba(255, 255, 255, 0.1);
    -webkit backdrop-filter: blur(5px);
    backdrop-filter: blur(15px);
    width: 20%;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 6rem 1rem;
@media (max-width: 1300px){
    width: 30%;
}
    h1{
        text-align: right;
        font-size: 20px;
        font-weight: 600;
        margin-bottom:2rem;
    }
    .api-container{
        display: flex;
        flex-direction: column;
        gap: 1rem
    }
.drop-down{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.4rem 1.2rem;
    background: linear-gradient(to bottom, rgba(217, 217, 217, .3) 0%, rgba(217, 217, 217, .15) 50%,rgba(217, 217, 217, 0) 100%);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    transition: background 1s ease;
    cursor: pointer;
    :hover {
      background: linear-gradient(to bottom, rgba(217, 217, 217, .6) 0%, rgba(217, 217, 217, .4) 50%,rgba(217, 217, 217, 0) 100%);  
    }
    p{
        font-size: 18px;
        font-weight: 300;
    }
    .icon-down{
        font-size: 18px;
    }
    @media (max-width: 1300px) {
   padding: 1.08rem 1rem; 
   p{
    font-size: 16px;
   }
}
}

  }
  .catalague{
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    width: 80%;
    padding: 5rem 2rem;
    border-radius: 20px;
    border: .5px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
     .search-box{
       width: 40rem; 
       padding: 1.2rem;
       display: flex;
       gap: 0.8rem;
       border: 1px solid rgba(255, 255, 255, 0.4);
       .icon-search{
        font-size: 24px;
        color: #fff;
       }
              input{
              border: none; 
              outline: none;
              background: transparent;
              width: 100%;
              color: #fff;
              font-size: 18px;
              opacity: 0.9;

::placeholder{
    opacity: .5;
    color: #fff;
}
       }

     }
     @media (max-width:1024px){
        width: 80%;
        .search-box{
            width: 80%;
        }
    }
     .grid-box{
        display: grid;
        grid-template-columns: auto auto auto;
        width: 100%;
        row-gap: 3rem;
        .apibox{
        width: 280px;
        height: 30vh;
        position: relative;
        overflow: hidden;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        cursor: pointer;
        ::nth-child(5){
          img{
            transform: translateX(20%);
          }
        }
        :hover {
            .dark-blur{
                transform: translateY(0%);
            }
        }
        p{
    z-index: 1000;
    margin: 1rem;
    align-self: flex-end;
    font-weight: 300;
    font-size: 20px;
}
        img{
            position: absolute;
            bottom: 0;
            transform: translateX(-10%);
        }
    .dark-blur{
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0)); 
        position: absolute;
        bottom: 0;
        height: 300px;
        width: 100%;
transform: translateY(50%);
transition: transform .4s ease;
    }
        }
        @media (max-width: 1300px) {
             gap: 2rem;
            .apibox{
                width: 220px;
               
            }
        }
        @media (max-width: 1030px) {
            grid-template-columns: auto auto;
            gap: 3rem;
        }
     }
     
  }
`;
export const Before = styled.div`
  width: 100%;
  height: 40vh;
`;
