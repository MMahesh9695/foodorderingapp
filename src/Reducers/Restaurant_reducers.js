import {actionTypes} from './../constants/actionTypes'

const initialState = {
    list : {}
}

export default function restaurant_Reducers(state = initialState, action){

    switch(action.type){
        case  actionTypes.SET_RESTAURANTS_LIST:
            return {...state,list : action.payload};
        case  actionTypes.GET_RESTAURANTS_LIST:
            return {...state,list : action.payload};
        default :
            return state;
    }

}