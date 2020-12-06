import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from './components/App'

ReactDOM.render(<Router>
  <Switch>
    {/* Detail of a message when messageId is defined */}
    <Route path="/messages/:messageId"><App /></Route>
    {/* Form to post a new message */}
    <Route path="/(messages)?/(new)?"><App /></Route>
  </Switch>
</Router>,
document.getElementById('root')
)
