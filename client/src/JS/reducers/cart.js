import { CART_ADD, CART_REMOVE } from '../actionTypes/cart'

const initialState = {
  cartItems: [],
  cart: {},
}

const cartAdd = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD:
      const item = payload
      const existGame = state.cartItems.find((x) => x.game === item.game)

      if (existGame) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.game === existGame.game ? item : x
          ),
        }
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }
    case CART_REMOVE:
      return {}
    default:
      return state
  }
}

export default cartAdd
