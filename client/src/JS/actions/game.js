import { GET_GAMES, LOAD_GAMES, FAIL_GAMES } from '../actionTypes/game'
import axios from 'axios'

export const getGames = () => async (dispatch) => {
  dispatch({ type: LOAD_GAMES })
  try {
    let { data } = await axios.get('/api/game')
    dispatch({
      type: GET_GAMES,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FAIL_GAMES,
      payload: error.response,
    })
  }
}
