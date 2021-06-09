import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import './Homescreen.css'
import { Row, Col } from 'react-bootstrap'
import { getGames } from '../../JS/actions/game'
import GameCard from '../../Components/GameCard/GameCard'
import Loader from '../../Components/Loader'
import Message from '../../Components/Message'
import Slider from '../../Components/Slider'

const Homescreen = ({ match }) => {
  const keyword = match.params.keyword
  const dispatch = useDispatch()
  const listGames = useSelector((state) => state.gameReducer)
  const { load, error, gameList } = listGames
  useEffect(() => {
    dispatch(getGames(keyword))
  }, [dispatch, keyword])

  return (
    <>
      <h1>New Games</h1>
      {load ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
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
