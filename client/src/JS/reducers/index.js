import { combineReducers } from 'redux'
import gameReducer from './game'
import userReducer from './user'
import gamedetails from './gamedetails'
import cartReducer from './cart'
import cart from "./cart";
import userListReducer from "./user";
import editReducer from "./edit";

export const rootReducer = combineReducers({
  gameReducer,
  userReducer,
  gamedetails,
  cart: cartReducer,
  userListReducer,
  editReducer,
});
