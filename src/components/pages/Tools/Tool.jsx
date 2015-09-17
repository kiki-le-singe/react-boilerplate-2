import React from 'react';

import ToolStore from 'stores/ToolStore';

import TopNavBar from 'components/TopNavBar';
import Page from 'components/pages/Page';

/**
 * Retrieve the current TOOL data from the ToolStore
 */
const getToolState = () => {
  return {
    tool: ToolStore.getOne()
  };
};

const defaultProps = {
  isPageCached: true
};

class Tool extends Page {

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
    return 'tool';
  }

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  onChange = () => {
    this.setState(getToolState());
  }

  renderTopNavBar() {
    return <TopNavBar title="Tool title" isBackPage={true} />;
  }

  renderPage() {
    return (
      <div className="page-content">
        <div className="content-block-title">Tool</div>
        <p>Here comes new page</p>
      </div>
    );
  }
}

Tool.defaultProps = defaultProps;

export default Tool;
