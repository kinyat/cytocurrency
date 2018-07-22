import React from 'react'
import { Form, TextInput, Button, FontAwesomeIcon, Heading} from '@intellihr/ui-components'
import { withStore } from '../Store'
import { Link } from 'react-router-dom'
import { history } from '../Router'
import lodash from 'lodash'
import { Header, Footer, InputBlock} from './style'

class CreateCurrencyFormBase extends React.PureComponent {
  initialState = {
    id:'',
    type: '',
    unit: '',
    value: ''
  }

  state = this.initialState

  handleChange = key => e => {
    this.setState({
      ...this.state,
      [key]: e.target.value
    })
  }

  handleChangeId(){
    this.setState({
      ...this.state,
      id:lodash.uniqueId()
    }, this.afterChangeId)
  }

  afterChangeId(){
    const {
      store,
      setStore,
      store: {
        Currency
      }
    } = this.props

    const getAllName = (data, key)=>{
      return key
    }

    if(!lodash.includes(lodash.map(Currency, getAllName),this.state.type)){

      const newType={}
      newType[this.state.type]={}
      this.props.setStore({ Currency:  lodash.assign(Currency, newType)})
    }

    Currency[this.state.type][this.state.id]={
      unit: parseFloat(this.state.unit),
      value: parseFloat(this.state.value)
    }
    const NewCurrency=Currency
    this.setState(this.initialState)

    setStore({
      ...store,
      NewCurrency
    })
    console.log(this.props.store.Currency)
    history.push('/')
  }

  handleSubmit = e => {
    e.preventDefault()
    this.handleChangeId()
  }

  render () {
    return (
      <div>
      <Header>
        <Link
          to='/'
        >
        <Button  icon={<FontAwesomeIcon type='angle-left' />} type='light-borderless'>
            <span> Back Home</span>
            </Button>
        </Link>

        <Heading
          type='section'
        >
          Creaate New Cytocurrency
        </Heading>
      </Header>
      <Form
        handleSubmit={this.handleSubmit}
      >
        <InputBlock>
          Currency Type
          <TextInput
            value={this.state.type}
            handleChange={this.handleChange('type')}
          />
          Unit
          <TextInput
            value={this.state.unit}
            handleChange={this.handleChange('unit')}
          />
          Value
          <TextInput
            value={this.state.price}
            handleChange={this.handleChange('value')}
          />
        </InputBlock>
        <Footer>
            <Button icon={<FontAwesomeIcon type='plus'/>} type='primary'>
            <span> Add New Cryptocurrency</span>
            </Button>
        </Footer>
      </Form>
      </div>
    )
  }
}

const CreateCurrencyForm = withStore(CreateCurrencyFormBase)

export {
  CreateCurrencyForm
}
