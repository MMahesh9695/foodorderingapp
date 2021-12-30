import { combineReducers } from "redux";
import restaurant_Reducers from './Restaurant_reducers'

export const reducer = combineReducers({
    resDetails : restaurant_Reducers
})