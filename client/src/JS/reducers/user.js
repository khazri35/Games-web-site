import {
  FAIL_USER,
  LOAD_USER,
  SIGNIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  CURRENT_USER,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../actionTypes/user";

const initialState = {
  user: {},
  isAuth: false,
  load: false,
  errors: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, load: true };

    case SIGNUP_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        user: payload.user,
        isAuth: true,
      };
    case SIGNIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        user: payload.user,
        isAuth: true,
      }
    case CURRENT_USER:
      return {
        ...state,
        load: false,
        user: payload,
        isAuth: true,
      }
    case FAIL_USER:
      return { ...state, load: false, errors: payload }

    case LOGOUT_USER:
      return {
        user: {},
        isAuth: false,
        load: false,
        errors: payload,
      }

    default:
      return state;
  }
};

// export const userListReducer = (state = { users: [] }, action) => {
//   switch (action.type) {
//     case USER_LIST_REQUEST:
//       return { loading: true };
//     case USER_LIST_SUCCESS:
//       return { loading: false, users: action.payload };
//     case USER_LIST_FAIL:
//       return { loading: false, error: action.payload };
//   }
// };
const initialStateListUser = {
  user: {},
  errors: [],
};
export const userListReducer = (
  state = initialStateListUser,
  { type, payload }
) => {
  switch (type) {
    case USER_LIST_REQUEST:
      return { ...state };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        user: payload.user,
        errors: [],
      };
    case USER_LIST_FAIL:
      return { ...state, user: false, errors: payload };
    default:
      return state;
  }
};
export default userReducer;
