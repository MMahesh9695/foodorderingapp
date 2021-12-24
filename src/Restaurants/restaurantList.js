import './../App.css';
import Restaurants from './restaurants'
import { useEffect, useState } from 'react';
import {store} from './../Data_Store/store';

export default function RestaurantList() {
  const[restaurant, setRestaurant] = useState([]);

  useEffect( ()=>{
    setRestaurant(store);
  },[restaurant])

  return (
    <div id="restaurants" className="restaurants-container">
      { restaurant.map( restaurant=> <Restaurants list={restaurant}/>)}
    </div>
  );
}
