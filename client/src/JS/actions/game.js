import { GET_GAMES, LOAD_GAMES, FAIL_GAMES } from '../actionTypes/game'
import axios from 'axios'
export const getGames = () => async (dispatch) => {
  dispatch({ type: LOAD_GAMES })
  try {
    let result = await axios.get('/api/game')
    console.log(result)
    dispatch({
      type: GET_GAMES,
      payload: result.data,
    })
  } catch (error) {
    dispatch({
      type: FAIL_GAMES,
      payload: error.response,
    })
  }
}
