import React from 'react'
import { StoreContext } from './StoreProvider'

const withStore = StoreAwareComponent => {
  return class extends React.PureComponent {
    render () {
      return (
        <StoreContext.Consumer>
          {({ store, setStore }) => (
            <StoreAwareComponent
              {...this.props}
              store={store}
              setStore={setStore}
            />
          )}
        </StoreContext.Consumer>
      )
    }
  }
}

export {
  withStore
}
