import {
  RECEIVE_MENU_ITEMS,
  RECEIVE_MENU_ITEM,
  REMOVE_MENU_ITEM,
  CLEAR_MENU_ITEMS
} from "../../actions/menu_item_actions";

const menuItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MENU_ITEMS:
      return action.menuItems.data;
    case RECEIVE_MENU_ITEM:
      return Object.assign({}, { [action.menuItem.id]: action.menuItem });
    case REMOVE_MENU_ITEM:
      let newState = Object.assign({}, oldState);
      delete newState[action.id];
      return newState;
    case CLEAR_MENU_ITEMS:
      return {};
    default:
      return oldState;
  }
};

export default menuItemsReducer;
