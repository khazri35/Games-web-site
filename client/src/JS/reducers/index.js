import { combineReducers } from 'redux'
import gameReducer from './game'
import userReducer from './user'
import gamedetails from './gamedetails'

export const rootReducer = combineReducers({
  gameReducer,
  userReducer,
  gamedetails,
})
