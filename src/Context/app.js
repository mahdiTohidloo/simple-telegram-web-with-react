import React, { useState, createContext } from 'react';


export const AppContext = createContext();


const AppContextProvider = ({ children }) => {

    const [state, setState] = useState({ data: 'hello world'});


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