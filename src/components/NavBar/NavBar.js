import * as React from 'react'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Search from 'components/Search'

const FlexStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
}))

const Container = styled('div')(({ theme }) => ({
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

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <FlexStyle>
          <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="h6" noWrap component="div" sx={{ display: { sm: 'block' } }}>
              Clothes
            </Typography>

            <Search />

            <Container>
              <HideSmall>
                <ShoppingBasketIcon />
              </HideSmall>
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </Container>
          </Toolbar>
        </FlexStyle>
      </AppBar>
    </Box>
  )
}
