import React from 'react';
import styles from './TeamListItem.scss';
import cx from 'classnames';

var TeamListItem = React.createClass({
  chooseChoice: function () {

  },

  render: function () {
    return (
      <li className={styles.item} onTouchStart={this.chooseChoice}>
        <div className={styles.tip}>22</div>
        <div className={styles.content}>
          <div className={cx(styles.member)}>胜</div>
          <div className={cx(styles.member)}>胜</div>
          <div className={cx(styles.member)}>胜</div>
          <div className={cx(styles.member)}>胜</div>
          <div className={cx(styles.member)}>胜</div>
          <div className={cx(styles.member)}>胜</div>
          <div className={cx(styles.member)}>胜</div>
          <div className={cx(styles.member)}>胜</div>
          <div className={cx(styles.member)}>胜</div>
          <div className={cx(styles.member)}>胜</div>
        </div>
      </li>
    );
  }
});

export default TeamListItem;