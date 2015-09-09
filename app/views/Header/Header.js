import React from 'react';
import styles from './Header.scss';
import slideActionCreators from '../../actions/slide-action-creators';
import cx from 'classnames';

var Header = React.createClass({
  getInitialState: function () {
    return {
      pageState: false
    };
  },

  slide: function () {
    slideActionCreators.emitSlide();
    this.setState({
      pageState: !this.state.pageState
    });
  },

  render: function () {
    var classList = this.state.pageState ? [styles.header, styles.slide] : [styles.header];

    return (
      <header className={cx(classList)}>
        <span className="fa fa-bars" onTouchStart={this.slide}></span>
        <h1 className={styles.title}></h1>
      </header>
    )
  }
});

export default Header;
