import React, { useContext } from "react";
import AppContext from "../context/context";
import { SignForm } from "../styles/signpopStyles";
import { ButtonFill } from "../styles/layoutStyles";
import { BsXLg } from "react-icons/bs";
import Icon from "../images/google.png";

function SignPop() {
  const {  handleClose } = useContext(AppContext);
  return (
    <SignForm>
      <BsXLg className="icon" onClick={handleClose} />
      <div className="shadow">
        <h1>Create your account.</h1>
        <p>
          Already have one? <span>Sign in now</span>
        </p>
        <div className="flex-box">
          <div className="google-box">
            <img src={Icon} alt="icon" /> <p>Sign up with Google</p>
            <div className=""></div>
          </div>
          <div className="or">
            <div className="line"></div>
            <p>or</p>
            <div className="line"></div>
          </div>
          <div className="holder">
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <ButtonFill bd="6px" disabled={true}>
              Sign up
            </ButtonFill>
            <p>
              By clicking "Sign up", you agree to our
              <span> Terms of Service</span> and <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </SignForm>
  );
}

export default SignPop;
