import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";

const GameCard = ({ game }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/game/${game._id}`}>
{/* <<<<<<< Updated upstream */}
        {/* <Card.Img src={game.image} variant="top" style={{ height: '300px' }} /> */}
{/* ======= */}
        <Card.Img src={game.image} variant="top" style={{ height: "18rem" }} />
{/* >>>>>>> Stashed changes */}
      </Link>
      <Card.Body>
        <Link to={`/game/${game._id}`}>
          <Card.Title as="div">
            <strong>{game.title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">${game.price}</Card.Text>
      </Card.Body>
      <Card.Text as="div">
        <Rating value={game.rating} text={` ${game.numReviews}  reviews`} />
      </Card.Text>
    </Card>
  );
};

export default GameCard;
