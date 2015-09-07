import $ from 'jquery';
import React from 'react';
import Router from 'react-router';
import AppRoutes from './app-routes';

import 'font-awesome.scss';
import 'styles/scss/index.scss';

$(() => {
  // https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
  // http://rackt.github.io/react-router/#Router.run
  Router.run(AppRoutes, (Handler) => { // Defaults to `Router.HashLocation`
  // Router.run(routes, Router.HistoryLocation, (Handler) => { // HTML5 History
    // React.render(<Handler/>, document.body);
    React.render(<Handler />, document.getElementById('app'));
  });
});
