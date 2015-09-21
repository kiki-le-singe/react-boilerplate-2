import React, { Component, PropTypes, findDOMNode } from 'react';

import ToolActions from 'actions/ToolActions';

class SearchTools extends Component {

  handleChange = () => {
    const searchEl = findDOMNode(this.refs.search);
    const value = searchEl.value.trim();

    ToolActions.search(value);
  }

  render() {
    return (
      <form>
        <div className="list-block inset inputs-list">
          <ul>
            <li>
              <div className="item-content">
                <div className="item-inner">
                  <div className="item-title floating-label">Search</div>
                  <div className="item-input">
                    <input ref="search" type="text" onChange={this.handleChange} />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </form>
    );
  }
}

export default SearchTools;
