import React from 'react';

// Docs:
// - http://www.idangero.us/framework7/docs/list-view.html#list-item-element

class ListItem extends React.Component {
  render() {
    return (
      <li>
        <a href="#" className="item-link item-content">
          <div className="item-media"><i className="icon icon-f7"></i></div>
          <div className="item-inner">
            <div className="item-title">Item title</div>
          </div>
        </a>
      </li>
    );
  }
}

export default ListItem;
