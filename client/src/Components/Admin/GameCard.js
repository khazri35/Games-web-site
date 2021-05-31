import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { deleteGame, getGame } from "../../JS/actions/game";
import { toggleEdit } from "../../JS/actions/edit";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.userReducer);
  const handleEdit = () => {
    dispatch(toggleEdit());
    dispatch(getGame(game._id));
  };
  const removeGame = () => {
    if (isAuth) {
      dispatch(deleteGame(game._id));
    } else {
      alert("Unable to delete this game, You need to signin !!");
    }
  };
  return (
    <Card className="my-3 p-3 rounded">
      {/* <Link> */}
      <Link to={`/edit/${game._id}`}>
        <Card.Img src={game.image} variant="top" style={{ height: "18rem" }} />
      </Link>
      <Card.Body>
        <Link to="/adminGames">
          <Card.Title as="div">
            <strong>{game.title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">${game.price}</Card.Text>
      </Card.Body>
      {/* <Link to="/edit">
        <button onClick={handleEdit}>
          <i class="bi bi-trash">update</i>
        </button>
      </Link> */}
      <button onClick={() => removeGame()}>
        <i class="bi bi-trash">delete</i>
      </button>
    </Card>
  );
};

export default GameCard;
