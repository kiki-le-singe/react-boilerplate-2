import React from 'react';

import Page from 'js/components/pages/page';

class Hello extends Page {

  getDataPage() {
    return 'hello-world';
  }

  renderPage() {
    return (
      <div className="page-content">
        <div className="content-block-title">Hello World</div>
        <div className="content-block">
          {/* If no data-panel attribute, Left panel will be opened by default */}
          <p><a href="#" className="open-panel">Open Left Panel</a></p>
          {/* Click on link with "open-panel" and data-panel="right" attribute will open Right panel */}
          <p><a href="#" data-panel="right" className="open-panel">Open Right Panel</a></p>
        </div>
      </div>
    );
  }
}

export default Hello;
