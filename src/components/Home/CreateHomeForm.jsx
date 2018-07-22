import React from 'react'
import { Form, TextInput, Button } from '@intellihr/ui-components'
import { withStore } from '../Store'
import { history } from '../Router'

class CreateHomeFormBase extends React.PureComponent {
  initialState = {
    name: '',
    nickName: '',
    who: ''
  }

  state = this.initialState

  handleChange = key => e => {
    this.setState({
      ...this.state,
      [key]: e.target.value
    })
  }

  // handleChange = function (key) {
  //   return function (e) {
  //     this.setState({
  //       ...this.state,
  //       [key]: e.target.value
  //     })
  //   }
  // }

  handleSubmit = e => {
    e.preventDefault()

    const {
      store,
      setStore,
      store: {
        home
      }
    } = this.props

    home.push(this.state)
    this.setState(this.initialState)

    setStore({
      ...store,
      home
    })

    history.push('/')
  }

  render () {
    return (
      <Form
        handleSubmit={this.handleSubmit}
      >
        Name
        <TextInput
          value={this.state.name}
          handleChange={this.handleChange('name')}
        />
        NickName
        <TextInput
          value={this.state.nickName}
          handleChange={this.handleChange('nickName')}
        />
        Who
        <TextInput
          value={this.state.who}
          handleChange={this.handleChange('who')}
        />
        <Button
           type='primary'
        >
          Add Home :)
        </Button>
      </Form>
    )
  }
}

const CreateHomeForm = withStore(CreateHomeFormBase)

export {
  CreateHomeForm
}
