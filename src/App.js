import React from 'react';
import './App.css';
import AppUserArea from './AppUserArea';
import UserMsgArea from './UserMsgArea';

function App() {
  return (
    <div className="app">
      <div className="app__body">
          <AppUserArea />
          <UserMsgArea />
      </div> 
    </div>
    
  );
}

export default App;
