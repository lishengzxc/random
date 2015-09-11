import AppDispatcher from '../dispatcher/app-dispatcher';

var close = {
  emitClose: function() {
    var action= {
      actionType: "EMIT_CLOSESB"
    };
    AppDispatcher.dispatch(action);
  }
};

export default close;