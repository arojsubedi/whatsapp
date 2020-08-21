import React from 'react';
import './App.css';
import AppUserArea from './AppUserArea';
import UserMsgArea from './UserMsgArea';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
          <AppUserArea />
          <Router>
            <Switch>
              {/* <Route  path="/" component={UserMsgArea} /> */}
              <Route  path="/room/:roomid" component={UserMsgArea} />
            </Switch>
            
          </Router>
          
      </div> 
    </div>
    
  );
}

export default App;
