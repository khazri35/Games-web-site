import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col } from 'react-bootstrap'
import { getGames } from '../JS/actions/game'
import GameCard from '../Components/GameCard/GameCard'

const LandPage = () => {
  const dispatch = useDispatch()
  const listGames = useSelector((state) => state.gameReducer.gameList)
  const load = useSelector((state) => state.gameReducer.load)
  useEffect(() => {
    dispatch(getGames())
  }, [dispatch])

  return (
    <>
      <Row>
        {load ? (
          <h2>stanna</h2>
        ) : (
          listGames.map((game) => (
            <Col key={game._id} sm={12} md={6} lg={4} xl={3}>
              <GameCard game={game} />
            </Col>
          ))
        )}
      </Row>
    </>
  )
}

export default LandPage
