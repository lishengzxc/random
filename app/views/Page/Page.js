import React from 'react';
import styles from './Page.scss';
import Header from '../Header/Header';
import TeamList from '../TeamList/TeamList';
import RandomStore from '../../stores/random-store';
import cx from 'classnames';

var getPageState = () => ({ pageState: RandomStore.getPageState() });


var Page = React.createClass({
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
      <div className={cx(classList)}>
        <Header />
        <div className={cx(styles.wrapper)}>

        </div>
      </div>
    )
  }
});


export default Page;
