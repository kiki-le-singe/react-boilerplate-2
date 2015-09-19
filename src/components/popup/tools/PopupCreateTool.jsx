import React from 'react';

import TopNavBar from 'components/TopNavBar';
import IconButton from 'components/IconButton';

// Docs:
// - http://www.idangero.us/framework7/docs/popup.html
// - http://www.idangero.us/framework7/docs/form-elements.html

class PopupCreateTool extends React.Component {

  getIcon() {
    return (
      <IconButton
        className="close-popup"
        classIcon="fa"
        prefixClassIcon="fa-"
        iconClassName="times fa-2x"
      />
    );
  }

  render() {
    return (
      <div className="popup popup-create-tool">
        <div className="view navbar-fixed">
          <div className="pages">
            <div className="page">

              <TopNavBar
                title="Add a Tool"
                isLeftIcon={false}
                iconElementRight={this.getIcon()}
              />

              <div className="page-content">
                <form>
                  <div className="list-block inset">
                    <ul>
                      <li>
                        <div className="item-content">
                          <div className="item-inner">
                            <div className="item-title floating-label">Name</div>
                            <div className="item-input">
                              <input ref="name" type="text" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item-content">
                          <div className="item-inner">
                            <div className="item-title floating-label">Url</div>
                            <div className="item-input">
                              <input ref="url" type="url" />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="content-block">
                    <a href="#" className="button button-big button-fill button-raised color-red ajax">Submit</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupCreateTool;
