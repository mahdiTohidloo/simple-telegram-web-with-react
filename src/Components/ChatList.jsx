import React from 'react';
import ChatBox from "./ChatBox";

const ChatList = () => {
  return <>
    <header className={'Header Align-center'}>
      <h1>Simple Telegram Web With React</h1>
    </header>
    <div className={'Chat-list-container'}>
      <ChatBox id={5}/>
      hello chat list
    </div>
  </>
};

export default ChatList;
