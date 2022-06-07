import React from 'react'
import { connect } from 'react-redux'
import { buyChips } from '../redux'

const ChipsContainer = (props) => {

  return (
    <div>
        <h3>Number Of Chips: {props.numberOfChips}</h3>
        <button onClick={()=>props.buyChips()}>Buy Chips</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numberOfChips: state.chips.numberOfChips
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyChips: () => dispatch(buyChips())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChipsContainer)