import * as APIUtil from "../util/menu_item_api_util";

export const RECEIVE_MENU_ITEMS = "RECEIVE_MENU_ITEMS";
export const RECEIVE_MENU_ITEM = "RECEIVE_MENU_ITEM";
export const REMOVE_MENU_ITEM = "REMOVE_MENU_ITEM";
export const CLEAR_MENU_ITEMS = "CLEAR_MENU_ITEMS";
export const RECEIVE_MENU_ITEM_ERRORS = "RECEIVE_MENU_ITEM_ERRORS";

const recieveAllMenuItems = menuItems => ({
  type: RECEIVE_MENU_ITEMS,
  menuItems
});

const recieveMenuItem = menuItem => ({
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

// export const fetchItems = () => dispatch => {
//   APIUtil.fetchItems()
//     .then(items => dispatch(recieveAllItems(items)))
//     .fail(error => dispatch(receiveErrors(error.responseJSON)));
// };

// export const fetchItem = id => dispatch =>
//   APIUtil.fetchItem(id)
//     .then(item => dispatch(recieveItem(item)))
//     .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const createMenuItem = menuItem => dispatch =>
  APIUtil.createMenuItem(menuItem)
    .then(menuItem => dispatch(recieveMenuItem(menuItem)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));

// export const updateItem = item => dispatch =>
//   APIUtil.updateItem(item)
//     .then(item => dispatch(recieveItem(item)))
//     .fail(error => dispatch(receiveErrors(error.responseJSON)));

// export const deleteItem = id => dispatch =>
//   APIUtil.deleteItem(id)
//     .then(() => dispatch(removeItem()))
//     .fail(error => dispatch(receiveErrors(error.responseJSON)));

// export const searchItems = search_id => dispatch =>
//   APIUtilSearch.searchItems(search_id)
//     .then(items => dispatch(receiveFilteredItems(items)))
//     .fail(error => dispatch(receiveErrors(error.responseJSON)));

// export const clearItems = () => {
//   return {
//     type: CLEAR_ITEMS
//   };
// };
