import AppDispatcher from 'dispatcher/AppDispatcher';
import ToolConstants from 'constants/ToolConstants';

// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/actions/TodoActions.js

export default {
  delete(id) {
    AppDispatcher.dispatch({
      actionType: ToolConstants.TOOL_DELETE,
      id: id
    });
  }
};
