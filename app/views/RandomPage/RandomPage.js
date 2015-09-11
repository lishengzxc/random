import styles from './RandomPage.scss';
import React from 'react';
import Random from '../../util/util';
import cx from 'classnames';
import RandomStore from '../../stores/random-store';

var getNowTeam = () => RandomStore.getNowTeam().team;

var RandomPage = React.createClass({
  getInitialState: function () {
    return {
      nowTeam: getNowTeam(),
      isSameSex: false,
      num: '',
      randomList: []
    }
  },

  componentDidMount: function () {
    this.refs.numberinput.getDOMNode().focus();
  },

  getNum: function (event) {
    //this.setState({
    //  num: event.target.value
    //});
    this.state.num = event.target.value
    this.random();
  },

  getIsSameSex: function (event) {
    this.setState({
      isSameSex: event.target.checked
    });
    this.random();
  },

  random: function () {
    this.setState({
      randomList: Random.divide(false, Random.sort(this.state.nowTeam), this.state.num) || []
    });
  },

  render: function () {
    return (
      <div>
        <form className={styles.inputbox}>
          <input type="number" className={styles.numberinput} ref="numberinput" onChange={this.getNum} defaultValue={this.state.num} />
          <div className={styles.checksame}>
            <input type="checkbox" id="same" checked={this.state.isSameSex} onChange={this.getIsSameSex} /><label htmlFor="same"></label>
          </div>
        </form>
        <ul>{this.state.randomList.length}</ul>
      </div>
    );
  }
});

export default RandomPage;