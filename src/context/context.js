import React, { createContext, useState, useEffect, useCallback } from "react";
const AppContext = createContext();
export const AppProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [chatBox, setChatBox] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = useCallback(() => {
    setHamburger(true);
  }, [setHamburger]);
  const handleChatbox = () => setChatBox(true);
  const handleChatboxClose = () => setChatBox(false);
  const handleOpen = useCallback(() => {
    setModal(true);
    setLoginModal(false);
    setHamburger(true);
  }, [setModal]);
  const handleClose = () => setModal(false);
  const handleLoginOpen = useCallback(() => {
    setLoginModal(true);
    setModal(false);
    setHamburger(true);
  }, [setLoginModal]);
  const closeAll = () => {
    if (modal) {
      handleClose();
    }
    if (loginModal) {
      handleLoginClose();
    }
    if (menu) {
      handleMenu();
    }
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
    if (carousel === 0) {
      const Timer = setInterval(() => {
        setCarousel(1);
      }, 20000);
      return () => clearInterval(Timer);
    } else if (carousel === 1) {
      const Timer = setInterval(() => {
        setCarousel(0);
      }, 20000);
      return () => clearInterval(Timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carousel]);

  const [topNav, setTopNav] = useState(false);
  const [cardAnimation, setCardAnimation] = useState(false);
  const navBg = useCallback(() => {
    if (window.scrollY >= 50) {
      setTopNav(true);
    } else {
      setTopNav(false);
    }
  }, [setTopNav]);
  window.addEventListener("scroll", navBg);
  const Card = useCallback(() => {
    if (window.scrollY >= 340) {
      setCardAnimation(true);
    } else if (window.scrollY <= 250) {
      setCardAnimation(false);
    }
  }, [setCardAnimation]);
  window.addEventListener("scroll", Card);
  const [menu, setMenu] = useState(false);

  const handleMenu = useCallback(() => {
    setHamburger(!hamburger);
    hamburger ? setMenu(false) : setMenu(true);
    handleClose();
    handleLoginClose();
  }, [hamburger]);
  const handleMenuClose = useCallback(() => {
    setMenu(false);
  }, [setMenu]);
  const [activeNav, setActiveNav] = useState("/");

  const handleNav = useCallback(
    (e) => {
      setActiveNav(e.target.getAttribute("id"));
      handleMenuClose();
    },
    [handleMenuClose]
  );

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
    handleHamburger,
    closeAll,
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
        hamburger,
        ...stateActions,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
