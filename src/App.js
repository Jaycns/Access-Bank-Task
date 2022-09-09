import Home from "./pages/home";
import "./App.scss";
import Popup from "./components/popup";
import React, { useContext } from "react";
import AppContext from "./context/context";

function App() {
  const { handleChatbox, chatBox, handleChatboxClose } = useContext(AppContext);
  return (
    <>
      <Home handleChatbox={handleChatbox} />
      {chatBox && <Popup handleChatboxClose={handleChatboxClose} />}
    </>
  );
}

export default App;
