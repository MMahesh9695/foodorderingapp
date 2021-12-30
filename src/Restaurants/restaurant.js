import { useContext } from 'react'
import {detailContext} from './../Restaurants/restaurantDetails'
import './restaurantStyle.css'

export default function Restaurant(){
    const list = useContext(detailContext);

    return (
        <div className="details-container">
            <div>
                <img alt={list.name} src={list.Image} />
            </div>
            <div className="details-name-contanier">
                <div className="">
                    <div><h2>{list.name}</h2></div>
                    <div>{list.tags.reduce((prev,curr)=> prev+', '+curr)}</div>
                    <div>{list.location}</div>
                </div>
                <div className="details-review">
                    <div>{list.ratings}</div>    
                    <i className="fa fa-star"></i>
                </div>
            </div>
        </div>
    )
}