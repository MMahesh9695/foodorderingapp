import {detailContext} from './../Restaurants/restaurantDetails'
import { useContext } from 'react'
import FoodItem from './Food'

export default function FoodList(){
    const list = useContext(detailContext);
    const foodItemList = list.food;
    
    return (
        <>
            {
                foodItemList.map( item => <FoodItem key={item} value={item} />)
            }
        </>
    )
}