import React from 'react'
import { CarouselItemData } from 'api/mock'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from 'components/CarouselItem'

function MuiCarousel() {
  return (
    <Carousel
      indicators={false}
      sx={{ position: 'relative', height: '50vh', marginBottom: '5rem' }}
    >
      {CarouselItemData.map((item, i) => (
        <CarouselItem key={i} {...item} />
      ))}
    </Carousel>
  )
}

export default MuiCarousel
