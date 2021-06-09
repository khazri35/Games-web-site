import axios from 'axios'
import {
  SIGNIN_USER,
  SIGNUP_USER,
  LOAD_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from '../actionTypes/user'

export const signup = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER })
  try {
    const { data } = await axios.post('/api/user/signup', newUser)
    dispatch({ type: SIGNUP_USER, payload: data })
    history.push('/profile')
  } catch (error) {
    error.response.data.error.map((el) => alert(el.msg))
    dispatch({
      type: FAIL_USER,
      payload: error.response.data.error,
    })
  }
}

export const signin = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER })
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post('/api/user/signin', user, config)
    dispatch({ type: SIGNIN_USER, payload: data })
    history.push('/profile')
  } catch (error) {
    dispatch({
      type: FAIL_USER,
      payload: error.response.data.error,
    })
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
    let { data } = await axios.get('/api/user/current', config)
    dispatch({ type: CURRENT_USER, payload: data })
  } catch (error) {
    error.response.data.error.map((el) => alert(el.msg))
    dispatch({
      type: FAIL_USER,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch({
    type: LOGOUT_USER,
  })
}

export const getUserDetails = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST })
  try {
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: localStorage.getItem(`${userInfo.token}`),
      },
    }

    const { data } = await axios.put(`/api/user/profile`, user, config)
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
