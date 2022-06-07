import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'
const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h3>Number Of cakes {props.numberOfCakes}</h3>
        <input value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={()=>props.buyCake(number)}>Buy Cakes</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)