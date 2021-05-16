import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../JS/actions/game";

const Admin = (props, { history }) => {
  const [game, setGame] = useState({
    title: props.game ? props.game.title : "",
    publisher: props.game ? props.game.publisher : "",
    type: props.game ? props.game.type : "",
    price: props.game ? props.game.price : "",
    image: props.image ? props.game.image : "",
    description: props.description ? props.game.description : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { title, publisher, price, type, description, image } = game;
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.userReducer);

  const submitHandler = (e) => {
    if (isAuth) {
      e.preventDefault();
      dispatch(create(game, history));
    } else {
      alert("Unable to add a new game, You need to signin !!");
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [title, publisher, price, type, description, image];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const game = {
        id: uuidv4(),
        title,
        publisher,
        price,
        type,
        description,
        image,
      };
      handleOnSubmit2(game);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleOnSubmit2 = (game) => {
    console.log(game);
    dispatch(create(game));
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "image":
        if (value !== "") {
          setGame((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setGame((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setGame((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <br />
      <br />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Game Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="title"
            value={title}
            placeholder="Enter name of game"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="publisher">
          <Form.Label>game publisher</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="publisher"
            value={publisher}
            placeholder="Enter name of publisher"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>type</Form.Label>
          <Form.Control
            className="input-control"
            // type="number"
            name="type"
            value={type}
            placeholder="Enter available type"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>game Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of game"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter available description"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>image</Form.Label>
          <Form.Control
            className="input-control"
            type="file"
            name="image"
            value={image}
            placeholder="Enter available image"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="Submit" variant="primary" onClick={submitHandler}>
          Submit
        </Button>
        <br /> <br />
        <div>
          <a
            href="/adminGames"
            class="btn btn-warning"
            tabindex="-1"
            aria-disabled="true"
            role="button"
            data-bs-toggle="button"
          >
            Go Back
          </a>
        </div>
      </Form>
    </div>
  );
};

export default Admin;
