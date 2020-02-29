import * as APIUtil from "../util/menu_item_api_util";

export const RECEIVE_MENU_ITEMS = "RECEIVE_MENU_ITEMS";
export const RECEIVE_MENU_ITEM = "RECEIVE_MENU_ITEM";
export const REMOVE_MENU_ITEM = "REMOVE_MENU_ITEM";
export const CLEAR_MENU_ITEMS = "CLEAR_MENU_ITEMS";
export const RECEIVE_MENU_ITEM_ERRORS = "RECEIVE_MENU_ITEM_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAllMenuItems = menuItems => ({
  type: RECEIVE_MENU_ITEMS,
  menuItems
});

const receiveMenuItem = menuItem => ({
  type: RECEIVE_MENU_ITEM,
  menuItem
});

const removeMenuItem = id => {
  const idsString = id.config.data.slice(1, id.config.data.length - 1);
  const splitIds = idsString.split(",");
  const userId = +splitIds[0];

  return {
    type: REMOVE_MENU_ITEM,
    id: userId
  };
};

export const receiveErrors = errors => ({
  type: RECEIVE_MENU_ITEM_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchMenuItems = () => dispatch => {
  APIUtil.fetchMenuItems()
    .then(items => dispatch(receiveAllMenuItems(items)))
    .catch(error => dispatch(receiveErrors(error.response.data)));
};

export const fetchSelectedMenuItems = companyId => dispatch =>
  APIUtil.fetchSelectedMenuItems(companyId)
    .then(items => dispatch(receiveAllMenuItems(items)))
    .catch(error => dispatch(receiveErrors(error.responseJSON)));

// export const fetchMenuItem = id => dispatch =>
//   APIUtil.fetchMenuItem(id)
//     .then(item => dispatch(receiveItem(item)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

export const createMenuItem = menuItem => dispatch =>
  APIUtil.createMenuItem(menuItem)
    .then(menuItem => dispatch(receiveMenuItem(menuItem)))
    .catch(error => dispatch(receiveErrors(error.response.data)));

// export const updateMenuItem = item => dispatch =>
//   APIUtil.updateMenuItem(item)
//     .then(item => dispatch(receiveItem(item)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

export const deleteMenuItem = (itemId, userId) => dispatch =>
  APIUtil.deleteMenuItem(itemId, userId)
    .then(itemId => dispatch(removeMenuItem(itemId)))
    .catch(error => dispatch(receiveErrors(error.response.data)));

// export const searchItems = search_id => dispatch =>
//   APIUtilSearch.searchItems(search_id)
//     .then(items => dispatch(receiveFilteredItems(items)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

export const clearMenuItems = () => {
  return {
    type: CLEAR_MENU_ITEMS
  };
};
