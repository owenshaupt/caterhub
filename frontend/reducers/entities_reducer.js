import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import menuItemsReducer from "./menu_items/menu_items_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  menuItems: menuItemsReducer
});

export default entitiesReducer;
