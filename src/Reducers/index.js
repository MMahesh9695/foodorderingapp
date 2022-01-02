import { combineReducers } from "redux";
import restaurant_Reducers from './Restaurant_reducers';
import addToCart_reducer from './Cart_reducer';

export const reducer = combineReducers({
    resDetails : restaurant_Reducers,
    cartDetails : addToCart_reducer
})