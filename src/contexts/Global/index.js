import * as React from 'react'
import PropTypes from 'prop-types'

export const GlobalStateContext = React.createContext({})
export const GlobalHandlersContext = React.createContext({})

export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [basketOpen, setBasketOpen] = React.useState(false)

  const handleMenu = React.useCallback(() => {
    setMenuOpen((prevState) => !prevState)
    setBasketOpen(false)
  }, [])

  const handleBasket = React.useCallback(() => {
    setBasketOpen((prevState) => !prevState)
  })

  const stateContext = React.useMemo(() => ({
    menuOpen,
    basketOpen,
  }))

  const handlersContext = React.useMemo(() => ({
    handleMenu,
    handleBasket,
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
