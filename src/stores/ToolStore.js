// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/stores/TodoStore.js

import EventEmitter from 'events';

import AppDispatcher from 'dispatcher/AppDispatcher';
import ToolConstants from 'constants/ToolConstants';

const CHANGE_EVENT = 'change';
let tools = [];

const fetchAll = (data) => {
  tools = data;
  console.log('fetch all tools');
};

const destroy = (id) => {
  // delete tools[id];
  console.log(`tool deleted: ${id}`);
};

class ToolStore extends EventEmitter {

  // Get the entire collection of tools.
  getAll() {
    return tools;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const toolStore = new ToolStore();

export default toolStore;

AppDispatcher.register((action) => {
  switch (action.actionType) {

    case ToolConstants.TOOL_READ:
      fetchAll(action.data);
      toolStore.emitChange();
      break;

    case ToolConstants.TOOL_DELETE:
      destroy(action.id);
      toolStore.emitChange();
      break;

    default:
      break;
  }
});
