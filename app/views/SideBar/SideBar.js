import React from 'react/addons';
import styles from './SideBar.scss';
import RandomStore from '../../stores/random-store';

var getPageState = () => { pageState: RandomStore.getPageState() };

class SideBar extends React.Component {
  constructor () {
    super();
    this.state = getPageState();
  }

  onSlide() {
    this.setState(getPageState());
  }

  componentDidMount () {
    RandomStore.addChangeListener(this.onSlide);
  }

  componentWillUnmount () {
    RandomStore.removeChangeListener(this.onSlide);
  }

  render () {
    var classSet = React.addons.classSet;
    var pageStateClasses = {

    };
    return (
      <aside className={styles.aside}>
        <img className={styles.logo} src={require('./elefe.png')} />
        <ul className={styles.ul}>
          <li><span className="fa fa-cog"></span>设置</li>
          <li><span className="fa fa-exclamation-circle"></span>关于</li>
        </ul>
      </aside>
    )
  }
}

export default SideBar;
