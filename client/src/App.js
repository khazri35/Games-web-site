
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import GameCard from './Components/GameCard/GameCard'
import { Container } from "react-bootstrap";
import Errors from "./pages/Errors";
import LandPage from "./pages/LandPage";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import PrivateRoute from "./router/PrivateRoute";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";


const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">

        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/game/:id" component={GameCard} />
        </Container>
        {/* <Container>
          <h1>hello word of gaming</h1>
        </Container> */}
        <Switch>
          <Route exact path="/" component={LandPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/*" component={Errors} />
        </Switch>

      </main>
      <Footer />
    </>
  );
};

export default App;
