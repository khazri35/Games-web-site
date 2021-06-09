import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { signin } from '../JS/actions/user'
import FormContainer from '../Components/FormContainer'
import Message from '../Components/Message'
import Loader from '../Components/Loader'

const Loginscreen = ({ history, location }) => {
  const [user, setUser] = useState({})

  const userDetails = useSelector((state) => state.userReducer)
  const { load, error } = userDetails

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signin(user, history))
  }

  return (
    <FormContainer>
      <h1>Sign IN</h1>
      {load && <Loader />}
      {error && <Message variant="danger">Oops</Message>}
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter email"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type="Submit" variant="primary" onClick={submitHandler}>
          Sign IN
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Don't Have an Account?
          <Link to="/signup">Sign Up</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Loginscreen
