"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionSwitcher = function actionSwitcher(actions, initialState) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (action && actions.hasOwnProperty(action.type)) return actions[action.type].call(null, state, action);
    return state;
  };
};

exports.default = actionSwitcher;