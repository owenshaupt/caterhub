import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const orderReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {},
        { [action.currentUser.data.id]: action.currentUser.data }
      );
    default:
      return state;
  }
};

export default orderReducer;
