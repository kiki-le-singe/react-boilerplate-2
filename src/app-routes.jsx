// Docs:
  // - https://github.com/rackt/react-router
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/RouteConfiguration.md
  // - https://github.com/rackt/react-router/blob/master/docs/API.md
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from 'components/App';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Hello from 'components/pages/Hello';
import Tools from 'components/pages/Tools';

const AppRoutes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="hello" path="hello" handler={Hello} />
    <Route name="about" path="about" handler={About} />
    <Route name="tools" path="tools" handler={Tools} />
    <NotFoundRoute handler={About} />
  </Route>
);

export default AppRoutes;
