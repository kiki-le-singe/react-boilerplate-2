import React from 'react';

import ListSwipeout from 'components/lists/ListSwipeout';
import ListItemSwipeoutTools from './ListItemSwipeoutTools';

class ListSwipeoutTools extends ListSwipeout {

  getDatas() {
    const { data } = this.props;

    return data.map((item, index) => {
      return (
        <ListItemSwipeoutTools
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

export default ListSwipeoutTools;
