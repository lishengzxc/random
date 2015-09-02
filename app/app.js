import styles from './app.scss';
import React from 'react';
import SideBar from './views/SideBar/SideBar';
import Page from './views/Page/Page';

class App extends React.Component {
  render () {
    return (
      <div>
        <SideBar />
        <Page />
      </div>
    )
  }
}

React.render(<App />, document.body);
