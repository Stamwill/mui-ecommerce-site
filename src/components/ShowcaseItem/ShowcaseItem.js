import * as React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { styled } from '@mui/material'
import ShowItem from 'blocks/ShowItem'

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
  const { title, description, img } = props

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ImgContainer onClick={handleOpen}>
        <Image src={img} alt="test" fill sizes="(max-width: 100%)" style={{ objectFit: 'cover' }} />
      </ImgContainer>

      <Typography mt={2} variant="button" component="h5">
        {title}
      </Typography>

      <Typography pb={2} sx={{ textAlign: 'center' }}>
        {description}
      </Typography>

      <ShowItem handleOpen={handleOpen} open={open} img={img} title={title} />
    </section>
  )
}

export default Showcase
