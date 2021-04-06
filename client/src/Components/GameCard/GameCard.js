import React from 'react'
import { Card } from 'react-bootstrap'

const GameCard = ({ game }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/game/${game._id}`}>
        <Card.Img src={game.image} variant="top" />
      </a>
    </Card>
  )
}

export default GameCard
