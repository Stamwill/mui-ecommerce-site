import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function MuiCarousel(props) {
  var items = [
    {
      name: 'Random Name',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Picture will be here',
      description: 'Hello World!',
    },
  ]

  return (
    <Carousel indicators={false} sx={{ height: '200px' }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  )
}

export default MuiCarousel
