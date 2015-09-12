import React from 'react';
import styles from './GroupItem.scss';

var GroupItem = React.createClass({
  render: function () {
    return (
      <li className={styles.li}>{
      this.props.result.map(function (result) {
        return (
          <div className={styles.member} key={result}>
            {result}
          </div>
        );
      })


      }</li>
    )
  }
});

export default GroupItem;