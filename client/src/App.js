import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import GameCard from './Components/GameCard/GameCard'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/game/:id" component={GameCard} />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
