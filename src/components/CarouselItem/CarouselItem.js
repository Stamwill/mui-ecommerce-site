import * as React from 'react'
import Image from 'next/image'
import { Paper } from '@mui/material'
import { styled } from '@mui/material'

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: '-1',
  width: '100%',
  height: '50vh',
}))

function CarouselItem(props) {
  const { name, img, description } = props
  return (
    <Paper sx={{ position: 'relative' }}>
      <h2>{name}</h2>
      <ImageContainer>
        <Image src={img} fill alt="clothes" style={{ objectFit: 'cover' }} />
      </ImageContainer>
      <p>{description}</p>
    </Paper>
  )
}

export default CarouselItem
