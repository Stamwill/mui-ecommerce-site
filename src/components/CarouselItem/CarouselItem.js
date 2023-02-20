import * as React from 'react'
import Image from 'next/image'
import { Paper, styled, Typography } from '@mui/material'

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: '-1',
  width: '100%',
  height: '50vh',
}))

function CarouselItem(props) {
  const { name, img, description } = props
  return (
    <Paper elevation={0} sx={{ position: 'relative', marginTop: '2rem' }}>
      <Typography variant="h4" component="h2">
        {name}
      </Typography>

      <ImageContainer>
        <Image src={img} fill alt="clothes" style={{ objectFit: 'cover' }} />
      </ImageContainer>

      <Typography variant="p" component="p" sx={{ padding: '0 0 1rem 0.1rem' }}>
        {description}
      </Typography>
    </Paper>
  )
}

export default CarouselItem
