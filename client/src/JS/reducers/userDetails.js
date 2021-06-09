import {
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
} from '../actionTypes/user'

const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, load: true }
    case USER_DETAILS_SUCCESS:
      return { load: false, userInfo: action.payload }
    case USER_DETAILS_FAIL:
      return { load: false, error: action.payload }
    default:
      return state
  }
}
export default userDetailsReducer
