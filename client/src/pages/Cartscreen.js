import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { cartAdd } from '../JS/actions/cart'

const Cartscreen = ({ match, location, history }) => {
  const gameId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()

  useEffect(() => {
    if (gameId) {
      dispatch(cartAdd(gameId, qty))
    }
  }, [dispatch, gameId, qty])

  return <div>Cart</div>
}

export default Cartscreen
