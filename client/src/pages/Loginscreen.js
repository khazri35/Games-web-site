import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
// import Message from '../Components/Message'
// import Loader from '../Components/Loader'
import { signin } from '../JS/actions/user'
import FormContainer from '../Components/FormContainer'

const Loginscreen = ({ history }) => {
  const [user, setUser] = useState({})

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
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type="Submit" variant="primary" onClick={submitHandler}>
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Dont Have an Account?
          <Link to="/signup">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Loginscreen
