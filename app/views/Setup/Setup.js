import styles from './Setup.scss';
import React from 'react';

var Setup = React.createClass({
  render: function () {
    return (
      <div>
        <button className={styles.button}>清除数据</button>
      </div>
    )
  }
});

export default Setup;