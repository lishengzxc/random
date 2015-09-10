import styles from './EditTeamButton.scss';
import React from 'react';
import cx from 'classnames';

var EditTeamButton  = React.createClass({
  render: function () {
    var classList = this.props.visibility ? [styles.editTeamButton, styles.hide] : [styles.editTeamButton, styles.show];
    return (
      <a className={cx(styles.editTeamButton, styles.show)} href="#/editTeam"><i className="fa fa-pencil"></i></a>
    );
  }
});

export default EditTeamButton;