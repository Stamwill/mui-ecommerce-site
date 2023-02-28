import * as React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { styled } from '@mui/material'

const ImgContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '150px',
  width: '150px',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('md')]: {
    height: '200px',
    width: '200px',
  },
}))

function Showcase(props) {
  const { name, img } = props

  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ImgContainer>
        <Image src={img} alt="test" fill style={{ objectFit: 'cover' }} />
      </ImgContainer>
      <Typography sx={{ marginTop: '0.775rem' }} variant="button" component="h5">
        Clothing Title
      </Typography>
      <Typography sx={{ paddingBottom: '1rem', textAlign: 'center' }}>{name}</Typography>
    </section>
  )
}

export default Showcase
