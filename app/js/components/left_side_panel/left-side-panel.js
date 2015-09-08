import React from 'react';

// Docs:
// - http://www.idangero.us/framework7/docs/side-panels.html

class LeftSidePanel extends React.Component {
  render() {
    return (
      <div className="panel panel-left panel-cover">
        <div className="content-block">
          <p>Left Panel content here</p>
          {/* Click on link with "close-panel" className will close panel */}
          <p><a href="#" className="close-panel">Close me</a></p>
          {/* Click on link with "open-panel" and data-panel="right" attribute will open Right panel */}
          <p><a href="#" data-panel="right" className="open-panel">Open Right Panel</a></p>
        </div>
      </div>
    );
  }
}

export default LeftSidePanel;
