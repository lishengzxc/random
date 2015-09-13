import styles from './Setup.scss';
import React from 'react';
import MessageBox from '../../views/MessageBox/MessageBox';
import clearTeamActionCreators from '../../actions/clearTeam-action-creators';

var Setup = React.createClass({
  clear: function () {
    MessageBox.open('确认要清空所有数据吗ಥ_ಥ', function () {
      clearTeamActionCreators.emitClearTeam();
      window.location.href = '#/';
    });
  },

  render: function () {
    return (
      <div className="in">
        <button className={styles.button} onClick={this.clear}>清除数据</button>
      </div>
    )
  }
});

export default Setup;