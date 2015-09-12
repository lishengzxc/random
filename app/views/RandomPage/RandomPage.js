import styles from './RandomPage.scss';
import React from 'react';
import Random from '../../util/util';
import cx from 'classnames';
import RandomStore from '../../stores/random-store';
import GroupItem from '../GroupItem/GroupItem';

var getNowTeam = () => RandomStore.getNowTeam().team;

var RandomPage = React.createClass({
  getInitialState: function () {
    return {
      nowTeam: getNowTeam(),
      isSameSex: true,
      num: '',
      randomList: []
    }
  },

  componentWillMount: function () {
    if (!this.state.nowTeam) window.location.href = '#/';
  },

  componentDidMount: function () {
    this.refs.numberinput.getDOMNode().focus();
  },

  getNum: function (event) {
    this.state.num = event.target.value;
    this.random();
  },

  getIsSameSex: function (event) {
    this.state.isSameSex = event.target.checked;
    this.random();
  },

  random: function () {
    var team = JSON.parse(JSON.stringify(this.state.nowTeam));
    delete team.id;
    this.setState({
      randomList: Random.divide(this.state.isSameSex, Random.sort(team), this.state.num) || []
    });
  },

  render: function () {
    return (
      <div>
        <form className={styles.inputbox}>
          <input type="number" className={styles.numberinput} ref="numberinput" onChange={this.getNum} value={this.state.num} />
          <div className={styles.checksame}>
            <input type="checkbox" id="same" checked={this.state.isSameSex} onChange={this.getIsSameSex} /><label htmlFor="same"></label>
          </div>
        </form>
        <ul>{this.state.randomList.map(function (result) {
          return <GroupItem result={result} key={result}/>
        })}</ul>
      </div>
    );
  }
});

export default RandomPage;