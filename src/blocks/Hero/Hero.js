import * as React from 'react'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const HeroRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60vh',
}))

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: '-1',
  width: '100%',
  height: '60vh',
}))

function Hero(props) {
  const {} = props
  return (
    <HeroRoot>
      <ImageContainer>
        <Image
          src="https://images.unsplash.com/photo-1656074166642-c1c22b309d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <Typography variant="h2" component="h1" color="white">
        Welcome to Clothes
      </Typography>
    </HeroRoot>
  )
}

export default Hero
