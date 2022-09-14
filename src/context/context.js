import { createContext, useState, useEffect } from "react";
const AppContext = createContext();
export const AppProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [chatBox, setChatBox] = useState(false);
  const handleChatbox = () => setChatBox(true);
  const handleChatboxClose = () => setChatBox(false);
  const handleOpen = () => {
    setModal(true);
    setLoginModal(false);
    handleMenuClose();
  };
  const handleClose = () => setModal(false);
  const handleLoginOpen = () => {
    setLoginModal(true);
    setModal(false);
    handleMenuClose();
  };
  const handleLoginClose = () => setLoginModal(false);
  const [carousel, setCarousel] = useState(0);
  const nextSlide = () => {
    if (carousel === 0) setCarousel(1);
  };
  const prevSlide = () => {
    if (carousel === 1) setCarousel(0);
  };

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
  const [topNav, setTopNav] = useState(false);
  const [cardAnimation, setCardAnimation] = useState(false);
  const navBg = () => {
    if (window.scrollY >= 50) {
      setTopNav(true);
    } else {
      setTopNav(false);
    }
  };
  window.addEventListener("scroll", navBg);
  const Card = () => {
    if (window.scrollY >= 340) {
      setCardAnimation(true);
    } else if (window.scrollY <= 250) {
      setCardAnimation(false);
    }
  };
  window.addEventListener("scroll", Card);
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleMenuClose = () => {
    setMenu(false);
  };
  const [activeNav, setActiveNav] = useState("/");

  const handleNav = (e) => {
    setActiveNav(e.target.getAttribute("id"));
    handleMenuClose();
  };
  const stateActions = {
    handleClose,
    handleOpen,
    handleChatboxClose,
    handleChatbox,
    nextSlide,
    prevSlide,
    handleLoginClose,
    handleLoginOpen,
    handleMenu,
    handleMenuClose,
    handleNav,
  };
  return (
    <AppContext.Provider
      value={{
        chatBox,
        modal,
        topNav,
        cardAnimation,
        carousel,
        loginModal,
        menu,
        activeNav,
        ...stateActions,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
