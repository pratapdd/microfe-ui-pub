import { Route, Router, Switch } from 'react-router-dom';

import Ads from './components/Ads';
import React from 'react';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Ads} />
        </Switch>
      </Router>
    </div>
  );
};
