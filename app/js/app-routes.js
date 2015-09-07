// https://github.com/rackt/react-router
// http://rackt.github.io/react-router/

// References:
  // http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './components/app';
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Hello from './components/pages/hello/hello';
import ToolBoxWrapper from './components/tools/toolBoxWrapper';

const AppRoutes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="hello" path="hello" handler={Hello} />
    <Route name="about" path="about" handler={About} />
    <Route name="tools" path="tools" handler={ToolBoxWrapper} />
    <NotFoundRoute handler={About} />
  </Route>
);

export default AppRoutes;
