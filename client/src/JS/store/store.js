import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from '../reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const firtState = {
  cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  firtState,
  composeEnhancer(applyMiddleware(...middleware))
)

export default store
