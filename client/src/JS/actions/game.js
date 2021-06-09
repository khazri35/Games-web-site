import { GET_GAMES, LOAD_GAMES, FAIL_GAMES } from '../actionTypes/game'
import axios from 'axios'

export const getGames = (keyword = '') => async (dispatch) => {
  dispatch({ type: LOAD_GAMES })
  try {
    let { data } = await axios.get(`/api/game?keyword=${keyword}`)
    dispatch({
      type: GET_GAMES,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FAIL_GAMES,
      payload:
        error.response && error.respose.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
