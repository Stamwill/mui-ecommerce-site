import * as React from 'react'
import { Container } from '@mui/system'
import Hero from 'blocks/Hero'
import MuiCarousel from 'blocks/MuiCarousel'
import Showcase from 'blocks/Showcase'

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

      <Showcase />
    </div>
  )
}

export default App
