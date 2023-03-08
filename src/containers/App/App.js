import * as React from 'react'
import Image from 'next/image'
import { showcaseMen, showcaseWomen, homeImageDivider } from 'api/mock'
import { Typography } from '@mui/material'
import { styled, Container, Box } from '@mui/system'
import Hero from 'blocks/Hero'
import MuiCarousel from 'blocks/MuiCarousel'
import Showcase from 'blocks/Showcase'

const ImgContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '70vh',
  margin: theme.spacing(2, 0, 5),
}))

const App = () => {
  const [open, setOpen] = React.useState(false)
  let [basket, setBasket] = React.useState(0)

  const toggleBurger = () => {
    setOpen((prevState) => !prevState)
  }

  const handleBasket = () => {
    setBasket((basket = basket + 1))
    console.log('clicked', basket)
  }
  return (
    <div>
      <Hero />
      <Container maxWidth="md">
        <MuiCarousel />
      </Container>

      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" component="h4" mb={3}>
            Men
          </Typography>
          <Showcase content={showcaseMen} />

          <Typography variant="h4" component="h4" mb={3}>
            Womens
          </Typography>
          <Showcase content={showcaseWomen} />
        </Box>
      </Container>

      <ImgContainer onClick={() => handleBasket}>
        <Image src={homeImageDivider} fill alt="test" style={{ objectFit: 'cover' }} />
      </ImgContainer>
    </div>
  )
}

export default App
