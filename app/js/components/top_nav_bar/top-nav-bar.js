import React from 'react';

class TopNavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="left">
            {/* If no data-panel attribute, Left panel will be opened by default */}
            <a href="#" className="open-panel link icon-only">
              <i className="icon icon-bars"></i>
            </a>
          </div>
          <div className="center">React Boilerplate 2</div>
        </div>
      </div>
    );
  }
}

export default TopNavBar;
