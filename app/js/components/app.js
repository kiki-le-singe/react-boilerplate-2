import React from 'react';
import {RouteHandler} from 'react-router';

import LeftSidePanel from './left_side_panel/left-side-panel';
import RightSidePanel from './right_side_panel/right-side-panel';

const {PropTypes, Component} = React;

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        {/* Status bar overlay for full screen mode (PhoneGap) */}
        <div className="statusbar-overlay"></div>

        {/* First, we need to add Panel's overlay that will overlays app while panel is opened */}
        <div className="panel-overlay"></div>
        <LeftSidePanel />
        <RightSidePanel />

        <div className="views">
          <div className="view view-main">
            <div className="pages navbar-fixed">
              <RouteHandler />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
