import * as React from 'react'
import { showcaseMen, showcaseWomen } from 'api/mock'
import { Container, Box } from '@mui/system'
import Hero from 'blocks/Hero'
import MuiCarousel from 'blocks/MuiCarousel'
import Showcase from 'blocks/Showcase'
import { Typography } from '@mui/material'

const App = () => {
  return (
    <div>
      <header>
        <title>Mui Ecommerce Site</title>
      </header>

      <Hero />
      <Container maxWidth="md">
        <MuiCarousel />
      </Container>

      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" component="h4" sx={{ marginBottom: '2rem' }}>
            Men
          </Typography>
          <Showcase content={showcaseMen} />

          <Typography variant="h4" component="h4" sx={{ marginBottom: '2rem' }}>
            Womens
          </Typography>
          <Showcase content={showcaseWomen} />
        </Box>
      </Container>
    </div>
  )
}

export default App
