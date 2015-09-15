import React, { PropTypes } from 'react';

import ToolActions from 'actions/ToolActions';

import ListItemSwipeout from 'components/lists/ListItemSwipeout';

// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoItem.react.js

class ListItemSwipeoutTools extends ListItemSwipeout {

  showAlert() {
    super.showAlert();

    ToolActions.delete(this.props.id);
  }
}

export default ListItemSwipeoutTools;
