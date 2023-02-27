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

      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" component="h4" sx={{ marginBottom: '2rem' }}>
            Mens
          </Typography>
          <Showcase content={showcaseMen} />
        </Box>
      </Container>

      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
