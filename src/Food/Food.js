import { useDispatch } from 'react-redux'
import './foodStyle.css'
import {addToCart} from './../actions/cart_Actions'

export default function FoodItem({value}){
    const cartDispatch = useDispatch();

    function addItemToCart(){
        cartDispatch(addToCart(value))
    }
    
    return (
        <div className="food-item-container">
            <div className="food-item">
                {value.image ?  
                    <div className="img-container">
                        <img className="img-item"  alt={value.itemName} src={value.image} />
                    </div>
                    : ""
                }
                <div className="item-container">
                    <div>
                        <h2>{value.itemName}</h2>
                    </div>
                    <div>
                        <p>Rs {value.price}</p>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="button-add" onClick={addItemToCart}>Add</button>
            </div>
        </div>
    )
}