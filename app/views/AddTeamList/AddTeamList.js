import styles from './AddTeamList.scss';
import React from 'react';
import cx from 'classnames';

var AddTeamList = React.createClass({
  render: function () {
    return (
      <form>
        <div className={cx(styles.group)}>
          <div className={cx(styles.babel, styles.male)}>男生</div>
          <textarea className={styles.textarea} placeholder="某，某，某"></textarea>
        </div>
        <div>
          <div className={cx(styles.babel, styles.female)}>女生</div>
          <textarea className={styles.textarea} placeholder="某，某，某"></textarea>
        </div>
        <button className={styles.button}><i className="fa fa-check"></i></button>
      </form>
    );
  }
});

export default AddTeamList;