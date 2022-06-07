import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

const IceCreamContainer = (props) => {
  return (
    <>
        <h2>Number of IceCream {props.numberOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy Icecream</button>
    </>

  )
}

const mapStateToProps = state => {
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)