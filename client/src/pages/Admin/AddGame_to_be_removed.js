import React from "react";
import BookForm from "./Admin";
// import { useDispatch } from "react-redux";
// import { postGame } from "../../JS/actions/game";

const AddGame = ({ game }) => {
  //   const dispatch = useDispatch();

  const handleOnSubmit = (book) => {
    console.log(book);
    // dispatch(postGame(game._id));
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddGame;
