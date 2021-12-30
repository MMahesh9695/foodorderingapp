import './foodStyle.css'

export default function FoodItem({value}){
    
    return (
        <div className="food-item-container">
            <div className="food-item">
                {value.image ?  
                    <div className="img-container">
                        <img className="img-item"  alt={value.itemName} src={value.image} />
                    </div>
                    : ""
                }
                <div className="item-container">
                    <div>
                        <h2>{value.itemName}</h2>
                    </div>
                    <div>
                        <p>Rs {value.price}</p>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="button-add">Add</button>
            </div>
        </div>
    )
}