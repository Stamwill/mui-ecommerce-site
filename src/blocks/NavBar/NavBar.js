import * as React from 'react'
import { navigation } from 'api/mock'
import { styled } from '@mui/material/styles'
import { AppBar, Box, Typography, Toolbar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Link from 'next/link'
import Search from 'components/Search'

const FlexStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
}))

const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}))

const MainNav = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

const HideBig = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))

function Navbar(props) {
  const { toggleBurger } = props
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <FlexStyle>
          <Toolbar sx={{ justifyContent: 'space-between', width: '100%', minHeight: '64px' }}>
            <Typography variant="h6" noWrap component="div" sx={{ display: { sm: 'block' } }}>
              Clothes
            </Typography>

            <Search />

            <MainNav>
              {navigation.map((label, idx) => (
                <Link href={label.href} key={idx}>
                  {label.label}
                </Link>
              ))}
            </MainNav>

            <IconContainer>
              <Box sx={{ display: 'flex' }}>
                <IconButton size="medium" color="inherit">
                  <ShoppingCart />
                </IconButton>

                <HideBig>
                  <IconButton size="large" color="inherit" onClick={toggleBurger}>
                    <MenuIcon />
                  </IconButton>
                </HideBig>
              </Box>
            </IconContainer>
          </Toolbar>
        </FlexStyle>
      </AppBar>
    </Box>
  )
}

export default Navbar
