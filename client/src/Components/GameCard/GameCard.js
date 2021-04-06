import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";

const GameCard = ({ game }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/game/${game._id}`}>
        <Card.Img src={game.image} variant="top" />
      </a>
      <Card.Text as="div">
        <Rating value={game.rating} text={` ${game.numReviews}  reviews`} />
      </Card.Text>
    </Card>
  );
};

export default GameCard;
