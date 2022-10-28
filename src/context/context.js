import React, { createContext, useState, useEffect, useCallback } from "react";
const AppContext = createContext();
export const AppProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [chatBox, setChatBox] = useState(false);
  const handleChatbox = () => setChatBox(true);
  const handleChatboxClose = () => setChatBox(false);
  const handleOpen = useCallback(() => {
    setModal(true);
    setLoginModal(false);
  }, [setModal]);
  const handleClose = () => setModal(false);
  const handleLoginOpen = useCallback(() => {
    setLoginModal(true);
    setModal(false);
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
    setTimeout(() => {
      if (carousel === 0) {
        setCarousel(1);
      } else {
        setCarousel(0);
      }
    }, 20000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (carousel === 1) {
        setCarousel(0);
      } else {
        setCarousel(1);
      }
    }, 30000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    setMenu(!menu);
    handleClose();
    handleLoginClose();
  }, [menu]);
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
        ...stateActions,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
