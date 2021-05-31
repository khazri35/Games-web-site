import axios from "axios";
import {
  SIGNIN_USER,
  SIGNUP_USER,
  LOAD_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../actionTypes/user";

export const signup = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/api/user/signup", newUser);
    dispatch({ type: SIGNUP_USER, payload: result.data });
    history.push("/profile");
  } catch (error) {
    error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const signin = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/api/user/signin", user);
    dispatch({ type: SIGNIN_USER, payload: result.data });
    if (result.data.user.isAdmin) history.push("/profileAdmin");
    else history.push("/profile");
    // history.push("/profile");
  } catch (error) {
    error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

// <<<<<<< Updated upstream
export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const listUsers = () => async (dispatch) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    let { data } = await axios.get("/api/user");
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error.response,
    });
  }
};
// try {
//   dispatch({
//     type: USER_LIST_REQUEST,
//   });
//   const {
//     userLogin: { userInfo },
//   } = getState();

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT_USER,
  });
};
//   const config = {
//     headers: {
//       Authorization: `Bearer ${userInfo.token}`,
//     },
//   };
//   const { data } = await axios.get(`/api/user`, config);
//   dispatch({
//     type: USER_LIST_SUCCESS,
//     payload: data,
//   });
// } catch (error) {
//   dispatch({
//     type: USER_LIST_FAIL,
//     payload:
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//   });
// }

// export const register = (newUser, history) => async (dispatch) => {
//   dispatch({ type: LOAD_USER });
//   console.log(history);
//   try {
//     const result = await axios.post("/api/user/signup", newUser);

//     dispatch({ type: REGISTER_USER, payload: result.data }); //msg , token , user
//     history.push("/profile");
//   } catch (error) {
//     console.log(error.response.data.errorrs);
//     // error.response.data.errors.map((el) => alert(el.msg));
//     dispatch({ type: FAIL_USER, payload: error.response.data.errors });
//   }
// };

// export const login = (user, history) => async (dispatch) => {
//   dispatch({ type: LOAD_USER });

//   try {
//     const result = await axios.post("/api/user/signin", user);
//     dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
//     history.push("/Profile");
//   } catch (error) {
//     // error.response.data.errors.map((el) =>
//     //   setTimeout(function () {
//     //     alert(el.msg);
//     //   }, 3000)
//     // );
//     dispatch({ type: FAIL_USER, payload: error.response.data.errors });
//   }
// };

// export const currentUser = () => async (dispatch) => {
//   try {
//     const options = {
//       headers: { Authorization: localStorage.getItem("token") },
//     };
//     const result = await axios.get("/api/user/current", options);
//     dispatch({ type: CURRENT_USER, payload: result.data });
//   } catch (error) {
//     dispatch({ type: FAIL_USER, payload: error.response.data });
//   }
// };

// export const logout = () => {
//   return {
//     type: LOGOUT_USER,
//   };
// };

// export const videErrors = () => {
//   return {
//     type: "VIDE_ERRORS",
//   };
// };
