import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './Hello.css'

class Hello extends React.PureComponent {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
          <Link
            to='/'
          >
            To Home
          </Link>
        </p>
      </div>
    )
  }
}

export {
  Hello
}
