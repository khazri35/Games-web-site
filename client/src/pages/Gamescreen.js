import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../Components/Rating/Rating'
import { getDetails } from '../JS/actions/gamedetails'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import Meta from '../Components/Meta'

const Gamescreen = ({ match }) => {
  const dispatch = useDispatch()
  const detailsGame = useSelector((state) => state.gamedetails)
  const { load, errors, gameDetails } = detailsGame

  useEffect(() => {
    dispatch(getDetails(match.params.id))
  }, [dispatch, match])

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
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
            <Col md={6}>
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
