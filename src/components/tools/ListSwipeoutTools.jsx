import React, { PropTypes } from 'react';

import ListSwipeout from 'components/lists/ListSwipeout';
import ListItemSwipeoutTools from './ListItemSwipeoutTools';

const propTypes = {
  data: PropTypes.array,
  searchValue: PropTypes.string
};

const defaultProps = {
  data: [],
  searchValue: ''
};

class ListSwipeoutTools extends ListSwipeout {

  getDatas() {
    const { data } = this.props;

    return data.map((item, index) => {
      return (
        <ListItemSwipeoutTools
          id={item.id}
          route={item.route}
          title={item.title}
          text={item.text}
          slug={item.slug}
          key={index}
        />
      );
    });
  }
}

ListSwipeoutTools.propTypes = propTypes;
ListSwipeoutTools.defaultProps = defaultProps;

export default ListSwipeoutTools;
