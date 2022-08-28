import React from "react";
import Logo from "../images/logo_2.png";
import { ModalBox, InputBox, CheckBox, Button } from "../homeStyle";

function SignupModal({ onClose }) {
  return (
    <ModalBox>
      <img src={Logo} alt="Logo" />
      <h1>Create an account</h1>
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
          <Button className="btn" width="150px" bd="20px" onClick={onClose}>
            Submit
          </Button>
        </div>
      </form>
    </ModalBox>
  );
}

export default SignupModal;
