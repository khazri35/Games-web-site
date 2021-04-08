import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
// import Message from '../Components/Message'
// import Loader from '../Components/Loader'
import { signup } from '../JS/actions/user'
import FormContainer from '../Components/FormContainer'

const Registerscreen = ({ history }) => {
  const [newUser, setNewUser] = useState({})

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signup(newUser, history))
  }

  return (
    <FormContainer>
      <h1>Sign UP</h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

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
          Already Have an Account?
          <Link to="/signin">Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Registerscreen
