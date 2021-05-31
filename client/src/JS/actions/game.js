import { GET_GAMES, LOAD_GAMES, FAIL_GAMES } from "../actionTypes/game";
import axios from "axios";
export const getGames = () => async (dispatch) => {
  dispatch({ type: LOAD_GAMES });
  try {
    let { data } = await axios.get("/api/game");
    dispatch({
      type: GET_GAMES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FAIL_GAMES,
      payload: error.response,
    });
  }
};
export const deleteGame = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/game/${id}`);
    dispatch(getGames());
  } catch (error) {
    dispatch({
      type: FAIL_GAMES,
      payload: error.response,
    });
  }
};
export const getGame = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/game/${id}`);
    dispatch({ type: GET_GAMES, payload: result.data });
  } catch (error) {
    dispatch({
      type: FAIL_GAMES,
      payload: error.response,
    });
  }
};
export const postGame = (id) => async (dispatch) => {
  try {
    await axios.post("/api/game ,newGame");
    dispatch(getGames());
  } catch (error) {
    dispatch({
      type: FAIL_GAMES,
      payload: error.response,
    });
  }
};
export const editGame = (id, newGame) => async (dispatch) => {
  try {
    await axios.put(`/api/game/${id}`, newGame);
    dispatch(getGames());
  } catch (error) {
    dispatch({
      type: FAIL_GAMES,
      payload: error.response,
    });
  }
};

export const create = (newGame, history) => async (dispatch) => {
  dispatch({ type: LOAD_GAMES });
  try {
    newGame.image = newGame.image.replace("C:\\fakepath\\", "/assets/");
    const result = await axios.post("/api/game", newGame);
    dispatch({ type: LOAD_GAMES, payload: result.data });
    history.push("/admin");
  } catch (error) {
    dispatch({ type: FAIL_GAMES, payload: error.response });
  }
};
