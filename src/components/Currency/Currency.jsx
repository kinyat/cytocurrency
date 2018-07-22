import React from 'react'
import lodash from 'lodash'
import { Link } from 'react-router-dom'
import { SmartList, ListColumn, Button, FontAwesomeIcon, Heading} from '@intellihr/ui-components'
import { withStore } from '../Store'
import { history } from '../Router'
import { Header, ListBlock, Footer } from './style'

const cryptoData = {
    BTC: {
    },
    ETC: {
    }
  }

  cryptoData["BTC"][lodash.uniqueId()]= {
    unit: 0.1,
    value: 1250.5
  }

  cryptoData["BTC"][lodash.uniqueId()]= {
    unit: 0.2,
    value: 130.7
  }

  cryptoData["ETC"][lodash.uniqueId()]= {
    unit: 1.423,
    value: 642
  }

  cryptoData["ETC"][lodash.uniqueId()]= {
    unit: 1.982,
    value: 827.28
  }

class CurrencyBase extends React.PureComponent {

  totalSumPrice(){
    const {
          Currency
        } = this.props.store
    
    const getTotalValue= data=>{
      return lodash.reduce(data,function(currentTotalValue, currentItem) {
        return (currentTotalValue*100 + (currentItem.value*100))/100
      }, 0)
    }
    
    return(
      lodash.isEmpty(Currency)?
      0:
      lodash.reduce((lodash.map(Currency, getTotalValue)), function(totalValue, currentValue) {
        return (totalValue*100 + (currentValue*100))/100
      }, 0)
    ) 
  }

  getTransaction = (name, transactionId) => {
    const {
      Currency
    } = this.props.store
    return Currency[name][transactionId]
  }

  onDelete = (key, id) => () => {
    const {
      Currency
    } = this.props.store

    delete Currency[key][id]
    if(lodash.isEmpty(Currency[key]))
      {
        delete Currency[key]
      }
    const newCurrency = lodash.merge({},Currency)
    this.props.setStore({ Currency: newCurrency})
  }

  goEdit =(key, id)=>()=>{
    history.push(`/currency/edit/${key}/${id}`)
  }

  render() {
  
    const {
      Currency
    } = this.props.store
    console.log(Currency)
    const totalSumPrice =this.totalSumPrice()
    
    const getOgranisedData= (data, name) =>{
      return lodash.reduce(data, function(result, data, key) {
      const object={
        id:key,
        type:name,
        unit: data.unit,
        value: data.value
      }
      result.push(object)
        return result;
      }, [])
    }
    
    const getAllTransactions = (name) => {
      return Currency[name]
    }

    const getAllName = (data, key)=>{
      return key
    }

    const getAllList = (name) =>{
      const allData = getAllTransactions(name)
      const totalUnit = lodash.reduce(allData,function(currentTotalUnit, currentItem) {
          return (currentTotalUnit*1000 + (currentItem.unit*1000))/1000
        }, 0)
    
      const totalValue = lodash.reduce(allData,function(currentTotalValue, currentItem) {
        return (currentTotalValue*1000 + (currentItem.value*1000))/1000
      }, 0)

      const smartData = getOgranisedData(allData, name)
      return(
        <ListBlock key={name}>
          <Heading
            type='page'
          >
            {name}
          </Heading>
          <Heading
            type='section'
          >
            <span>Purchased Unit: {totalUnit}</span> 
            <span> Total Payment: ${totalValue} AUD </span>
          </Heading>
           <SmartList
            data={smartData}
          >
            <ListColumn
              size={{
                md: 4,
                lg: 4
              }}
              header='UNIT'
              cell={row => row.unit}
            />
            <ListColumn
              size={{
                md: 4,
                lg: 4
              }}
              header='VALUE'
              cell={row => <div>${row.value} AUD</div>}
            />
            <ListColumn
              size={{
                md: 4,
                lg: 4
              }}
              header='ACTION'
              cell={row =>
                <div>
                  <Button icon={<FontAwesomeIcon type='edit' />} type='warning' onClick={this.goEdit(row.type,row.id)}>
                    edit
                  </Button>
                  <Button icon={<FontAwesomeIcon type='times' />} type='alert' onClick={this.onDelete(row.type, row.id)}>
                    delete
                  </Button>
                </div>}
            />
          </SmartList>
        </ListBlock>

      )
    }
    
    return (
      <React.Fragment>
        <Header>
          <Link
            to='/hello'
          >
          <Button  icon={<FontAwesomeIcon type='angle-left' />} type='light-borderless'>
              <span> To Hello</span>
              </Button>
          </Link>

          <Heading
            type='section'
          >
            Total Sum: ${totalSumPrice} AUD
          </Heading>
        </Header>
        
        {lodash.map(lodash.map(Currency, getAllName), getAllList)}

        <Footer>
          <Link
            to='/currency/create'
          >
            <Button icon={<FontAwesomeIcon type='plus'/>} type='primary'>
             <span> Create New CryptoCurrency</span>
            </Button>
          </Link>
        </Footer>

        
      </React.Fragment>
    )
  }
}

const Currency = withStore(CurrencyBase)

export {
  cryptoData,
  Currency
}
