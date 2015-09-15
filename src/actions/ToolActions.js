import AppDispatcher from 'dispatcher/AppDispatcher';
import ToolConstants from 'constants/ToolConstants';
import Tool from 'services/tool';

// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/actions/TodoActions.js

export default {
  fetchAll() {
    Tool.fetch().then((data) => {
      AppDispatcher.dispatch({
        actionType: ToolConstants.TOOL_READ,
        data: data
      });
    });
  },

  delete(id) {
    Tool.delete(id)
      .then((data) => {
        AppDispatcher.dispatch({
          actionType: ToolConstants.TOOL_DELETE,
          id: id
        });
      });
  }
};
