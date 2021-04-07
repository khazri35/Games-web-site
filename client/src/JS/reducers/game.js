import { GET_GAMES, LOAD_GAMES, FAIL_GAMES } from '../actionTypes/game'

const initialState = {
  gameList: [],
  load: false,
  errors: null,
}

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_GAMES:
      return { ...state, load: true }

    case GET_GAMES:
      return { ...state, load: false, gameList: payload.games }

    case FAIL_GAMES:
      return { ...state, load: false, errors: payload }

    default:
      return state
  }
}

export default gameReducer
