import AppDispatcher from 'dispatcher/AppDispatcher';
import ToolConstants from 'constants/ToolConstants';
import Tool from 'services/tool';

// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/actions/TodoActions.js

export default {
  fetchOne(id) {
    Tool.fetchOne(id).then((data) => {
      debugger;
      AppDispatcher.dispatch({
        actionType: ToolConstants.TOOL_FETCH,
        data: data
      });
    });
  },

  fetchAll() {
    Tool.fetch().then((data) => {
      AppDispatcher.dispatch({
        actionType: ToolConstants.TOOLS_FETCH,
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
