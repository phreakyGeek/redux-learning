import { BUY_PIZZA } from "./pizzaTypes"

const initialState ={
    numberOfPizza: 15
}

const pizzaReducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_PIZZA: return {
            numberOfPizza: state.numberOfPizza - 1
        }
        default: return state
    }
}

export default pizzaReducer