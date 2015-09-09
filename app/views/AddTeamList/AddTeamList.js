import styles from './AddTeamList.scss';
import React from 'react';
import cx from 'classnames';
import addTeamActionCreators from '../../actions/addTeam-action-creators';

// test
//import RandomStore from '../../stores/random-store';
//var g = () => ({ s: RandomStore.getTeamList() });

var AddTeamList = React.createClass({

  //onChange: function () {
  //  console.log(g());
  //},
  //
  //componentDidMount: function() {
  //  RandomStore.addChangeListener(this.onChange);
  //},
  //
  //componentWillUnmount: function() {
  //  RandomStore.removeChangeListener(this.onChange);
  //},

  addTeamList: function (event) {
    event.preventDefault();
    var content = {
      male: this.refs.maleValue.getDOMNode().value.split('，'),
      female: this.refs.femaleValue.getDOMNode().value.split('，')
    };
    console.log(JSON.stringify(content));
    addTeamActionCreators.emitAddTeam(content);
  },

  render: function () {
    return (
      <form onSubmit={this.addTeamList}>
        <div className={cx(styles.group)}>
          <div className={cx(styles.babel, styles.male)}>男生</div>
          <textarea className={styles.textarea} placeholder="某，某，某" ref='maleValue'></textarea>
        </div>
        <div>
          <div className={cx(styles.babel, styles.female)}>女生</div>
          <textarea className={styles.textarea} placeholder="某，某，某" ref='femaleValue'></textarea>
        </div>
        <button className={styles.button}><i className="fa fa-check"></i></button>
      </form>
    );
  }
});

export default AddTeamList;