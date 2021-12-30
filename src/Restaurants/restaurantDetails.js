import { useSelector } from "react-redux"
import React from "react";
import FoodList from './../Food/FoodList'
import './restaurantStyle.css'
import Restaurant from './restaurant'

export const detailContext = React.createContext();

export default function RestaurantDetails(){
    const list = useSelector ((state)=> state.resDetails.list);

    return(
        <detailContext.Provider value={list}>
            <div className="restaurant-container">
                <div>
                    <Restaurant/>
                </div>
                <div>
                    <FoodList/>
                </div>
            </div>
        </detailContext.Provider>
    )
}