import React from 'react';

import ListItem from '../list_item/list-item';

// Docs:
// - http://www.idangero.us/framework7/docs/list-view.html

class List extends React.Component {
  render() {
    return (
      <div className="list-block">
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
    );
  }
}

export default List;
