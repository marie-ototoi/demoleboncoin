import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import Nav from './components/Nav';
import Message from './components/Message';
import PostMessage from './components/PostMessage';
import { StyledWrapper } from './components/WrapperStyles'

function App() {
  return (
    <Router>      
      <div className="App">
        <Nav />
        <StyledWrapper>
          <Switch>
            {/* Detail of a message */}
            <Route path="/messages/:messageId"><Message /></Route>
            {/* Form to post a new message */}
            <Route path="/(messages)?/(new)?"><PostMessage /></Route>
          </Switch>
        </StyledWrapper>
      </div>
    </Router>
  );
}

export default App;
