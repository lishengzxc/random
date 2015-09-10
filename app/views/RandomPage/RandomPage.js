import styles from './RandomPage.scss';
import React from 'react';
import cx from 'classnames';
import RandomStore from '../../stores/random-store';

var getNowTeam = () => ({ nowTeam: RandomStore.getNowTeam() });

var RandomPage = React.createClass({
  getInitialState: function () {
    return getNowTeam();
  },

  componentDidMount: function () {
    this.refs.numberinput.getDOMNode().focus();
  },

  render: function () {
    return (
      <div>
        <div className={styles.inputbox}>
          <input type="number" className={styles.numberinput} ref="numberinput"/>
          <div className={styles.checksame}>
            <input type="checkbox" id="same" /><label htmlFor="same"></label>
          </div>
        </div>
      {JSON.stringify(this.state.nowTeam)}
      </div>
    );
  }
});

export default RandomPage;