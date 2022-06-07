import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.dispatch}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
  ? state.cake.numberOfCakes
  : state.iceCream.numberOfIceCreams
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake
  ? () => dispatch(buyCake())
  : () => dispatch(buyIceCream())
  return {
    dispatch: itemDispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer)

// If we want to pass only mapDispatchToProps
// then we put null in place of mapStateTo Props according to requirement
// export default connect(
//   null,
//   mapDispatchToProps
// )(ItemContainer)
