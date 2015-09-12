import React, {PropTypes, Component} from 'react';
import {RouteHandler} from 'react-router';
// The both Framework7 and Dom7 are exposed in window.*
import 'framework7';

import LeftSidePanel from './left_side_panel/left-side-panel';
import RightSidePanel from './right_side_panel/right-side-panel';

class App extends Component {

  componentDidMount() {
    this.myAppFramework7 = new Framework7({
      swipePanel: 'left' // http://www.idangero.us/framework7/docs/side-panels.html#open-panels-with-swipe
    });
  }

  componentWillUnmount() {
    this.myAppFramework7 = null;
  }

  // Understand using React Context:
  // - https://facebook.github.io/react/blog/2014/03/28/the-road-to-1.0.html#context
  // - https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html
  getChildContext() {
    return {
      myAppFramework7: this.myAppFramework7
    };
  }

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

App.childContextTypes = {
  myAppFramework7: PropTypes.instanceOf(Framework7)
};

export default App;
