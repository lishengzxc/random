import React from 'react';
import styles from './MessageBox.scss';

var MessageBox = React.createClass({

  componentWillUnmount: function () {
    document.body.removeChild(document.querySelector('.pop'));
  },

  cancal: function () {

    React.unmountComponentAtNode(document.querySelector('.pop'));
  },

  confirm: function () {
    this.props.callback();
    this.cancal();
  },

  render: function () {
    return (
      <div className={styles.messagebox}>
        <div className={styles.content}>
        {this.props.content}
        </div>
        <div className={styles.buttongroup}>
          <button onClick={this.cancal}>取消</button>
          <button onClick={this.confirm}>确定</button>
        </div>
      </div>
    );
  }
});

MessageBox.open = function (content, callback) {
  var pop = document.createElement('div');
  pop.className = 'pop';
  document.body.appendChild(pop);
  React.render(<MessageBox callback={callback} content={content} />, document.querySelector('.pop'));
};


export default MessageBox;