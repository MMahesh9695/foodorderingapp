import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RestaurantList from './Restaurants/restaurantList'
import RestaurantDetails from './Restaurants/restaurantDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/restaurantDetails' element={<RestaurantDetails/>}></Route>
        <Route path='/' element={ <RestaurantList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
