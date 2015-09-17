import React from 'react';

// import ToolStore from 'stores/ToolStore';

import TopNavBar from 'components/TopNavBar';
import Page from 'components/pages/Page';

const defaultProps = {
  isPageCached: true
};

class Tool extends Page {

  getDataPage() {
    return 'tool';
  }

  renderTopNavBar() {
    return <TopNavBar title="Tool title" isBackPage={true} />;
  }

  renderPage() {
    return (
      <div className="page-content">
        <div className="content-block-title">Tool</div>
        <p>Here comes new page</p>
      </div>
    );
  }
}

Tool.defaultProps = defaultProps;

export default Tool;
