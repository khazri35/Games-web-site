import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import './Homescreen.css'
import { Row, Col } from 'react-bootstrap'
import { getGames } from '../../JS/actions/game'
import GameCard from '../../Components/GameCard/GameCard'
import Loader from '../../Components/Loader'
import Message from '../../Components/Message'

const Homescreen = () => {
  const dispatch = useDispatch()
  const listGames = useSelector((state) => state.gameReducer)
  const { load, errors, gameList } = listGames
  useEffect(() => {
    dispatch(getGames())
  }, [dispatch])

  return (
    <>
      <h1>Latest Games</h1>
      {load ? (
        <Loader />
      ) : errors ? (
        <Message variant="danger">{errors}</Message>
      ) : (
        <Row>
          {gameList.map((game) => (
            <Col className="col" key={game._id} sm={12} md={6} lg={4} xl={3}>
              <GameCard game={game} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Homescreen
