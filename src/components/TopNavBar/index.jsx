import React, { PropTypes } from 'react';

// Docs:
// - http://www.idangero.us/framework7/docs/navbar.html

const propTypes = {
  isBackPage: PropTypes.bool
};

const defaultProps = {
  isBackPage: false
};

class TopNavBar extends React.Component {

  renderLeftIcon() {
    const { isBackPage } = this.props;

    if (isBackPage) {
      return (
        <a href="#" className="back link icon-only">
          <i className="icon icon-back"></i>
        </a>
      );
    }

    return (
      <a href="#" className="open-panel link icon-only">
        <i className="icon icon-bars"></i>
      </a>
    );
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="left">
            {this.renderLeftIcon()}
          </div>
          <div className="left">React Boilerplate 2</div>
        </div>
      </div>
    );
  }
}

TopNavBar.propTypes = propTypes;
TopNavBar.defaultProps = defaultProps;

export default TopNavBar;
