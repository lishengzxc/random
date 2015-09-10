import styles from './RandomPage.scss';
import React from 'react';
import cx from 'classnames';

var RandomPage = React.createClass({
  componentDidMount: function () {
    this.refs.numberinput.getDOMNode().focus();
  },

  render: function () {
    return (
      <div>
        <div className={styles.inputbox}>
          <input type="number" className={styles.numberinput} ref="numberinput"/>
          <div className={styles.checksame}>
            <input type="checkbox" id="same" /><label htmlFor="same"></label>
          </div>
        </div>
      </div>
    );
  }
});

export default RandomPage;