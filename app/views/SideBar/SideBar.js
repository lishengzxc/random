import React from 'react/addons';
import styles from './SideBar.scss';
import RandomStore from '../../stores/random-store';
import cx from 'classnames';

var getPageState = () => ({ pageState: RandomStore.getPageState() });

var SideBar = React.createClass({
  getInitialState: function () {
    return getPageState();
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
    var classList = this.state.pageState ? [styles.aside, styles.slide] : [styles.aside];
    return (
      <aside className={cx(classList)}>
        <img className={styles.logo} src={require('./elefe.png')} />
        <ul className={styles.ul}>
          <li><span className="fa fa-cog"></span>设置</li>
          <li><span className="fa fa-exclamation-circle"></span>关于</li>
        </ul>
      </aside>
    )
  }
});

export default SideBar;
