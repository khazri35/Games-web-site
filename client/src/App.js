import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Errors from './pages/Errors'
import LandPage from './pages/LandPage'
import Profile from './pages/Profile/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp/SignUp'
import PrivateRoute from './router/PrivateRoute'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Gamescreen from './pages/Gamescreen'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/" component={LandPage} />
            <Route path="/game/:id" component={Gamescreen} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/*" component={Errors} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
