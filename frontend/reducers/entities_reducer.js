import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import menuItemsReducer from "./menu_items/menu_items_reducer";
import modifiersReducer from "./modifiers/modifiers_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  menuItems: menuItemsReducer,
  modifiers: modifiersReducer
});

export default entitiesReducer;
