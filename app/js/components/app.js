import React from 'react';
import {RouteHandler} from 'react-router';
import TopNavBar from './top-nav-bar/top-nav-bar';
import LeftSidePanel from './left-side-panel/left-side-panel';
import RightSidePanel from './right-side-panel/right-side-panel';

const {PropTypes, Component} = React;

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <TopNavBar />

        {/* First, we need to add Panel's overlay that will overlays app while panel is opened */}
        <div className="panel-overlay"></div>

        <LeftSidePanel />
        <RightSidePanel />

        <div className="page-content">
          <div className="content-block">
            {/* If no data-panel attribute, Left panel will be opened by default */}
            <p><a href="#" className="open-panel">Open Left Panel</a></p>
            {/* Click on link with "open-panel" and data-panel="right" attribute will open Right panel */}
            <p><a href="#" data-panel="right" className="open-panel">Open Right Panel</a></p>
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
