import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames } from '../../JS/actions/game'
import GameCard from '../GameCard/GameCard'

const GameList = () => {
  const dispatch = useDispatch()
  const listGame = useSelector((state) => state.gameReducer.gameList)
  const load = useSelector((state) => state.gameReducer.load)
  console.log(listGame)
  useEffect(() => {
    dispatch(getGames())
  }, [dispatch])

  return (
    <div>
      {load ? (
        <h2>spinner</h2>
      ) : (
        listGame.map((el) => <GameCard game={el} key={el._id} />)
      )}{' '}
    </div>
  )
}

export default GameList
