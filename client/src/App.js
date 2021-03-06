import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Errors from "./pages/Errors";
import Homescreen from "./pages/Homescreen/Homescreen";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Gamescreen from "./pages/Gamescreen/Gamescreen";
import Cartscreen from "./pages/Cartscreen";
import Loginscreen from "./pages/Loginscreen";
import Registerscreen from "./pages/Registerscreen";
import Profilescreen from "./pages/Profilescreen";
import PrivateRoute from "./router/PrivateRoute";
import { current } from "./JS/actions/user";
import UserList from "./pages/Admin/UserList";
import Admin from "./pages/Admin/Admin";
import AdminGames from "./pages/Admin/AdminListGames";
import ProfileAdmin from "./pages/Admin/ProfileAdmin";
import EditGame from "./pages/Admin/EditGame";

const App = () => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/" component={Homescreen} />
            <Route path="/signin" component={Loginscreen} />
            <Route path="/signup" component={Registerscreen} />
            <PrivateRoute path="/profile" component={Profilescreen} />
            <Route path="/game/:id" component={Gamescreen} />
            <Route path="/cart/:id?" component={Cartscreen} />
            <Route path="/userlist" component={UserList} />
            <Route path="/admin" component={Admin} />
            <Route path="/adminGames" component={AdminGames} />
            <Route path="/profileAdmin" component={ProfileAdmin} />
            <Route path="/edit/:id?" component={EditGame} />
            <Route path="/*" component={Errors} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
