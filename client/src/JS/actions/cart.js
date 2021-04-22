import axios from 'axios'
import { CART_ADD, CART_REMOVE } from '../actionTypes/cart'

export const cartAdd = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/game/${id}`)
  dispatch({
    type: CART_ADD,
    payload: {
      game: data.game._id,
      name: data.game.title,
      image: data.game.image,
      price: data.game.price,
      qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const cartRemove = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE,
    payload: id,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
