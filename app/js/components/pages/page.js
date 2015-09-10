import React, { PropTypes } from 'react';
import 'framework7';

import TopNavBar from 'components/top_nav_bar/top-nav-bar';

class Page extends React.Component {

  componentDidMount() {
    if (this.context.myAppFramework7) {
      this.context.myAppFramework7.closePanel();
    }
  }

  render() {
    return (
      <div data-page={this.getDataPage()} className="page">
        <TopNavBar />
        {this.renderPage()}
      </div>
    );
  }
}

Page.contextTypes = {
  myAppFramework7: PropTypes.instanceOf(Framework7)
};

export default Page;
