import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../../Components/Rating/Rating'
import { getDetails } from '../../JS/actions/gamedetails'
import Loader from '../../Components/Loader'
import Message from '../../Components/Message'
import Meta from '../../Components/Meta'

const Gamescreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()
  const detailsGame = useSelector((state) => state.gamedetails)
  const { load, errors, gameDetails } = detailsGame
  const { isAuth } = useSelector((state) => state.userReducer)
  useEffect(() => {
    dispatch(getDetails(match.params.id))
  }, [dispatch, match])

  const addHandler = () => {
    {
      isAuth
        ? history.push(`/cart/${match.params.id}?qty=${qty}`)
        : history.push('/signin')
    }
  }

  return (
    <>
      <Link className="btn btn-dark my-3 " to="/">
        Go Back
      </Link>
      {load ? (
        <Loader />
      ) : errors ? (
        <Message variant="danger">{errors}</Message>
      ) : (
        <>
          <Meta title={gameDetails.title} />
          <Row>
            <Col md={4}>
              <Image src={gameDetails.image} alt={gameDetails.title} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{gameDetails.title}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={gameDetails.rating}
                    text={`${gameDetails.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price:${gameDetails.price}</ListGroup.Item>
                <ListGroup.Item>
                  Developer: {gameDetails.publisher}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: {gameDetails.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${gameDetails.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(5).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      onClick={addHandler}
                      className="btn btn-block"
                      type="button"
                    >
                      Add to cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default Gamescreen
