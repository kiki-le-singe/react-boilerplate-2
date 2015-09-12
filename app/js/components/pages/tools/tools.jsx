import React from 'react';

import Page from 'components/pages/page';
import ListSwipeout from 'components/list/list-swipeout';

class Tools extends Page {

  getDataPage() {
    return 'tools';
  }

  renderPage() {
    const data = [
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

    return (
      <div className="page-content">
        <div className="content-block-title">Tools</div>
        <div className="list-block media-list">
          <ListSwipeout data={data} />
        </div>
      </div>
    );
  }
}

export default Tools;
