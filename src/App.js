import Home from "./components/home";
import "./App.scss";
import SignUpModal from "./components/modal";
import Popup from "./components/popup";
import { Modal } from "@mui/material";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [chatBox, setChatBox] = useState(false);
  const handleChatbox = () => setChatBox(true);
  const handleChatboxClose = () => setChatBox(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  return (
    <div className="App">
      <Home handleOpen={handleOpen} handleChatbox={handleChatbox} />
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
    </div>
  );
}

export default App;
