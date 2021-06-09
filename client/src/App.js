import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './router/PrivateRoute'

import { Container } from 'react-bootstrap'
import Errors from './pages/Errors'
import Homescreen from './pages/Homescreen/Homescreen'

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Gamescreen from './pages/Gamescreen/Gamescreen'
import Cartscreen from './pages/Cartscreen'
import Loginscreen from './pages/Loginscreen'
import Registerscreen from './pages/Registerscreen'
import Profilescreen from './pages/Profilescreen'

import { current } from './JS/actions/user'
import SearchBox from './Components/SearchBox'

const App = () => {
  const token = localStorage.getItem('token')

  const dispatch = useDispatch()
  useEffect(() => {
    if (token) {
      dispatch(current())
    }
  }, [dispatch, token])

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/signin" component={Loginscreen} />
            <Route path="/signup" component={Registerscreen} />
            <PrivateRoute exact path="/profile" component={Profilescreen} />
            <Route path="/game/:id" component={Gamescreen} />
            <Route path="/cart/:id?" component={Cartscreen} />
            <Route exact path="/" component={Homescreen} />
            <Route path="/search/:keyword" component={SearchBox} />
            <Route path="/*" component={Errors} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
