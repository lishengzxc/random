import React from 'react';
import styles from './TeamList.scss';
import TeamListItem from '../TeamListItem/TeamListItem';
import RandomStore from '../../stores/random-store';

var getTeamList = () => ({ teamList: RandomStore.getTeamList() });

var TeamList = React.createClass({
  getInitialState: function () {
    return getTeamList();
  },

  render: function () {
    var teamList = this.state.teamList;
    return (
      <ul>{
        teamList.map(function (result) {
          console.log(result);
          return <TeamListItem key={result.id} members={result.male.concat(result.female)} />
        })
        }</ul>
    );
  }
});

export default TeamList;