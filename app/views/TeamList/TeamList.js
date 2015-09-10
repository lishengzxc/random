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
          return <TeamListItem key={result.id} male={result.male} female={result.female} />
        })
        }</ul>
    );
  }
});

export default TeamList;