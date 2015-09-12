import React, { PropTypes } from 'react';

import TopNavBar from 'components/TopNavBar/TopNavBar';

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
