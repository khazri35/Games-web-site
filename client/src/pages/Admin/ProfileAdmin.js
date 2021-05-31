import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
const ProfileAdmin = () => {
  // return "Profile ADMIN";
  const user = useSelector((state) => state.userReducer.user);
  return (
    <>
      <br />
      <br />
      <br />
      <div class="card text-center">
        <div class="card-header">Administrator</div>
        <div class="card-body">
          <Row>
            <Col md={3}>
              {/* <h2>Account Information</h2> */}
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
                {/* <Button type="Submit" variant="primary">
                  Update
                </Button> */}
              </Form>
            </Col>
            <Col md={3}>
              <img src="/assets/photo.jpg" width="200px" height="200px"></img>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <div class="card-footer text-muted">
          <div class="admin">
            <a
              href="/adminGames"
              class="btn btn-success"
              role="button"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              Games Dashboard
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <a
              href="/userlist"
              class="btn btn-warning"
              tabindex="-1"
              aria-disabled="true"
              role="button"
              data-bs-toggle="button"
            >
              Users Dashboard
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileAdmin;
