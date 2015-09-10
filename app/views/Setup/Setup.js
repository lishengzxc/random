import styles from './Setup.scss';
import React from 'react';
import clearTeamActionCreators from '../../actions/clearTeam-action-creators';

var Setup = React.createClass({
  clear: function () {
    clearTeamActionCreators.emitClearTeam();
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