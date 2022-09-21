import React, { useContext, useState } from "react";
import AppContext from "../context/context";
import { SignForm } from "../styles/signpopStyles";
import { ButtonFill } from "../styles/layoutStyles";
import { BsXLg } from "react-icons/bs";
import Icon from "../images/google.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function LogIn() {
  const { handleOpen, handleLoginClose } = useContext(AppContext);
  const [keyShown, setKeyShown] = useState(false);
  const handleShown = () => {
    setKeyShown(!keyShown);
  };
  return (
    <SignForm>
      <BsXLg className="icon" onClick={handleLoginClose} />
      <div className="shadow">
        <h1>Sign in to your account.</h1>
        <p>
          Already have one? <span onClick={handleOpen}>Sign up now</span>
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
          <div className="holder log">
            <input type="text" placeholder="Email Address" />
            <div className="password">
              <input
                type={keyShown ? "text" : "password"}
                placeholder="Password"
              />
              {keyShown ? (
                <AiFillEyeInvisible className="eye" onClick={handleShown} />
              ) : (
                <AiFillEye className="eye" onClick={handleShown} />
              )}
            </div>
            <div className="pass-box">
              <div className="check-box">
                <input type="checkbox" />
                <p>Remember me on this device</p>
              </div>
              <span>Forgot your password</span>
            </div>
            <div className="btn">
              <ButtonFill bd="6px" h="60px" disabled={true}>
                Sign in
              </ButtonFill>
            </div>
          </div>
        </div>
      </div>
    </SignForm>
  );
}

export default LogIn;
