import React, { Component, PropTypes } from 'react';

import TopNavBar from 'components/TopNavBar';
const contextTypes = {
  f7App: PropTypes.instanceOf(Framework7)
};

const propTypes = {
  isFloatingButtonEnabled: PropTypes.bool
};

const defaultProps = {
  isFloatingButtonEnabled: false,
};

class Page extends Component {

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

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
Page.contextTypes = contextTypes;

export default Page;
