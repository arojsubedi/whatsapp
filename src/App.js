import React from 'react';
import './App.css';
import AppUserArea from './AppUserArea';

function App() {
  return (
    <div className="app">
      <div className="app__body">
          <AppUserArea />
        <div className="app__msgarea">
          <h3>msg area</h3>
        </div>
      </div> 
    </div>
    
  );
}

export default App;
