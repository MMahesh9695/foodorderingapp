import { actionTypes } from "../constants/actionTypes";

const initialState = {
    Items :[]
}

export default function addToCart_reducer (state = initialState,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            
            const isAvail = state.Items.find( item=> item.itemName === action.payload.itemName ? true : false);

            return {...state, Items : isAvail ? state.Items.map( item => item.itemName === action.payload.itemName ? {...item,qty : item.qty+1} : item )
                        : [...state.Items, {...action.payload, qty :1 }]
                    }
        default:
            return state;
    }
}