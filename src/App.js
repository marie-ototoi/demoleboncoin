import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import Message from './components/Message';
import './App.css';

function App() {
  // retrieves default ids from url
  return (
    <Router>      
      <div className="App">
        <header className="App-header">
          header
        </header>
        <Switch>
          <Route path="/messages/:messageId"><Message /></Route>
          <Route path="/(messages)?/(new)?">New</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
