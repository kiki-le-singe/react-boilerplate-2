// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoApp.react.js

import React from 'react';

import ToolStore from 'stores/ToolStore';

import Page from 'components/pages/Page';
import ListSwipeout from 'components/lists/ListSwipeout';

/**
 * Retrieve the current TOOL data from the ToolStore
 */
const getToolState = () => {
  return {
    tools: ToolStore.getAll()
  };
};

class Tools extends Page {

  // The class' constructor now assumes the role previously filled by componentWillMount
  constructor(props) {
    super(props);

    // Warning: getInitialState() is only supported for classes created using React.createClass.
    // getInitialState() executes exactly once during the lifecycle of the component
    // and sets up the initial state of the component.
    // When the state updates, the component re-renders itself.
    // @see https://facebook.github.io/react/docs/tutorial.html#reactive-state
    // getInitialState() {
    //   return {data: []};
    // }
    this.state = getToolState();
  }

  componentDidMount() {
    super.componentDidMount();

    ToolStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ToolStore.removeChangeListener(this.onChange);
  }

  getDataPage() {
    return 'tools';
  }

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  onChange = () => {
    this.setState(getToolState());
  }

  renderPage() {
    return (
      <div className="page-content">
        <div className="content-block-title">Tools</div>
        <div className="list-block media-list">
          <ListSwipeout data={this.state.tools} />
        </div>
      </div>
    );
  }
}

export default Tools;
