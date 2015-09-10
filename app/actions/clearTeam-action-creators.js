import AppDispatcher from '../dispatcher/app-dispatcher';

var ClearTeam = {
  emitClearTeam: function() {
    var action= {
      actionType: "EMIT_CLEARTEAM"
    };
    AppDispatcher.dispatch(action);
  }
};

export default ClearTeam;