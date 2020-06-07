import React from 'react';
import PropTypes from "prop-types";
import {ChatMessageType} from "../../ Assets/contatns/models";

const MessageBoxClassNameByType = {
  [ChatMessageType.sent]: {
    messageBoxClass: 'sent',
    direction: 'row-reverse',
  },
  [ChatMessageType.received]: {
    messageBoxClass: 'received',
    direction: 'row',
  }
};

const MessageBox = ({ data, onClickUserAvatar }) => {
  return (
    <div className={'Message-container'} style={{ flexDirection: MessageBoxClassNameByType[data.type].direction }}>
      <img onClick={onClickUserAvatar} src={data.senderImage} />
      <div className={`Message-box ${MessageBoxClassNameByType[data.type].messageBoxClass}`}>
        <p>{ data.message }</p>
        <span className={'date'}>
        { data.date.toLocaleString() }
          { }
      </span>
      </div>
    </div>
  );

};
MessageBox.propTypes = {
  data: PropTypes.object,
  onClickUserAvatar: PropTypes.func,
};
export default MessageBox;
