import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Docs:
// - http://www.idangero.us/framework7/docs/swipeout.html#overswipe

const contextTypes = {
  f7App: PropTypes.instanceOf(Framework7)
};

const propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  prefixClassIcon: PropTypes.string
};

const defaultProps = {
  prefixClassIcon: 'icon-'
};

class ListItemSwipeout extends Component {

  constructor() {
    super();

    this.showAlert = this.showAlert.bind(this);
  }

  // Use React with Other Libraries:
  // - https://facebook.github.io/react/tips/use-react-with-other-libraries.html
  componentDidMount() {
    this.swipeoutEl = React.findDOMNode(this.refs.swipeout);

    Dom7(this.swipeoutEl).on('deleted', this.showAlert);
  }

  componentWillUnmount() {
    Dom7(this.swipeoutEl).off('deleted', this.showAlert);
  }

  showAlert() {
    this.context.f7App.alert('Item removed');
  }

  render() {
    const { route, title, text, prefixClassIcon, slug } = this.props;
    const iconClassName = classnames('icon', [prefixClassIcon, slug].join(''));

    return (
      <li ref="swipeout" className="swipeout">
        <div className="swipeout-content">
          <a href={route} className="item-link item-content">
            <div className="item-media"><i className={iconClassName}></i></div>
            <div className="item-inner">
              <div className="item-title-row">
                <div className="item-title">{title}</div>
              </div>
              <div className="item-text">{text}</div>
            </div>
          </a>
        </div>
        <div className="swipeout-actions-left">
          <a href="#" className="bg-blue edit">Edit</a>
        </div>
        <div className="swipeout-actions-right">
          <a href="#" className="mark bg-orange">Mark</a>
          <a href="#" className="swipeout-delete swipeout-overswipe">Delete</a>
        </div>
      </li>
    );
  }
}

ListItemSwipeout.contextTypes = contextTypes;
ListItemSwipeout.defaultProps = defaultProps;
ListItemSwipeout.propTypes = propTypes;

export default ListItemSwipeout;
