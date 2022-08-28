import Home from "./components/home";
import "./App.css";
import SignUpModal from "./components/modal";
import { Modal } from "@mui/material";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  const handleScroll = (event) => {
    console.log("scrollTop: ", event.target.scrollTop);
    console.log("offsetHeight: ", event.target.offsetHeight);
  };
  return (
    <div className="App" onScroll={handleScroll}>
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
