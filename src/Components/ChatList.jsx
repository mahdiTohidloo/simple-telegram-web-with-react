import React, { useState, useContext } from 'react';
import ChatBox from "./ChatBox";
import {AppContext} from "../Context/app";

const ChatList = () => {
  const appContext = useContext(AppContext);
  const [selectedItem, setSelectedItem] = useState(null);

  return <>
    <header className={'Header Align-center'}>
      <h1>Simple Telegram Web With React</h1>
    </header>
    <div className={'Chat-list-container'}>
      {
        appContext.state.chatsList.map((chatItem) =>
          <ChatBox
            key={`${chatItem.id}ChatItem`}
            onSelectChat={(id) => setSelectedItem(id)}
            data={chatItem}
            isActive={ selectedItem === chatItem.id }
          />
        )
      }
    </div>
  </>
};

export default ChatList;
