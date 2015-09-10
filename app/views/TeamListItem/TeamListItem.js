import React from 'react';
import styles from './TeamListItem.scss';
import cx from 'classnames';

var TeamListItem = React.createClass({
  chooseChoice: function () {
    window.location.href = '#/randomPage';
  },

  render: function () {
    var members = this.props.male.concat(this.props.female);
    return (
      <li className={styles.item} onTouchStart={this.chooseChoice}>
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