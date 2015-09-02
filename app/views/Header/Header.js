import React from 'react';
import styles from './Header.scss';
import slideActionCreators from '../../actions/slide-action-creators';

class Header extends React.Component {

  slide () {
    slideActionCreators.emitSlide();
  }

  render () {
    return (
      <header className={styles.header}>
        <span className="fa fa-bars" onClick={this.slide}></span>
        <h1 className={styles.title}></h1>
      </header>
    )
  }
}

export default Header;
