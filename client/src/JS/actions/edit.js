import { TOGGLE_ADD, TOGGLE_EDIT } from "../actionTypes/edit";

export const toggleAdd = () => {
  return {
    type: TOGGLE_ADD,
  };
};

export const toggleEdit = () => {
  return {
    type: TOGGLE_EDIT,
  };
};
