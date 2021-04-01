import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>hello word of gaming</h1>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
