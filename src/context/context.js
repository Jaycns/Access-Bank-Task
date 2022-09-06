import { createContext, useState, useEffect } from "react";
const AppContext = createContext();
export const AppProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [chatBox, setChatBox] = useState(false);
  const handleChatbox = () => setChatBox(true);
  const handleChatboxClose = () => setChatBox(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
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
  const navBg = () => {
    if (window.scrollY >= 40) {
      setTopNav(true);
    } else {
      setTopNav(false);
    }
  };
  window.addEventListener("scroll", navBg);

  const stateActions = {
    handleClose,
    handleOpen,
    handleChatboxClose,
    handleChatbox,
    nextSlide,
    prevSlide,
  };
  return (
    <AppContext.Provider
      value={{ chatBox, modal, topNav, carousel, ...stateActions }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
