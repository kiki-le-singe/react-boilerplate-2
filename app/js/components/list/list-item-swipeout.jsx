import React, { Component, PropTypes } from 'react';

// Docs:
// - http://www.idangero.us/framework7/docs/swipeout.html#overswipe

class ListItemSwipeout extends Component {
  render() {
    const { route, title, text } = this.props;

    return (
      <li className="swipeout">
        <div className="swipeout-content">
          <a href={route} className="item-link item-content">
            <div className="item-media"><i className="icon icon-f7"></i></div>
            <div className="item-inner">
              <div className="item-title-row">
                <div className="item-title">{title}</div>
              </div>
              <div className="item-text">{text}</div>
            </div>
          </a>
        </div>
        <div className="swipeout-actions-left">
          <a href="#" className="bg-blue edit">Edit</a>
        </div>
        <div className="swipeout-actions-right">
          <a href="#" className="mark bg-orange">Mark</a>
          <a href="#" className="swipeout-delete swipeout-overswipe">Delete</a>
        </div>
      </li>
    );
  }
}

ListItemSwipeout.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ListItemSwipeout;
