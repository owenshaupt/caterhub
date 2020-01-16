import { RECEIVE_COMPANY } from "../actions/company_actions";

const companiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.company.data
    default:
      return state;
  }
};

export default companiesReducer;
