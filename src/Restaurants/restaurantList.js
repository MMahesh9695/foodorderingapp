import './../App.css';
import RestaurantCard from './restaurantCard'
import { useEffect, useState } from 'react';
import {store} from './../Data_Store/store';

export default function RestaurantList() {
  const[restaurant, setRestaurant] = useState([]);

  useEffect( ()=>{
    setRestaurant(store);
  },[restaurant])

  return (
    <div id="restaurants" className="restaurants-container">
      { restaurant.map( restaurant=> <RestaurantCard key={restaurant.id} list={restaurant}/>)}
    </div>
  );
}
