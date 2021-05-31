import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Button } from "react-bootstrap";
import { getGames } from "../../JS/actions/game";
import GameCard from "../../Components/Admin/GameCard";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import { Link } from "react-router-dom";

const AdminGames = () => {
  const dispatch = useDispatch();
  const listGames = useSelector((state) => state.gameReducer);
  const { load, errors, gameList } = listGames;
  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <>
      <br />
      <a
        href="/admin"
        class="btn btn-success"
        role="button"
        data-bs-toggle="button"
      >
        Add new Game
      </a>

      {load ? (
        <Loader />
      ) : errors ? (
        <Message variant="danger">{errors}</Message>
      ) : (
        <Row>
          {gameList.map((game) => (
            <Col key={game._id} sm={12} md={6} lg={4} xl={3}>
              <GameCard game={game} />
            </Col>
          ))}
        </Row>
      )}
      <div>
        <a
          href="/profileAdmin"
          class="btn btn-warning"
          tabindex="-1"
          aria-disabled="true"
          role="button"
          data-bs-toggle="button"
        >
          Go Back
        </a>
      </div>
    </>
  );
};

export default AdminGames;
