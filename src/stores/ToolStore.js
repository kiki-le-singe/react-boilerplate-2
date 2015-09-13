// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/stores/TodoStore.js

import EventEmitter from 'events';
import AppDispatcher from 'dispatcher/AppDispatcher';
import ToolConstants from 'constants/ToolConstants';

const CHANGE_EVENT = 'change';
const tools = [
  {
    title: 'React',
    text: 'Lorem ipsum ...',
    route: 'http://facebook.github.io/react/',
  },
  {
    title: 'Flux',
    text: 'Lorem ipsum ...',
    route: 'https://facebook.github.io/flux/docs/overview.html',
  }
];
const deleteTool = (id) => {
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

    case ToolConstants.TOOL_DELETE:
      deleteTool(action.id);
      toolStore.emitChange();
      break;

    default:
      break;
  }
});
