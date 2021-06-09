import { GET_GAMES, LOAD_GAMES, FAIL_GAMES } from '../actionTypes/game'

const initialState = {
  gameList: [],
  load: false,
  error: null,
}

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_GAMES:
      return { ...state, load: true }

    case GET_GAMES:
      return { ...state, load: false, gameList: payload.games }

    case FAIL_GAMES:
      return { ...state, load: false, error: payload }

    default:
      return state
  }
}

export default gameReducer
