import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home';
import stream from './containers/stream';
import App from './containers/App';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path="/stream" component={App}>
      <IndexRoute component={stream}/>
    </Route>
  </Router>
);
