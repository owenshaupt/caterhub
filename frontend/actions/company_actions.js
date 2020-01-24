import * as APIUtil from "../util/company_api_util";

// export const RECEIVE_COMPANYS = "RECEIVE_COMPANYS";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
// export const REMOVE_COMPANY = "REMOVE_COMPANY";
export const CLEAR_COMPANIES = "CLEAR_COMPANIES";
export const RECEIVE_COMPANY_ERRORS = "RECEIVE_COMPANY_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// const recieveAllMenuItems = menuItems => ({
//   type: RECEIVE_COMPANYS,
//   menuItems
// });

const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

// const removeMenuItem = id => {
//   const idsStr = id.config.data.slice(1, id.config.data.length - 1);
//   const splitIds = idsStr.split(",");
//   const userId = +splitIds[0];

//   return {
//     type: REMOVE_COMPANY,
//     id: userId
//   };
// };

export const receiveErrors = errors => ({
  type: RECEIVE_COMPANY_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// export const fetchMenuItems = () => dispatch => {
//   APIUtil.fetchMenuItems()
//     .then(items => dispatch(recieveAllMenuItems(items)))
//     .catch(error => dispatch(receiveErrors(error.response.data)));
// };

export const fetchCompany = companyString => dispatch =>
  APIUtil.fetchCompany(companyString)
    .then(item => dispatch(receiveCompany(item)))
    .catch(error => dispatch(receiveErrors(error.responseJSON)));

// export const createMenuItem = menuItem => dispatch =>
//   APIUtil.createMenuItem(menuItem)
//     .then(menuItem => dispatch(receiveMenuItem(menuItem)))
//     .catch(error => dispatch(receiveErrors(error.response.data)));

// export const updateMenuItem = item => dispatch =>
//   APIUtil.updateMenuItem(item)
//     .then(item => dispatch(recieveItem(item)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

// export const deleteMenuItem = (itemId, userId) => dispatch =>
//   APIUtil.deleteMenuItem(itemId, userId)
//     .then(itemId => dispatch(removeMenuItem(itemId)))
//     .catch(error => dispatch(receiveErrors(error.response.data)));

// export const searchItems = search_id => dispatch =>
//   APIUtilSearch.searchItems(search_id)
//     .then(items => dispatch(receiveFilteredItems(items)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

export const clearCompanies = () => {
  return {
    type: CLEAR_COMPANIES
  };
};
// 