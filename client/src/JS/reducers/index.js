import { combineReducers } from 'redux'
import gameReducer from './game'
import userReducer from './user'
import gamedetails from './gamedetails'
import cartReducer from './cart'

export const rootReducer = combineReducers({
  gameReducer,
  userReducer,
  gamedetails,
  cart: cartReducer,
})
