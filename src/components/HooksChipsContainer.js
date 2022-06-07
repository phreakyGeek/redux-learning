import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyChips } from '../redux'

const HooksChipsContainer = () => {
    const numberOfChips = useSelector(state=>state.chips.numberOfChips)
    const dispatch = useDispatch()
  return (
    <div>
        <h3>Number Of Chips {numberOfChips}</h3>
        <button onClick={()=> dispatch(buyChips())}>Buy Chips</button>
    </div>
  )
}

export default HooksChipsContainer