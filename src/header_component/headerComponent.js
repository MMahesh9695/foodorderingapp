import './header.css'
import Cart from './../Cart/cart'

export default function Header(){
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
                <Cart />
            </div>
        </div>
    )
}