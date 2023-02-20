import * as React from 'react'
import Link from 'next/link'
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
          <Link href={item.href}>{item.label}</Link>
        </NavItem>
      ))}
    </FooterRoot>
  )
}

export default Footer
