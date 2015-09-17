import React, { PropTypes } from 'react';

import ToolActions from 'actions/ToolActions';

import ListItemSwipeout from 'components/lists/ListItemSwipeout';

// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoItem.react.js
// - http://www.idangero.us/framework7/docs/pages-inline.html

const contextTypes = {
  f7App: PropTypes.instanceOf(Framework7)
};

class ListItemSwipeoutTools extends ListItemSwipeout {

  // Show the full Tool page.
  handleClick = () => {
    // Init main view
    const mainView = this.context.f7App.addView('.view-main', {
      domCache: true //enable inline pages
    });

    // Load about page:
    mainView.router.load({pageName: 'tool'});
  }

  showAlert() {
    super.showAlert();

    ToolActions.delete(this.props.id);
  }
}

ListItemSwipeoutTools.contextTypes = contextTypes;

export default ListItemSwipeoutTools;
