import React from 'react';

// Docs:
// - http://www.idangero.us/framework7/docs/side-panels.html

class RightSidePanel extends React.Component {
  render() {
    return (
      <div className="panel panel-right panel-cover">
        <div className="content-block">
          <p>Right Panel content here</p>
          {/* Click on link with "close-panel" className will close panel */}
          <p><a href="#" className="close-panel">Close me</a></p>
          {/* Click on link with "open-panel" and data-panel="left" attribute will open Left panel */}
          <p><a href="#" data-panel="left" className="open-panel">Open Left Panel</a></p>
        </div>
      </div>
    );
  }
}

export default RightSidePanel;
