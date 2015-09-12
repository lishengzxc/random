import styles from './AddTeamList.scss';
import React from 'react';
import MessageBox from '../../views/MessageBox/MessageBox';
import cx from 'classnames';
import addTeamActionCreators from '../../actions/addTeam-action-creators';
import editTeamActionCreators from '../../actions/editTeam-action-creators';
import RandomStore from '../../stores/random-store';

var getNowTeam = () => ({ nowTeam: RandomStore.getNowTeam().team });

var AddTeamList = React.createClass({
  getInitialState: function () {
    if (window.location.hash.substr(1) === '/editTeam') {
      return getNowTeam();
    } else { return {}; }
  },

  addTeamList: function (event) {
    event.preventDefault();
    var male = this.refs.maleValue.getDOMNode().value;
    var female = this.refs.femaleValue.getDOMNode().value;

    if (!male || !female) return;

    var content = {
      male: male.split(' '),
      female: female.split(' ')
    };

    MessageBox.open('确认提交吗>ㅂ<', function () {
      if (window.location.hash.substr(1) === '/addTeam') {
        addTeamActionCreators.emitAddTeam(content);
      } else {
        editTeamActionCreators.emitEditTeam(content);
      }
      window.location.href = '#/';
    });
  },

  render: function () {

    var maleStr = this.state.nowTeam ? this.state.nowTeam.male.join(' ') : '';
    var femaleStr = this.state.nowTeam ? this.state.nowTeam.female.join(' ') : '';
    return (
      <form onSubmit={this.addTeamList}>
        <div className={cx(styles.group)}>
          <div className={cx(styles.babel, styles.male)}>男生</div>
          <textarea className={styles.textarea} placeholder="某 某 某" ref='maleValue' defaultValue={maleStr} />
        </div>
        <div>
          <div className={cx(styles.babel, styles.female)}>女生</div>
          <textarea className={styles.textarea} placeholder="某 某 某" ref='femaleValue' defaultValue={femaleStr} />
        </div>
        <button className={styles.button}><i className="fa fa-check"></i></button>
      </form>
    );
  }
});

export default AddTeamList;