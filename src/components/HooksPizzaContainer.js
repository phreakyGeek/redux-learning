import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyPizza } from '../redux'

const HooksPizzaContainer = () => {
    const numberOfPizza = useSelector(state=>state.pizza.numberOfPizza)
    const dispatch = useDispatch()
  return (
      <div>
        <h3>Number Of Pizza: {numberOfPizza}</h3>
        <button onClick={()=>dispatch(buyPizza())}>Buy Pizza</button>
      </div>
  )
}

export default HooksPizzaContainer