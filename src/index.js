const actionSwitcher = function(actions, initialState) {
  return function(state = initialState, action) {
    if (action && actions.hasOwnProperty(action.type))
      return actions[action.type].call(null, state, action);
    return state;
  };
};

export default actionSwitcher;
