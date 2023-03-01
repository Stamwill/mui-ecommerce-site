import * as React from 'react'
import { showcaseMen, showcaseWomen, homeImageDivider } from 'api/mock'
import { styled, Container, Box } from '@mui/system'
import Hero from 'blocks/Hero'
import MuiCarousel from 'blocks/MuiCarousel'
import Showcase from 'blocks/Showcase'
import { Typography } from '@mui/material'
import Image from 'next/image'

const ImgContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '70vh',
  margin: '2rem 0 4rem',
}))

console.log(homeImageDivider)
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

      <ImgContainer>
        <Image src={homeImageDivider} fill alt="test" style={{ objectFit: 'cover' }} />
      </ImgContainer>
    </div>
  )
}

export default App
