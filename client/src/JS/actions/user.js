import axios from 'axios'
import {
  SIGNIN_USER,
  SIGNUP_USER,
  LOAD_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
} from '../actionTypes/user'

export const signup = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER })
  try {
    const result = await axios.post('/api/user/signup', newUser)
    dispatch({ type: SIGNUP_USER, payload: result.data })
    history.push('/profile')
  } catch (error) {
    error.response.data.errors.map((el) => alert(el.msg))
    dispatch({ type: FAIL_USER, payload: error.response.data.errors })
  }
}

export const signin = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER })
  try {
    const result = await axios.post('/api/user/signin', user)
    dispatch({ type: SIGNIN_USER, payload: result.data })
    history.push('/profile')
  } catch (error) {
    error.response.data.errors.map((el) => alert(el.msg))
    dispatch({ type: FAIL_USER, payload: error.response.data.errors })
  }
}

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER })
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }
    const result = await axios.get('/api/user/current', config)
    dispatch({ type: CURRENT_USER, payload: result.data })
  } catch (error) {
    error.response.data.errors.map((el) => alert(el.msg))
    dispatch({ type: FAIL_USER, payload: error.response.data.errors })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch({
    type: LOGOUT_USER,
  })
}
