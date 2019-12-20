import {
  RECEIVE_MODIFIERS,
  RECEIVE_MODIFIER,
  REMOVE_MODIFIER,
  CLEAR_MODIFIERS
} from "../../actions/modifier_actions";

const modifiersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MODIFIERS:
      return action.modifiers.data;
    case RECEIVE_MODIFIER:
      return Object.assign({}, { [action.modifier.id]: action.modifier });
    case REMOVE_MODIFIER:
      let newState = Object.assign({}, oldState);
      delete newState[action.id];
      return newState;
    case CLEAR_MODIFIERS:
      return {};
    default:
      return oldState;
  }
};

export default modifiersReducer;
