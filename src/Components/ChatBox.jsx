import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ChatBox = ({ data, isActive, onSelectChat }) => {
  return (
    <Link to={`/chat-page/${data.id}`} style={{ textDecoration: 'none' }}>
      <div onClick={() => onSelectChat(data.id)} className={`Chat-box ${isActive ? 'selected' : ''}`}>
        <img src={data.image} alt={data.name} />
        <div className={'info'}>
          <em>{ data.name }</em>
          <p className={'Ellipsis'}>
            { data.chats[data.chats.length - 1].message}
          </p>
        </div>
      </div>
    </Link>
  )
};

ChatBox.propTypes = {
  data: PropTypes.object,
  isActive: PropTypes.bool,
  onSelectChat: PropTypes.func,
};

export default ChatBox;
