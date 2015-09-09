import styles from './AddTeamList.scss';
import React from 'react';
import cx from 'classnames';

var AddTeamList = React.createClass({
  addTeamList: function (event) {
    event.preventDefault();
    console.log(this.refs.maleValue.getDOMNode().value);
    console.log(this.refs.femaleValue.getDOMNode().value);
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