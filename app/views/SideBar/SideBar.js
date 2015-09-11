import React from 'react/addons';
import styles from './SideBar.scss';
import RandomStore from '../../stores/random-store';
import cx from 'classnames';
import slideActionCreators from '../../actions/slide-action-creators';

var getPageState = () => ({ pageState: RandomStore.getPageState() });

var SideBar = React.createClass({
  getInitialState: function () {
    return getPageState();
  },

  onSlide: function () {
    this.setState(getPageState());
  },

  slide: function () {
    slideActionCreators.emitSlide();
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
          <li><a onClick={this.slide} className={styles.link} href="#/"><span className="fa fa-users"></span>首页</a></li>
          <li><a onClick={this.slide} className={styles.link} href="#/setup"><span className="fa fa-cogs"></span>设置</a></li>
          <li><span className="fa fa-comments"></span>关于</li>
        </ul>
      </aside>
    )
  }
});

export default SideBar;
