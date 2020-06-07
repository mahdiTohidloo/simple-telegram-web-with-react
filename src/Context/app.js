import React, { useState, createContext } from 'react';
import {ChatsDataModel} from "../Assets/contatns/models";


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [state, setState] = useState({ ...ChatsDataModel });


    return (
        <AppContext.Provider
            value={{
                action: {
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
