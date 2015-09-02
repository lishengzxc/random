import AppDispatcher from '../dispatcher/app-dispatcher';

var slide = {
  emitSlide: function() {
    var action= {
      actionType: "EMIT_SLIDE"
    };
    AppDispatcher.dispatch(action);
  }
};

export default slide;