import styles from './app.scss';
import React from 'react';
import SideBar from './views/SideBar/SideBar';
import Page from './views/Page/Page';

var App = React.createClass({
  render: function () {
    return (
      <div>
        <SideBar />
        <Page />
      </div>
    )
  }
});

React.render(<App />, document.body);
