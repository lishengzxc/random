import styles from './Setup.scss';
import React from 'react';
import clearTeamActionCreators from '../../actions/clearTeam-action-creators';

var Setup = React.createClass({
  clear: function () {
    if (confirm('确认要清空所有数据ಥ_ಥ')) {
      clearTeamActionCreators.emitClearTeam();
      alert('数据已清空>ㅂ<');
      window.location.href = '#/';
    }
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