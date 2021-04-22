import { CART_ADD, CART_REMOVE } from '../actionTypes/cart'

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.game === item.game)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.game === existItem.game ? item : x
          ),
        }
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }
    case CART_REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.game !== action.payload),
      }
    default:
      return state
  }
}

export default cartReducer
