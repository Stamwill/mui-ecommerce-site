import * as React from 'react'
import { navigation } from 'api/mock'
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
import { GlobalStateContext } from 'contexts/Global'

const AppDrawer = (props) => {
  const { menuOpen } = React.useContext(GlobalStateContext)

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? '100%' : 250 }}>
      <List>
        <IconButton>
          <CloseIcon />
        </IconButton>

        {navigation.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.label} />
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
            <Drawer anchor={anchor} open={menuOpen}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default AppDrawer
