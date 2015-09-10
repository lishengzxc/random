import React from 'react';
import styles from './TeamListItem.scss';
import cx from 'classnames';

var TeamListItem = React.createClass({
  chooseChoice: function () {

  },

  render: function () {
    var members = this.props.members;
    return (
      <li className={styles.item} onTouchStart={this.chooseChoice}>
        <div className={styles.tip}>{members.length}</div>
        <div className={styles.content}>{
          members.map(function (result) {
            return <div key={result} className={cx(styles.member)}>{result}</div>
          })
        }</div>
      </li>
    );
  }
});

export default TeamListItem;