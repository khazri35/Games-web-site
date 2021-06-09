import { combineReducers } from 'redux'
import gameReducer from './game'
import userReducer from './user'
import gamedetails from './gamedetails'
import cartReducer from './cart'
import userDetailsReducer from './userDetails'

export const rootReducer = combineReducers({
  gameReducer,
  userReducer,
  gamedetails,
  userDetailsReducer,
  cart: cartReducer,
})
