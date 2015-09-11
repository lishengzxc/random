import styles from './AddTeamButton.scss';
import React from 'react';
import cx from 'classnames';
import closesb from '../../actions/closesb-action-creators.js';

var AddTeamButton  = React.createClass({
  closesb: function () {
    closesb.emitClose();
  },

  render: function () {
    var classList = this.props.visibility ? [styles.addTeamButton, styles.hide] : [styles.addTeamButton, styles.show];
    return (
      <a onClick={this.closesb} className={cx(classList)} href="#/addTeam">＋</a>
    );
  }
});

export default AddTeamButton;