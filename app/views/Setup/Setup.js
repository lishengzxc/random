import styles from './Setup.scss';
import React from 'react';

var Setup = React.createClass({
  clear: function () {
    // test
    localStorage.setItem('teamList', '[{"male":["胜","李"],"female":["鱼","乐","林"]}]');
  },

  render: function () {
    return (
      <div>
        <button className={styles.button} onClick={this.clear}>清除数据</button>
      </div>
    )
  }
});

export default Setup;