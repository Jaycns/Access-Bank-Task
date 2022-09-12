import React, { useContext } from "react";
import AppContext from "../context/context";
import Logo from "../images/logo_2.png";
import { BsXLg } from "react-icons/bs";
import { ModalBox, InputBox, CheckBox, ButtonFill } from "../styles/layoutStyles";

function LoginModal({ onClose }) {
  const { handleOpen, handleLoginClose } = useContext(AppContext);
  return (
    <ModalBox h="50">
      <BsXLg className="icon" onClick={handleLoginClose} />
      <img src={Logo} alt="Logo" />
      <h1>Sign in to your account</h1>
      <p>
        Not a member yet? <span onClick={handleOpen}>Sign Up now</span>
      </p>
      <form method="post" action="">
        <InputBox h="12">
          <div className="">
            <label>Email</label>
            <input type="text" required='email*'/>
          </div>
          <div className="">
            <label>Password</label>
            <input type="password" required='password*'/>
          </div>
        </InputBox>
        <div className="checkbox">
          <CheckBox>
            <p>
              <span>Forgot your password?</span>
            </p>
          </CheckBox>
          <ButtonFill width="150px" onClick={onClose} disabled= {true}>
            Submit
          </ButtonFill>
        </div>
      </form>
    </ModalBox>
  );
}

export default LoginModal;
