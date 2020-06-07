import React from 'react'
import PropTypes from 'prop-types';


const ChatInputBox = ({ message, onSend, onChange, onBlur }) => {
  return (
    <div className={'Chat-input-container'}>
      <div className={'input-container'}>
        <input
          onBlur={onBlur}
          onChange={onChange}
          value={message}
          placeholder={'Write your message ...'}
          className={'Chat-input-box'}
        />
      </div>
      <div>
        <button onClick={onSend} className={'Chat-button'}>Send</button>
      </div>
    </div>
  );
};

ChatInputBox.propTypes = {
  message: PropTypes.string,
  onSend: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
export default ChatInputBox;
