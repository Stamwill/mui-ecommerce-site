import * as React from 'react'
import { navigation } from 'api/mock'
import { styled } from '@mui/material'

const FooterRoot = styled('footer')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  backgroundColor: 'black',
  padding: '2rem',
}))

const NavItem = styled('div')(({ theme }) => ({
  margin: '0.775rem 0',
}))

function Footer() {
  return (
    <FooterRoot>
      {navigation.map((item, idx) => (
        <NavItem key={idx}>
          <a href={item.href}>{item.label}</a>
        </NavItem>
      ))}
    </FooterRoot>
  )
}

export default Footer
