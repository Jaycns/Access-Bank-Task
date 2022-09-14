import React, { useContext } from "react";
import Top from "./topNav";
import LoginModal from "../components/loginmodal";
import SignUpModal from "../components/signupmodal";
import { Modal } from "@mui/material";
import Sidebar from "./sidebar";
import AppContext from "../context/context";
import "../styles/layout.scss";

const Layout = ({ children }) => {
  const { modal, handleClose, handleLoginClose, loginModal} =
    useContext(AppContext);
  return (
    <>
      <div className="layout">
        <Top />
        <Sidebar />
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
        <Modal
          open={loginModal}
          onClose={handleLoginClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <LoginModal onClose={handleLoginClose} />
          </div>
        </Modal>
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
