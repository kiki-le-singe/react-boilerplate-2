import React, { Component, PropTypes } from 'react';

import ListItemSwipeout from './list-item-swipeout';

// Docs:
// - http://www.idangero.us/framework7/docs/swipeout.html

class ListSwipeout extends Component {

  getDatas() {
    const { data } = this.props;

    return data.map((item, index) => {
      return (
        <ListItemSwipeout route={item.route} title={item.title} text={item.text} key={index} />
      );
    });
  }

  render() {
    return (
      <div className="list-block media-list">
        <ul>
          {this.getDatas()}
        </ul>
      </div>
    );
  }
}

ListSwipeout.propTypes = {
  data: PropTypes.array.isRequired
};

export default ListSwipeout;
