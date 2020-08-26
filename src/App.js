import React from 'react';
import './App.css';
import AppUserArea from './AppUserArea';
import UserMsgArea from './UserMsgArea';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useStateValue} from './StateProvider'

function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">
      {(user==null)?
      <div className="app__body">
            <Router>
              <AppUserArea />
              <Switch>
                <Route  path="/room/:roomId/:seed" >
                  <UserMsgArea />
                </Route>
                <Route  path="/" >
                  <UserMsgArea />
                </Route>

                
              </Switch>
              
            </Router>
      </div> 
      :<Login />
    }
    </div>
    
  );
}

export default App;
