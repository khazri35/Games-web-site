import { combineReducers } from 'redux'
import gameReducer from './game'
import userReducer from './user'
import gamedetails from './gamedetails'
import cart from './cart'

export const rootReducer = combineReducers({
  gameReducer,
  userReducer,
  gamedetails,
  cart,
})
