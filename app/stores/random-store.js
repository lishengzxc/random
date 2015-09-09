import AppDispatcher from '../dispatcher/app-dispatcher';

var EventEmitter = require('events').EventEmitter;

var pageState = false;

function myAssign(target, ...sources) {
  sources.forEach(source => {
    Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {}));
  });
  return target;
}

var RandomStore = myAssign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

  getPageState: function () {
    return pageState;
  }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case 'EMIT_SLIDE':
      pageState = !pageState;
      RandomStore.emitChange();
      break;
  }
});

module.exports = RandomStore;

