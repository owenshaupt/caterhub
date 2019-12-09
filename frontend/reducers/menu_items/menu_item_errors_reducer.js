import {
  // RECEIVE_MENU_ITEM,
  RECEIVE_MENU_ITEM_ERRORS
} from "../../actions/menu_item_actions";

let _nullState = {
  errors: []
};

const menuItemErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_MENU_ITEM:
    //   return _nullState;
    case RECEIVE_MENU_ITEM_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default menuItemErrorsReducer;
