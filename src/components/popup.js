import React, { useContext, useState } from "react";
import AppContext from "../context/context";
import "../App.scss";
import { MdAttachFile, MdOutlineEmojiEmotions } from "react-icons/md";
// import { AiOutlineLeft } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";

function Popup() {
  const { handleChatboxClose } = useContext(AppContext);
  const [chat, setChat] = useState("");
  const [message, setMessage] = useState([]);
  const handleChat = (e) => {
    setChat(e.target.value);
    console.log({ input: e.target.value });
  };

  const handleMessage = (e) => {
    try {
      setMessage([...message, chat]);
      setChat("");
      e.preventDefault();
      console.log({ Message: message });
    } catch (e) {
      console.log({ error: e });
    }
  };
  return (
    <div className="popup-container">
      <div className="box">
        <div className="top-text">
          <h1>Help</h1>
          <p>Typically replies in under 5 mins</p>
        </div>
        <span>
          <BsXLg className="icon" onClick={handleChatboxClose} />
        </span>
      </div>
      <div className="type">
        <form className="replybox" action="no action" onSubmit={handleMessage}>
          <input
            type="text"
            className="reply"
            placeholder="Reply here..."
            value={chat}
            onChange={handleChat}
          />
        </form>
        <div className="extra">
          <MdAttachFile className="icon" />
          <MdOutlineEmojiEmotions className="icon" onClick={handleMessage} />
        </div>
      </div>
      <div className="chat">
        <div className="admin-container">
          <div className="circle"></div>
          <div className="msbox">
            <h2>Freshchat</h2>
            <p>
              Hello there!👋Need help? Reach out to us right here, and we'll get
              back to you as soon as we can!
            </p>
          </div>
        </div>

        {message.map((item) => (
          <div className="user-container">
            <p>{item}</p>
            <div className="circle"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popup;
