import AppDispatcher from '../dispatcher/app-dispatcher';

var AddTeam = {
  emitAddTeam: function(content) {
    var action= {
      actionType: "EMIT_ADDTEAM",
      content: content
    };
    AppDispatcher.dispatch(action);
  }
};

export default AddTeam;