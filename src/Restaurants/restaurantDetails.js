import { useSelector } from "react-redux"
import React from "react";
import FoodList from './../Food/FoodList'
import './restaurantStyle.css'
import Restaurant from './restaurant'

export const detailContext = React.createContext();

export default function RestaurantDetails(){
    const list = useSelector ((state)=> state.resDetails.list);

    const foodListStyle ={
        paddingTop :"1rem",
        margin: "auto",
        width: "50%"
    }

    return(
        <detailContext.Provider value={list}>
            <div className="restaurant-container">
                <div style={{marginBottom: "2rem"}}>
                    <Restaurant/>
                </div>
                <hr/>
                <div style={foodListStyle}>
                    <FoodList/>
                </div>
            </div>
        </detailContext.Provider>
    )
}