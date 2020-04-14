import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
    MainWrapper
} from './components';
import {
    Bugs,
    Epics,
    HomePage,
    NotFound
} from './routes';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

ReactDOM.render(
      <Router>
          <Helmet title="PegaNav" />
          <MainWrapper>
              <Switch>
                  <Route path="/bugs">
                      <Bugs />
                  </Route>
                  <Route path="/epics">
                      <Epics />
                  </Route>
                  <Route exact path="/">
                      <HomePage />
                  </Route>
                  <Route path="*">
                      <NotFound />
                  </Route>
              </Switch>
          </MainWrapper>
      </Router>,
    rootElement);

serviceWorker.unregister();
