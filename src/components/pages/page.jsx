import React, { PropTypes } from 'react';
import 'framework7';

import TopNavBar from 'components/top_nav_bar/top-nav-bar';

class Page extends React.Component {

  // Use React with Other Libraries:
  // - https://facebook.github.io/react/tips/use-react-with-other-libraries.html
  componentDidMount() {
    if (this.context.f7App) {
      this.context.f7App.closePanel();
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
  f7App: PropTypes.instanceOf(Framework7)
};

export default Page;
