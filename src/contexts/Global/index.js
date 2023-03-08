import * as React from 'react'
import PropTypes from 'prop-types'

export const GlobalStateContext = React.createContext({})
export const GlobalHandlersContext = React.createContext({})

export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [basketOpen, setBasketOpen] = React.useState(0)
  const handleMenu = React.useCallback(() => {
    setMenuOpen((prevState) => !prevState)
    setBasketOpen(false)
    console.log('clicked')
  }, [])

  const stateContext = React.useMemo(() => ({
    menuOpen,
    basketOpen,
  }))

  const handlersContext = React.useMemo(() => ({
    handleMenu,
  }))

  return (
    <GlobalStateContext.Provider value={stateContext}>
      <GlobalHandlersContext.Provider value={handlersContext}>
        {children}
      </GlobalHandlersContext.Provider>
    </GlobalStateContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
