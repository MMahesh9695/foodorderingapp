import './App.css';
import Restaurants from './restaurants'
import { useEffect, useState } from 'react';
import {store} from './store';

export default function App() {
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
