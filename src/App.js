import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Header } from './components';
import { Discovery } from './pages/Discovery';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Discovery />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
