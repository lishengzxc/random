import React from 'react';
import styles from './TeamList.scss';
import TeamListItem from '../TeamListItem/TeamListItem';

var TeamList = React.createClass({
  render: function () {
    return (
      <ul>
        <TeamListItem />
        <TeamListItem />
      </ul>
    );
  }
});

export default TeamList;