import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Main, MovieDetail } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/movies/:id">
          <MovieDetail />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
