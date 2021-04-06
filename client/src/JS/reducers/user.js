import {
  FAIL_USER,
  LOAD_USER,
  SIGNIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
} from '../actionTypes/user'

const initialState = {
  user: {},
  isAuth: false,
  loadUser: false,
  errors: [],
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true }
    case SIGNUP_USER:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        loadUser: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      }
    case SIGNIN_USER:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        loadUser: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      }
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload }
    case LOGOUT_USER:
      localStorage.removeItem('token')
      return {
        user: {},
        isAuth: false,
        loadUser: false,
        errors: [],
      }
    default:
      return state
  }
}
export default userReducer
