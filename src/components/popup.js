import React from "react";
import "../App.scss";
import { MdAttachFile, MdOutlineEmojiEmotions } from "react-icons/md";
import { AiOutlineLeft } from "react-icons/ai";

function Popup({ handleChatboxClose }) {
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
      <div className="chat"></div>
    </div>
  );
}

export default Popup;
