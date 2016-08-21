import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Editor from './components/Editor';
import About from './components/About';
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path="/counter" component={CounterPage} />
    <Route path="/editor" component={Editor} />
    <Route path="/about" component={About} />
  </Route>
);
