import styles from './AddTeamButton.scss';
import React from 'react';

var AddTeamButton  = React.createClass({
  render: function () {
    return (
      <a className={styles.addTeamButton} href="#/addTeam">＋</a>
    );
  }
});

export default AddTeamButton;