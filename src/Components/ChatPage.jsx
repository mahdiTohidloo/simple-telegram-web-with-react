import React from 'react';
import { useParams } from 'react-router-dom';


const ChatPage = () => {
  const pageParams = useParams();

  return <>
    <header className={'Header Chat-page-header'}>
      User Information
    </header>
    <div>hello world from chat page {pageParams.id}</div>
  </>
};



export default ChatPage;
