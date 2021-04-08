import {
  LOAD_DETAILS,
  GET_DETAILS,
  FAIL_DETAILS,
} from '../actionTypes/gamedetails'

import axios from 'axios'

export const getDetails = (id) => async (dispatch) => {
  dispatch({ type: LOAD_DETAILS })
  try {
    const { data } = await axios.get(`/api/game/${id}`)
    dispatch({
      type: GET_DETAILS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FAIL_DETAILS,
      payload: error.response,
    })
  }
}
