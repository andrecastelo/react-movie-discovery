import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Main } from './pages/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
