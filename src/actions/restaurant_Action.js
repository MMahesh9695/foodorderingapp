import { actionTypes } from "../constants/actionTypes";

export const setRestaurantDetails = (list)=>{
    console.log(list);
    return {
        type : actionTypes.SET_RESTAURANTS_LIST,
        payload : list
    }
}

export const getRestaurantDetails = (list)=>{
    return {
        type : actionTypes.GET_RESTAURANTS_LIST,
        payload : list
    }
}