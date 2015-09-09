import React from 'react';
import styles from './TeamList.scss';
import TeamListItem from '../TeamListItem/TeamListItem';
import RandomStore from '../../stores/random-store';

var getTeamList = () => ({ teamList: RandomStore.getTeamList() });

var TeamList = React.createClass({
  getInitialState: function () {
    console.log(getTeamList());
    return getTeamList();
  },

  render: function () {
    return (
      <ul>
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
      </ul>
    );
  }
});

export default TeamList;