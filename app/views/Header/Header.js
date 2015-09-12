import React from 'react';
import styles from './Header.scss';
import slideActionCreators from '../../actions/slide-action-creators';
import cx from 'classnames';
import RandomStore from '../../stores/random-store';

var getPageState = () => ({ pageState: RandomStore.getPageState() });

var Header = React.createClass({
  getInitialState: function () {
    return getPageState();
  },

  slide: function () {
    slideActionCreators.emitSlide();
  },

  onSlide: function () {
    this.setState(getPageState());
  },

  componentDidMount: function () {
    RandomStore.addChangeListener(this.onSlide);
  },

  componentWillUnmount: function () {
    RandomStore.removeChangeListener(this.onSlide);
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
