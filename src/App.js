import '@intellihr/ui-components/dist/index.css'
import '@intellihr/ui-components/dist/ui-components.css'
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Currency, CreateCurrencyForm, EditCurrencyForm, cryptoData as CurrencyData } from './components/Currency'
import { Hello } from './components/Hello'
import { BaseLayout } from './components/Layout'
import { StoreProvider } from './components/Store'
import { history } from './components/Router'

class App extends React.PureComponent {
  render() {
    return (
      <BaseLayout>
        <StoreProvider
          initialStore={{
            Currency: CurrencyData
          }}
        >
          <Router
            history={history}
          >
            <Switch>
              <Route
                exact
                path='/'
                component={Currency}
              />
              <Route
                exact
                path='/hello'
                component={Hello}
              />
              <Route
                exact
                path='/currency/create'
                component={CreateCurrencyForm}
              />
              <Route
                exact
                path='/currency/edit/:type/:id'
                component={EditCurrencyForm}
              />
            </Switch>
          </Router>
        </StoreProvider>
      </BaseLayout>
    )
  }
}

export default App
