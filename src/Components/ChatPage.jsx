import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {AppContext} from "../Context/app";
import MessageBox from "./ChatPageComponents/MessageBox";
import ChatInputBox from "./ChatPageComponents/InputBox";
import {ChatMessageType, MainUserData, ReplyMessageModel} from "../Assets/contatns/models";
import UserInformationModal from "./ChatPageComponents/UserInformationModal";



const ChatPage = () => {
  const pageParams = useParams();
  const messagesContainerRef = useRef(null);
  const appContext = useContext(AppContext);
  const [chatData, setChatData] = useState({ chats: [] });
  const [message, setMessage] = useState('');
  const [userInformationModalState, setUserInformationModalState] = useState({
    show: false,
    userData: null
  });

  useEffect(() => {
    const currentChatItem = appContext.state.chatsList.filter((chatItem) => chatItem.id === Number(pageParams.id) )[0];
    setChatData(currentChatItem || { chats: [] });

    // Send Auto Reply ON Send New Message :)
    if ( currentChatItem.chats.length && currentChatItem.chats[currentChatItem.chats.length - 1].type === ChatMessageType.sent) {
      setTimeout(() => {
        const messageData = {
          ...ReplyMessageModel,
          senderId: chatData.id,
          date: new Date(),
          senderImage: chatData.image,
          senderName: chatData.name,
        };
        appContext.action.sendNewMessage(Number(pageParams.id), messageData);
      }, 2000);
    }

  }, [pageParams, appContext]);

  useEffect(() => {
    if ( messagesContainerRef.current ) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [chatData]);


  const onSendMessage = () => {
    if ( message ) {
      const messageData = {
        ...MainUserData,
        message,
        date: new Date(),
      };
      appContext.action.sendNewMessage(Number(pageParams.id), messageData);
      setMessage('');
    }
  };


  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const onShowUserInformation = ( messageData ) => () => {
    setUserInformationModalState({
      show: true,
      userData  : {
        name: messageData ? messageData.senderName : chatData.name,
        image: messageData ? messageData.senderImage : chatData.image,
        id: messageData ?messageData.senderId : chatData.id,
      }
    })
  };


  // console.log(chatData);
  return <>
    <header onClick={onShowUserInformation()} className={'Header Chat-page-header'}>
      <img src={chatData.image} />
      { chatData.name }
    </header>
    <div className={'Chat-page-container'}>
      <div className={'chat-contents'} ref={messagesContainerRef}>
        {
          chatData.chats.map((messageData, index) =>
            <MessageBox
              key={`ChatMessage${index}`}
              data={messageData}
              onClickUserAvatar={onShowUserInformation(messageData)}
            />
          )
        }
      </div>
      <div>
       <ChatInputBox
         message={message}
         onChange={onChangeMessage}
         onSend={onSendMessage}
       />
      </div>
    </div>
    <UserInformationModal
      onClose={() => setUserInformationModalState({ show: false, userData: null })}
      show={userInformationModalState.show}
      data={userInformationModalState.userData}
    />
  </>
};



export default ChatPage;
