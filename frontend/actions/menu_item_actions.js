import * as APIUtil from "../util/menu_item_api_util";

export const RECEIVE_MENU_ITEMS = "RECEIVE_MENU_ITEMS";
export const RECEIVE_MENU_ITEM = "RECEIVE_MENU_ITEM";
export const REMOVE_MENU_ITEM = "REMOVE_MENU_ITEM";
export const CLEAR_MENU_ITEMS = "CLEAR_MENU_ITEMS";
export const RECEIVE_MENU_ITEM_ERRORS = "RECEIVE_MENU_ITEM_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const recieveAllMenuItems = menuItems => ({
  type: RECEIVE_MENU_ITEMS,
  menuItems
});

const receiveMenuItem = menuItem => ({
  type: RECEIVE_MENU_ITEM,
  menuItem
});

const removeMenuItem = id => ({
  type: REMOVE_MENU_ITEM,
  id
});

export const receiveErrors = errors => ({
  type: RECEIVE_MENU_ITEM_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchItems = () => dispatch => {
  APIUtil.fetchItems()
    .then(items => dispatch(recieveAllMenuItems(items)))
    .catch(error => dispatch(receiveErrors(error.response.data)));
};

// export const fetchItem = id => dispatch =>
//   APIUtil.fetchItem(id)
//     .then(item => dispatch(recieveItem(item)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

export const createMenuItem = menuItem => dispatch =>
  APIUtil.createMenuItem(menuItem)
    .then(menuItem => dispatch(receiveMenuItem(menuItem)))
    .catch(error => dispatch(receiveErrors(error.response.data)));

// export const updateItem = item => dispatch =>
//   APIUtil.updateItem(item)
//     .then(item => dispatch(recieveItem(item)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

// export const deleteItem = id => dispatch =>
//   APIUtil.deleteItem(id)
//     .then(() => dispatch(removeItem()))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

// export const searchItems = search_id => dispatch =>
//   APIUtilSearch.searchItems(search_id)
//     .then(items => dispatch(receiveFilteredItems(items)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

// export const clearItems = () => {
//   return {
//     type: CLEAR_ITEMS
//   };
// };
