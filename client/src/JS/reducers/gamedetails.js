import {
  FAIL_DETAILS,
  LOAD_DETAILS,
  GET_DETAILS,
} from '../actionTypes/gamedetails'

const initialState = {
  gameDetails: { reviews: [] },
  load: false,
  errors: null,
}

const gamedetails = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DETAILS:
      return { ...state, load: true }

    case GET_DETAILS:
      return { ...state, load: false, gameDetails: payload.game }

    case FAIL_DETAILS:
      return { ...state, load: false, errors: payload }

    default:
      return state
  }
}

export default gamedetails
