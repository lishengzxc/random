import AppDispatcher from '../dispatcher/app-dispatcher';

var ChooseTeam = {
  emitChooseTeam: function(content) {
    var action= {
      actionType: "EMIT_CHOOSETEAM",
      content: content
    };
    AppDispatcher.dispatch(action);
  }
};

export default ChooseTeam;