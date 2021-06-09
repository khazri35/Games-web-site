import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { current } from '../JS/actions/user'

const Profilescreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const { load, error, user } = useSelector((state) => state.userReducer)
  console.log(error)

  useEffect(() => {
    if (!user) {
      history.push('/signin')
    } else {
      if (!user.name) {
        dispatch(current())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      // dispatch(signup(newUser, history))
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {load && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="name"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="Submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Profilescreen
