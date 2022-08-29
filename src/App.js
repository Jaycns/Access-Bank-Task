import Home from "./components/home";
import "./App.css";
import SignUpModal from "./components/modal";
import { Modal } from "@mui/material";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  return (
    <div className="App">
      <Home handleOpen={handleOpen} />
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
