import React from 'react'
import { Link } from 'react-router-dom'
import { SmartList, ListColumn } from '@intellihr/ui-components'
import { withStore } from '../Store'

const data = [
  {
    name: 'My Home',
    nickName: 'Apple',
    who: 'Me'
  },
  {
    name: 'Your Home',
    nickName: 'Banana',
    who: 'You'
  },
  {
    name: 'Our Home',
    nickName: 'Orange',
    who: 'Us'
  }
]

class HomeBase extends React.PureComponent {
  nameColumn (row) {
    return (
      <div>
        <b>{row.nickName}</b>
        <div>{row.name}</div>
      </div>
    )
  }

  render () {
    return (
      <React.Fragment>
        <Link
          to='/hello'
        >
          To Hello
        </Link>
        <SmartList
          data={this.props.store.home}
        >
          <ListColumn
            size={{
              md: 6,
              lg: 6
            }}
            header='Name'
            cell={this.nameColumn}
          />
          <ListColumn
            size={{
              md: 6,
              lg: 6
            }}
            header='Who'
            cell={row => row.who}
          />
        </SmartList>
        <Link
          to='/hello/create'
        >
          Create Home
        </Link>
      </React.Fragment>
    )
  }
}

const Home = withStore(HomeBase)

export {
  data,
  Home
}
