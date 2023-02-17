import * as React from 'react'
import Hero from 'blocks/Hero'
import MuiCarousel from 'blocks/MuiCarousel'
import { Container } from '@mui/system'

const App = () => {
  return (
    <div>
      <header>
        <title>Mui Ecommerce Site</title>
      </header>

      <div>
        <Hero />
        <Container maxWidth="md">
          <MuiCarousel />
        </Container>
      </div>
    </div>
  )
}

export default App
