import React, { useContext } from "react";
import AppContext from "../context/context";
import "../App.scss";
import { MdAttachFile, MdOutlineEmojiEmotions } from "react-icons/md";
import { AiOutlineLeft } from "react-icons/ai";

function Popup() {
  const { handleChatboxClose } = useContext(AppContext);
  return (
    <div className="popup-container">
      <div className="box">
        <span>
          <AiOutlineLeft className="icon" onClick={handleChatboxClose} />
        </span>
        <div className="top-text">
          <h1>Help</h1>
          <p>Typically replies in under 5 mins</p>
        </div>
      </div>
      <div className="type">
        <div className="replybox">
          <input type="text" className="reply" placeholder="Reply here..." />
        </div>
        <div className="extra">
          <MdAttachFile className="icon" />
          <MdOutlineEmojiEmotions className="icon" />
        </div>
      </div>
      <div className="chat">
        <div className="chat-container">
          <div className="circle"></div>
          <div className="msbox">
            <h2>Freshchat</h2>
            <p>
              Hello there!... Need help? Reach out to us right here, and we'll
              get back to you as soon as we can!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
