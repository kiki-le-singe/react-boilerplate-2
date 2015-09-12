// https://github.com/rackt/react-router
// http://rackt.github.io/react-router/

// References:
  // http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from 'components/App';
import Home from 'components/Pages/Home/Home';
import About from 'components/Pages/About/About';
import Hello from 'components/Pages/Hello/Hello';
import Tools from 'components/Pages/Tools/Tools';

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
