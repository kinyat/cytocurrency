import React from 'react'
import { Form, TextInput, Button, FontAwesomeIcon, Heading} from '@intellihr/ui-components'
import { withStore } from '../Store'
import { Link } from 'react-router-dom'
import { history } from '../Router'
import lodash from 'lodash'
import { Header, Footer, InputBlock} from './style'

class EditCurrencyFormBase extends React.PureComponent {
  constructor (props) {
    super(props)

    const currentId = this.props.match.params.id
    const currentType = this.props.match.params.type

    const currentData = this.props.store.Currency[currentType][currentId]

    this.initialState = {
      id:currentId,
      unit: currentData.unit,
      type: currentType,
      value: currentData.value,
    }
  
    this.state = this.initialState
  }

  handleChange = key => e => {
    this.setState({
      ...this.state,
      [key]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
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

    if(this.props.match.params.type !==this.state.type){

      if(!lodash.includes(lodash.map(Currency, getAllName),this.state.type)){
        const newType={}
        newType[this.state.type]={}
        this.props.setStore({ Currency:  lodash.assign(Currency, newType)})
      }

      delete Currency[this.props.match.params.type][this.state.id]
      if(lodash.isEmpty(Currency[this.props.match.params.type]))
      {
        delete Currency[this.props.match.params.type]
      }

    }

    const updateTransaction = {
      unit: parseFloat(this.state.unit),
      value: parseFloat(this.state.value)
    }
    Currency[this.state.type][this.state.id]=updateTransaction

    const newCurrency= Currency

    this.setState(this.initialState)

    setStore({
      ...store,
      Currency:newCurrency
    })

    history.push('/')
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
            Edit Cytocurrency
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
          Price
          <TextInput
            value={this.state.value}
            handleChange={this.handleChange('value')}
          />
        </InputBlock>
        <Footer>
            <Button icon={<FontAwesomeIcon type='edit'/>} type='primary'>
            <span> Update Cytocurrency</span>
            </Button>
        </Footer>
      </Form>
      </div>
    )
  }
}

const EditCurrencyForm = withStore(EditCurrencyFormBase)

export {
 EditCurrencyForm
}
