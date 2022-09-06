import Home from "./pages/home";
import "./App.scss";
import SignUpModal from "./components/modal";
import Popup from "./components/popup";
import { Modal } from "@mui/material";
import React, { useContext } from "react";
import AppContext from "./context/context";

function App() {
  const { handleChatbox, chatBox, handleChatboxClose, modal, handleClose } =
    useContext(AppContext);
  return (
    <>
      <Home handleChatbox={handleChatbox} />
      {chatBox && <Popup handleChatboxClose={handleChatboxClose} />}
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <SignUpModal onClose={handleClose} />
        </div>
      </Modal>
    </>
  );
}

export default App;
