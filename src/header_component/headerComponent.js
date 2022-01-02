import './header.css'
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';

export default function Header(){
    const totalItems = useSelector( state => state.cartDetails.items);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        let total =0;
        if(totalItems){
            totalItems.forEach(item => {
                total += item.qty;
            });
        }
        setCount(total);
    },[count,totalItems])

    return (
        <div className="search-container">
            <div className="search-items">
                <select id="ddl_searchType">
                    <option value="">Select</option>
                    <option value="Name">Name</option>
                    <option value="Ratings">Ratings</option>
                    <option value="Food">Food</option>
                </select>
                <input type="text" id="txtSearch" name="search" placeholder="Enter Search Value" />
                <button id="btn_search">Search</button>
            </div>
            <div>
                <button>
                    <p>Cart</p>
                    <p>{count}</p>
                    <i className="fa fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    )
}