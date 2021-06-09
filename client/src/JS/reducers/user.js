import {
  FAIL_USER,
  LOAD_USER,
  SIGNIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  CURRENT_USER,
} from '../actionTypes/user'

const initialState = {
  user: {},
  isAuth: false,
  load: false,
  error: null,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, load: true }

    case SIGNUP_USER:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        load: false,
        user: payload,
        isAuth: true,
      }

    case SIGNIN_USER:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        load: false,
        user: payload,
        isAuth: true,
      }
    case CURRENT_USER:
      return {
        ...state,
        load: false,
        user: payload,
        isAuth: true,
      }
    case FAIL_USER:
      return { ...state, load: false, error: payload }

    case LOGOUT_USER:
      return {
        user: {},
        isAuth: false,
        load: false,
        error: payload,
      }
    default:
      return state
  }
}
export default userReducer
