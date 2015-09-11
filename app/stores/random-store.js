import AppDispatcher from '../dispatcher/app-dispatcher';

var EventEmitter = require('events').EventEmitter;
var pageState = false;
var now = {};
// test
//var now = {
//  team: {"male":["1","2","3","4","5"],"female":["6","7","8","9","0"]}
//};
var teamList = JSON.parse(localStorage.getItem('teamList') || '[]');

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
  },

  getTeamList: function () {
    return teamList;
  },

  getNowTeam: function () {
    return now;
  }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case 'EMIT_SLIDE':
      pageState = !pageState;
      RandomStore.emitChange();
      break;

    case 'EMIT_ADDTEAM':
      action.content.id = teamList.length;
      teamList.push(action.content);
      localStorage.setItem('teamList', JSON.stringify(teamList));
      RandomStore.emitChange();
      break;

    case 'EMIT_CLEARTEAM':
      teamList = [];
      localStorage.setItem('teamList', '[]');
      RandomStore.emitChange();
      break;

    case 'EMIT_CHOOSETEAM':
      now = {
        team: teamList[action.content],
        index: action.content
      };
      RandomStore.emitChange();
      break;

    case 'EMIT_EDITTEAM':
      action.content.id = now.index;
      teamList[now.index] = action.content;
      localStorage.setItem('teamList', JSON.stringify(teamList));
      RandomStore.emitChange();
      break;
  }
});

export default RandomStore;
