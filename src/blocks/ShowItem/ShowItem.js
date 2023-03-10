import * as React from 'react'
import { styled, Box, Typography, Modal, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import Btn from 'components/Btn'

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '90vh',
  bgcolor: '#FFF',
  boxShadow: 24,
  padding: 4,
  margin: 4,
}

const IconContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 'auto',
  marginTop: '-30px',
  marginRight: '-30px',
  marginBottom: '30px',
}))

const ImgContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '250px',
  width: '250px',
  [theme.breakpoints.up('md')]: {
    height: '200px',
    width: '200px',
  },
}))

const TextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  marginTop: 25,
}))

const BtnContainer = styled('div')(({ theme }) => ({
  marginTop: 25,
}))

const ShowItem = (props) => {
  const { open, handleOpen, img, title } = props

  return (
    <div>
      <Modal open={open} onClose={handleOpen}>
        <Box sx={boxStyle}>
          <IconContainer>
            <IconButton onClick={handleOpen}>
              <CloseIcon />
            </IconButton>
          </IconContainer>

          <ImgContainer>
            <Image src={img} alt="" fill />
          </ImgContainer>

          <TextContainer>
            <Typography variant="h6" component="h2">
              {title}
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </TextContainer>

          <BtnContainer>
            <Btn />
          </BtnContainer>
        </Box>
      </Modal>
    </div>
  )
}

export default ShowItem
