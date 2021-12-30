import {detailContext} from './../Restaurants/restaurantDetails'
import { useContext, useEffect, useState } from 'react'
import FoodItem from './Food'
import { foodStore } from '../Data_Store/FoodStore';

export default function FoodList(){
    const list = useContext(detailContext);
    const restaurantId =list.id;
    const [foodItemList,setFoodItemList] = useState({food:[]});
    
    useEffect(()=>{
        setFoodItemList(foodStore.find( item=> item.id === restaurantId ));
    
    },[foodItemList,restaurantId])
    
    return (
        <>
            {
                foodItemList ? foodItemList.food.map( item => <FoodItem key={item} value={item} />) : ""
            }
        </>
    )
}