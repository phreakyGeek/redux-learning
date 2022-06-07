import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cake/cakeReducer";
import pizzaReducer from "./pizza/pizzaReducer";
import chipsReducer from "./chips/chipsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pizza: pizzaReducer,
    chips: chipsReducer,
    user: userReducer
})

export default rootReducer
