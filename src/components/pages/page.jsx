import React, { Component, PropTypes } from 'react';

import TopNavBar from 'components/TopNavBar';
import FloatingButton from 'components/FloatingButton';

const contextTypes = {
  f7App: PropTypes.instanceOf(Framework7)
};

const propTypes = {
  isFloatingButtonEnabled: PropTypes.bool,
  isPageCached: PropTypes.bool
};

const defaultProps = {
  isFloatingButtonEnabled: false,
  isPageCached: false
};

class Page extends Component {

  // Use React with Other Libraries:
  // - https://facebook.github.io/react/tips/use-react-with-other-libraries.html
  componentDidMount() {
    if (this.context.f7App) {
      this.context.f7App.closePanel();
    }
  }

  getClassNames() {
    return this.props.isPageCached ? classnames('page', 'cached') : 'page';
  }

  renderFloatingButton() {
    return this.props.isFloatingButtonEnabled ? <FloatingButton /> : false;
  }

  renderTopNavBar() {
    return <TopNavBar />;
  }

  render() {
    return (
      <div id={this.getDataPage()} data-page={this.getDataPage()} className={this.getClassNames()}>
        {this.renderTopNavBar()}
        {this.renderFloatingButton()}
        {this.renderPage()}
      </div>
    );
  }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
Page.contextTypes = contextTypes;

export default Page;
