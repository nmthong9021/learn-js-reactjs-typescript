
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" render={function () { return <Login /> }} />
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={function () {
      return (localStorage.chatapp_javascriptmastery_islogin && localStorage.chatapp_javascriptmastery_username && localStorage.chatapp_javascriptmastery_password) ?
        children :
        <Redirect to={{ pathname: '/login' }} />;
    }} />
  );
}

export default App;
