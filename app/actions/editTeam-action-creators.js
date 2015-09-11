import AppDispatcher from '../dispatcher/app-dispatcher';

var EditTeam = {
  emitEditTeam: function(content) {
    var action= {
      actionType: "EMIT_EDITTEAM",
      content: content
    };
    AppDispatcher.dispatch(action);
  }
};

export default EditTeam;