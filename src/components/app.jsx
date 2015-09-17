import React, { PropTypes, Component } from 'react';
import { RouteHandler } from 'react-router';
// The both Framework7 and Dom7 are exposed in window.*
import 'framework7';

import LeftSidePanel from './LeftSidePanel';
import RightSidePanel from './RightSidePanel';
import ToolPage from 'components/pages/Tools/Tool';

class App extends Component {

  componentDidMount() {
    // http://www.idangero.us/framework7/docs/init-app.html
    this.f7App = new Framework7({
      swipePanel: 'left', // http://www.idangero.us/framework7/docs/side-panels.html#open-panels-with-swipe
      ajaxLinks: 'a.ajax'
    });
  }

  componentWillUnmount() {
    this.f7App = null;
  }

  // Understand using React Context:
  // - https://facebook.github.io/react/blog/2014/03/28/the-road-to-1.0.html#context
  // - https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html
  getChildContext() {
    return {
      f7App: this.f7App
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
              { /* TODO find another way to correct this smell code to inject the ToolPage. */ }
              <ToolPage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  f7App: PropTypes.instanceOf(Framework7)
};

export default App;
