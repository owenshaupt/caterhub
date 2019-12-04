import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log("action.currentUser", action.currentUser);
      return Object.assign(
        {},
        { [action.currentUser.data.id]: action.currentUser.data }
      );
    default:
      return state;
  }
};

export default usersReducer;
