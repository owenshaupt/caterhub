import {
  RECEIVE_MODIFIER,
  RECEIVE_MODIFIER_ERRORS,
  CLEAR_ERRORS
} from "../../actions/modifier_actions";

let _nullState = {
  errors: []
};

const modifierErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MODIFIER:
      return _nullState;
    case RECEIVE_MODIFIER_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      return _nullState;
    default:
      return state;
  }
};

export default modifierErrorsReducer;
