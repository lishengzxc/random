import styles from './AddTeamButton.scss';
import React from 'react';
import cx from 'classnames';

var AddTeamButton  = React.createClass({
  render: function () {
    var classList = this.props.visibility ? [styles.addTeamButton, styles.hide] : [styles.addTeamButton, styles.show];
    return (
      <a className={cx(classList)} href="#/addTeam">＋</a>
    );
  }
});

export default AddTeamButton;