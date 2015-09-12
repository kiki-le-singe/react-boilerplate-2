import React from 'react';

import List from 'components/List/List';

class Nav extends React.Component {
  render() {
    const menuItems = [
      { route: 'home', text: 'Home' },
      { route: 'hello', text: 'Hello' },
      { route: 'about', text: 'About' },
      { route: 'tools', text: 'Tools' }
    ];

    return (
      <nav>
        <List menuItems={menuItems} />
      </nav>
    );
  }
}

export default Nav;
