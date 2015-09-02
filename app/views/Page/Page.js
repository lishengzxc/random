import React from 'react';
import styles from './Page.scss';

import Header from '../Header/Header';

class Page extends React.Component {

  render () {
    return (
      <div className={styles.page}>
        <Header />
      </div>
    )
  }
}

export default Page;
