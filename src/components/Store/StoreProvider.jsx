import React from 'react'

const StoreContext = React.createContext('store')

class StoreProvider extends React.PureComponent {
  state = this.props.initialStore

  render () {
    return (
      <StoreContext.Provider
        value={{
          store: this.state,
          setStore: this.setState.bind(this)
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export {
  StoreContext,
  StoreProvider
}
