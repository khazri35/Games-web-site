import React from 'react'

const GameCard = ({ game }) => {
  return (
    <div>
      <h2>{game.title} </h2>
      <h2>{game.type} </h2>
      <h2>{game.url} </h2>
      <h2>{game.price} </h2>
    </div>
  )
}

export default GameCard
