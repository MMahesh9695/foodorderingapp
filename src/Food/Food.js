import './foodStyle.css'

export default function FoodItem({value}){
    
    return (
        <>
            <p>{value}</p>
            <button>Add</button>
        </>
    )
}