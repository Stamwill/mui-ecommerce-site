import * as React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'
import styled from '@emotion/styled'

const ImgContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '200px',
  width: '200px',
}))

function Showcase(props) {
  const { name, img } = props

  return (
    <section style={{ position: 'relative' }}>
      <div>
        <Typography>{name}</Typography>

        <ImgContainer>
          <Image src={img} alt="test" fill style={{ objectFit: 'cover' }} />
        </ImgContainer>
      </div>
    </section>
  )
}

export default Showcase
