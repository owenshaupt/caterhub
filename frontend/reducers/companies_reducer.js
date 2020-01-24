import { RECEIVE_COMPANY, CLEAR_COMPANIES } from "../actions/company_actions";

const companiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.company.data;
    case CLEAR_COMPANIES:
      return state;
    default:
      return state;
  }
};

export default companiesReducer;
