import styles from './AddTeamList.scss';
import React from 'react';
import cx from 'classnames';
import addTeamActionCreators from '../../actions/addTeam-action-creators';

var AddTeamList = React.createClass({
  addTeamList: function (event) {
    event.preventDefault();
    var male = this.refs.maleValue.getDOMNode().value;
    var female = this.refs.femaleValue.getDOMNode().value;

    if (!male || !female) return;

    var content = {
      male: male.split('，'),
      female: female.split('，')
    };
    if (confirm('确认提交')) {
      addTeamActionCreators.emitAddTeam(content);
      window.location.href = '#/';
    }
  },

  render: function () {
    return (
      <form onSubmit={this.addTeamList}>
        <div className={cx(styles.group)}>
          <div className={cx(styles.babel, styles.male)}>男生</div>
          <textarea className={styles.textarea} placeholder="某，某，某" ref='maleValue'></textarea>
        </div>
        <div>
          <div className={cx(styles.babel, styles.female)}>女生</div>
          <textarea className={styles.textarea} placeholder="某，某，某" ref='femaleValue'></textarea>
        </div>
        <button className={styles.button}><i className="fa fa-check"></i></button>
      </form>
    );
  }
});

export default AddTeamList;