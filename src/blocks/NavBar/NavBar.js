import * as React from 'react'
import { styled } from '@mui/material/styles'
import { AppBar, Box, Typography, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Search from 'components/Search'

const FlexStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
}))

const IconContainer = styled('div')(({ theme }) => ({
  width: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0),
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}))

const HideSmall = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <FlexStyle>
          <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="h6" noWrap component="div" sx={{ display: { sm: 'block' } }}>
              Clothes
            </Typography>

            <Search />

            <IconContainer>
              <HideSmall>
                <ShoppingBasketIcon />
              </HideSmall>
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </IconContainer>
          </Toolbar>
        </FlexStyle>
      </AppBar>
    </Box>
  )
}

export default Navbar
