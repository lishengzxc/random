import './app.scss';
import styles from './views/Page/Page.scss';
import React from 'react';
import SideBar from './views/SideBar/SideBar';
import Header from './views/Header/Header';
import TeamList from './views/TeamList/TeamList';
import AddTeamButton from './views/AddTeamButton/AddTeamButton';
import EditTeamButton from './views/EditTeamButton/EditTeamButton';
import AddTeamList from './views/AddTeamList/AddTeamList';
import Setup from './views/Setup/Setup';
import MessageBox from './views/MessageBox/MessageBox';
import RandomPage from './views/RandomPage/RandomPage';
import cx from 'classnames';
import Router from 'react-router';
import RandomStore from './stores/random-store';

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
      <div className={styles.div}>
        <SideBar />
        <Header />
        <div className={cx(classList)}>
          <div className={cx(styles.wrapper)}>
            <RouteHandler />
          </div>
        </div>
        <AddTeamButton visibility={
          window.location.hash.substr(1) === '/addTeam' ||
          window.location.hash.substr(1) === '/setup' ||
          window.location.hash.substr(1) === '/randomPage' ||
          window.location.hash.substr(1) === '/editTeam'}
        />
        <EditTeamButton visibility={
          window.location.hash.substr(1) === '/randomPage'}
        />
      </div>
    )
  }
});

var routes = (
  <Route handler={App}>
    <Route path="/" handler={TeamList} />
    <Route path="addTeam" handler={AddTeamList} />
    <Route path="setup" handler={Setup} />
    <Route path="randomPage" handler={RandomPage} />
    <Route path="editTeam" handler={AddTeamList} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
