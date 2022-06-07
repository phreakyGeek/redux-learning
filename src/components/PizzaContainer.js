import React from 'react'
import { connect } from 'react-redux'
import { buyPizza }  from '../redux'

const PizzaContainer = (props) => {
  return (
      <div>
        <h3>Number Of Pizza {props.numberOfPizza}</h3>
        <button onClick={()=>props.buyPizza()}>Buy Pizza</button>
      </div>
  )
}

const mapStateToProps = state => {
    return {
        numberOfPizza: state.pizza.numberOfPizza
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyPizza: () => dispatch(buyPizza())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer)