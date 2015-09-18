// Docs:
// - https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoApp.react.js

import React from 'react';

import ToolStore from 'stores/ToolStore';
import ToolActions from 'actions/ToolActions';

import Page from 'components/pages/Page';
import ListSwipeoutTools from 'components/tools/ListSwipeoutTools';
import FloatingButtonTools from 'components/tools/FloatingButtonTools';

/**
 * Retrieve the current TOOL data from the ToolStore
 */
const getToolState = () => {
  return {
    tools: ToolStore.getAll()
  };
};

const defaultProps = {
  isFloatingButtonEnabled: true,
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

    ToolActions.fetchAll();
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

  renderFloatingButton() {
    return (
      <FloatingButtonTools />
    );
  }

  renderPage() {
    return (
      <div className="page-content">
        <div className="content-block-title">Tools</div>
        <div className="list-block media-list">
          <ListSwipeoutTools data={this.state.tools} />
        </div>
      </div>
    );
  }
}

Tools.defaultProps = defaultProps;

export default Tools;
