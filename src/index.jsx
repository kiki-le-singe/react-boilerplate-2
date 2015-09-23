import $ from 'jquery';
import React from 'react';
import AppRouter from './app-routes';

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
  React.render(AppRouter, document.getElementById('app'));
});
