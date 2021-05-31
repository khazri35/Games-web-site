import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../../JS/actions/user";
import Loader from "./../../Components/Loader";
import Message from "./../../Components/Message";
import axios from "axios";

const UserList = ({ history, match }) => {
  //   const dispatch = useDispatch();
  //   const listUsers = useSelector((state) => state.user);
  //   const { load, errors, user } = listUsers;
  //   useEffect(() => {
  //     dispatch(listUsers(match.params.id));
  //   }, [dispatch, match]);
  const users = useSelector((state) => state.userReducer.user);

  // const [users, setUser] = useState([]);
  // useEffect(() => {
  //   userList();
  // }, []);
  // const userList = async () => {
  //   const result = await axios.get("http://localhost:5000/api/user");
  // };

  //********* */
  // const users = userList;

  //   const dispatch = useDispatch();
  //   const detailsGame = useSelector((state) => state.gamedetails);
  //   const { load, errors, gameDetails } = detailsGame;

  // useEffect(() => {
  //   dispatch(listUsers());
  // }, [dispatch]);

  // const deleteHandler = (id) => {
  //   console.log("delete");
  // };
  return (
    <>
      <h3>USERS</h3>
      <br />
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
            <th>IsAdmin</th>
            <th>timestamps</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.isAdmin ? (
                  <i className="fa fa-check" style={{ color: "green" }}></i>
                ) : (
                  <i className="fas fa-times" style={{ color: "red" }}></i>
                )}
              </td>
              <td>{user.timestamps}</td>
              <td>
                <LinkContainer to={`/user/${user._id}/edit`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-esit"></i>
                  </Button>
                </LinkContainer>
                {/* <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(user._id)}
                >
                  <i className="fas fa-trash"></i>
                </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default UserList;
