import React, { useContext } from "react";
import AppContext from "../context/context";
import Logo from "../images/logo_2.png";
import { BsXLg } from "react-icons/bs";
import { ModalBox, InputBox, CheckBox, ButtonFill } from "../styles/homeStyle";

function SignupModal() {
  const { handleLoginOpen, handleClose } = useContext(AppContext);
  return (
    <ModalBox>
      <BsXLg className="icon" onClick={handleClose} />
      <img src={Logo} alt="Logo" />
      <h1>Create an account</h1>
      <p>
        Already have one? <span onClick={handleLoginOpen}>Sign in now</span>
      </p>
      <form method="post" action="">
        <InputBox>
          <div className="">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="">
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div className="">
            <label>Organization</label>
            <input type="text" />
          </div>
          <div className="">
            <label>Primary Purpose</label>
            <select>
              <option>E-commerce/Payments</option>
            </select>
          </div>
          <div className="">
            <label>Secondary Purpose</label>
            <select>
              <option>E-commerce/Payments</option>
            </select>
          </div>
          <div className="">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="">
            <label>Confirm Password</label>
            <input type="password" />
          </div>
        </InputBox>
        <div className="checkbox">
          <CheckBox>
            <input type="checkbox" />
            <p>
              I agree to the <span>Terms</span> and <span>Conditions</span>
            </p>
          </CheckBox>
          <ButtonFill width="150px" onClick={handleClose} disabled={true}>
            Submit
          </ButtonFill>
        </div>
      </form>
    </ModalBox>
  );
}

export default SignupModal;
