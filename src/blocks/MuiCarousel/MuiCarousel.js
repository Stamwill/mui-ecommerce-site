import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'
import { Paper, Button, styled } from '@mui/material'

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: '-1',
  width: '100%',
  height: '50vh',
}))

function MuiCarousel(props) {
  var items = [
    {
      name: 'Random Name',
      description: 'Probably the most random thing you have ever seen!',
      img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80',
    },
    {
      name: 'Picture will be here',
      description: 'Hello World!',
      img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80',
    },
  ]

  return (
    <Carousel
      indicators={false}
      sx={{ position: 'relative', height: '50vh', marginBottom: '5rem' }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper sx={{ position: 'relative' }}>
      <h2>{props.item.name}</h2>
      <ImageContainer>
        <Image src={props.item.img} fill alt="clothes" style={{ objectFit: 'cover' }} />
        {/* <img src={props.item.img} alt="clothes" /> */}
      </ImageContainer>
      <p>{props.item.description}</p>
    </Paper>
  )
}

export default MuiCarousel
