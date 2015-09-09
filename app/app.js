import './app.scss';
import styles from './views/Page/Page.scss';
import React from 'react';
import SideBar from './views/SideBar/SideBar';
import Header from './views/Header/Header';
import TeamList from './views/TeamList/TeamList';
import RandomStore from './stores/random-store';
import AddTeamButton from './views/AddTeamButton/AddTeamButton';
import AddTeamList from './views/AddTeamList/AddTeamList';
import cx from 'classnames';
import Router from 'react-router';

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var getPageState = () => ({ pageState: RandomStore.getPageState() });

var App = React.createClass({

  getInitialState: function () {
    return getPageState();
  },

  onSlide: function () {
    this.setState(getPageState());
  },

  componentDidMount: function () {
    RandomStore.addChangeListener(this.onSlide);
  },

  componentWillUnmount: function () {
    RandomStore.removeChangeListener(this.onSlide);
  },

  render: function () {
    var classList = this.state.pageState ? [styles.page, styles.slide] : [styles.page];
    return (
      <div>
        <SideBar />
        <Header />
        <div className={cx(classList)}>
          <div className={cx(styles.wrapper)}>
            <RouteHandler />
          </div>
          <AddTeamButton visibility={window.location.hash.substr(1) === '/addTeam'}/>
        </div>
      </div>
    )
  }
});

var routes = (
  <Route handler={App}>
    <Route path="/" handler={TeamList} />
    <Route path="addTeam" handler={AddTeamList} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
