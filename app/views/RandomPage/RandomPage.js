import styles from './RandomPage.scss';
import React from 'react';
import Random from '../../util/util';
import cx from 'classnames';
import RandomStore from '../../stores/random-store';

var getNowTeam = () => ({ nowTeam: RandomStore.getNowTeam().team });

var RandomPage = React.createClass({
  getInitialState: function () {
    return getNowTeam();
  },

  componentDidMount: function () {
    this.refs.numberinput.getDOMNode().focus();
  },

  getNum: function (event) {
    this.state.value = event.target.value;
  },

  render: function () {
    var value = this.state.value;
    return (
      <div>
        <div className={styles.inputbox}>
          <input type="number" className={styles.numberinput} ref="numberinput" onChange={this.getNum} value={value}/>
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