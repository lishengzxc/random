import React from 'react';
import styles from './GroupItem.scss';

var GroupItem = React.createClass({
  render: function () {
    return (
      <li className={styles.li}>{
      //{JSON.stringify(this.props.result)}
      this.props.result.map(function (result) {
        return (
          <div className={styles.member}>
            {result}
          </div>
        );
      })


      }</li>
    )
  }
});

export default GroupItem;