// importaion
import { TOGGLE_EDIT, TOGGLE_ADD } from "../actionTypes/edit";

// initialState
const initialState = {
  edit: false,
};
//
const editReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_ADD:
      return { ...state, edit: false };
    case TOGGLE_EDIT:
      return { ...state, edit: true };

    default:
      return state;
  }
};
export default editReducer;
