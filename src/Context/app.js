import React, { useState, createContext } from 'react';
import {ChatsDataModel} from "../Assets/contatns/models";


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [state, setState] = useState({ ...ChatsDataModel });

    const sendNewMessage = ( chatId, messageData ) => {
      const newState = Object.assign({}, state, {
        chatsList: state.chatsList.map((chatItem) => {
          if ( chatItem.id === chatId ) {
            return { ...chatItem, chats: [ ...chatItem.chats, messageData ]};
          }
          return chatItem;
        })
      });
      setState(newState);
    };

    return (
        <AppContext.Provider
            value={{
                action: {
                  sendNewMessage,
                    // TODO: pass the actions to change state
                },
                state
            }}
        >
            { children }
        </AppContext.Provider>
    )
};


export default AppContextProvider;
