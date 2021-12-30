import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import RestaurantList from './Restaurants/restaurantList'
import RestaurantDetails from './Restaurants/restaurantDetails';
import Header from './header_component/headerComponent'

export default function App() {
 
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/restaurantDetails' element={<RestaurantDetails/>}></Route>
        <Route exact path='/' element={ <RestaurantList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
