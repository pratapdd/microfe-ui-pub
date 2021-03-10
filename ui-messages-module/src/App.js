import { Route, Router, Switch } from 'react-router-dom';

import Messages from './components/Messages';
import React from 'react';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Messages} />
        </Switch>
      </Router>
    </div>
  );
};
