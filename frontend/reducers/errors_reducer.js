import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import menuItemErrorsReducer from "./menu_items/menu_item_errors_reducer";
import modifierErrorsReducer from "./modifiers/modifier_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  menuItems: menuItemErrorsReducer,
  modifiers: modifierErrorsReducer
});

export default errorsReducer;
