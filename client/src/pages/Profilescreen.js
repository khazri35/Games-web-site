import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'

const Profilescreen = () => {
  const user = useSelector((state) => state.userReducer.user)

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              value={user.name}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
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
