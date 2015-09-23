import $ from 'jquery';
import React from 'react';
import Router from 'react-router';
import AppRoutes from './app-routes';

// *** STYLES *** //
// Path to Framework7 MATERIAL CSS theme styles
import 'framework7.material.min';
// Path to Framework7 MATERIAL related color styles
import 'framework7.material.colors.min';
// Path to svg logos icons
import 'assets/vendors/icons.svg';
import 'font-awesome';
import 'styles/scss/index';

$(() => {
  // https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
  // http://rackt.github.io/react-router/#Router.run
  Router.run(AppRoutes, (Handler) => { // Defaults to `Router.HashLocation`
  // Router.run(routes, Router.HistoryLocation, (Handler) => { // HTML5 History
    // React.render(<Handler/>, document.body);
    React.render(<Handler />, document.getElementById('app'));
  });
});
