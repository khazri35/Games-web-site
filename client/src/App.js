import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Errors from './pages/Errors'
import LandPage from './pages/LandPage'

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Gamescreen from './pages/Gamescreen'
import Cartscreen from './pages/Cartscreen'
import Loginscreen from './pages/Loginscreen'
import Userscreen from './pages/Userscreen'
import Registerscreen from './pages/Registerscreen'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/" component={LandPage} />
            <Route path="/signin" component={Loginscreen} />
            <Route path="/signup" component={Registerscreen} />
            <Route path="/profile" component={Userscreen} />
            <Route path="/game/:id" component={Gamescreen} />
            <Route path="/cart/:id?" component={Cartscreen} />
            <Route path="/*" component={Errors} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
