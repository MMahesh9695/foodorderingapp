import { actionTypes } from "../constants/actionTypes";

export const addToCart = (foodItem) =>{
    return {
        type : actionTypes.ADD_TO_CART,
        payload : foodItem
    }
}