import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_ERRORS
} from "../actions/session_actions";

let _nullState = {
  errors: []
};

const sessionErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return state;
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      return Object.assign({}, { errors: [] });
    default:
      return state;
  }
};

export default sessionErrorsReducer;
