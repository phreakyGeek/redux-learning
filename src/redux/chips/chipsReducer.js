import { BUY_CHIPS } from "./chipsTypes"

const initialState = {
    numberOfChips: 25
}

const chipsReducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CHIPS: return {
            numberOfChips: state.numberOfChips - 1
        }
        default: return state
    }
}

export default chipsReducer