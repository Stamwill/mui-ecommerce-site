import * as React from 'react'
import { navigation } from 'api/mock'
import {
  styled,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { GlobalStateContext, GlobalHandlersContext } from 'contexts/Global'

const AnchorStyling = styled('div')(({ theme }) => ({
  width: '250px',
  [theme.breakpoints.up('sm')]: {
    width: '400px',
  },
  [theme.breakpoints.up('md')]: {
    width: '600px',
  },
}))

const ShoppingBasket = (props) => {
  const { basketOpen } = React.useContext(GlobalStateContext)
  const { handleBasket } = React.useContext(GlobalHandlersContext)

  const list = () => (
    <AnchorStyling>
      <Box>
        <List>
          <IconButton onClick={handleBasket}>
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
    </AnchorStyling>
  )

  return (
    <section>
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer anchor={anchor} open={basketOpen}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default ShoppingBasket
