import * as React from 'react'
import Link from 'next/link'
import { navigation } from 'api/mock'
import { styled } from '@mui/material'

const FooterRoot = styled('footer')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  backgroundColor: 'black',
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
}))

const NavItems = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
}))

const NavItem = styled('div')(({ theme }) => ({
  margin: theme.spacing(1.5),
}))

function Footer() {
  return (
    <FooterRoot>
      <NavItems>
        {navigation.map((item, idx) => (
          <NavItem key={idx}>
            <Link href={item.href}>{item.label}</Link>
          </NavItem>
        ))}
      </NavItems>
    </FooterRoot>
  )
}

export default Footer
