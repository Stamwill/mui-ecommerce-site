import * as React from 'react'
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const AppDrawer = (props) => {
  const { open, toggleBurger } = props

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? '100%' : 250 }}>
      <List>
        <IconButton onClick={toggleBurger}>
          <CloseIcon />
        </IconButton>

        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <section>
      <div>
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer anchor={anchor} open={open} onClose={toggleBurger}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default AppDrawer
