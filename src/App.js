import React from 'react';
import { Route } from 'react-router-dom';
import ChatList from "./Components/ChatList";
import ChatPage from "./Components/ChatPage";
function App() {
  return (
    <main className="Main-container">
      <div className="Chat-list-grid">
        <ChatList />
      </div>
      <div className="Chat-page-grid">
        <Route path={'/'} exact>
          <div className={'Header'} />
        </Route>
        <Route path="/chat-page/:id">
          <ChatPage />
        </Route>
      </div>
    </main>
  );
}

export default App;
