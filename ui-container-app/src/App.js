import React, { Suspense, lazy } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { Feedback } from './components/Feedback';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ProgressBar } from './components/ProgressBar';
import { Reports } from './components/Reports';
import { createBrowserHistory } from 'history';

// Lazy load components
const AdsLazy = lazy(() => import('./pages/AdsApp'));
const MessagesLazy = lazy(() => import('./pages/MessagesApp'));
const RulesLazy = lazy(() => import('./pages/RulesApp'));

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <div className="flex h-screen font-librefranklin">
        <div className="w-60 custom-blue-800">
          <Navigation />
        </div>
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <Suspense fallback={<ProgressBar />}>
            <div className="sticky top-0 z-10 w-full bg-white h-14">
              <Header />
            </div>
            <div className="w-full m-auto">
              <Switch>
                <Route path="/ads">
                  <AdsLazy />
                </Route>
                <Route path="/messages">
                  <MessagesLazy />
                </Route>
                <Route path="/rules">
                  <RulesLazy />
                </Route>
                <Route path="/reports">
                  <Reports />
                </Route>
                <Route path="/feedback">
                  <Feedback />
                </Route>
                <Route path="/" component={MessagesLazy} />
              </Switch>
            </div>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};
