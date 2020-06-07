import React from 'react';
import { Link } from "react-router-dom";

const ChatBox = ({ id }) => {
  return (
    <div><Link to={`/chat-page/${id}`}>hello world chat item </Link></div>
  )
};

export default ChatBox;
