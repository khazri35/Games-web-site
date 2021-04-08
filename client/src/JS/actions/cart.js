import axios from 'axios'
import { CART_ADD, CART_REMOVE } from '../actionTypes/cart'

export const cartAdd = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/game/${id}`)
  dispatch({
    type: CART_ADD,
    payload: {
      game: data._id,
      name: data.title,
      image: data.image,
      price: data.price,
      qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
