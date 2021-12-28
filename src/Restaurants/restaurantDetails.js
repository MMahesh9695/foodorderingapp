import { useSelector } from "react-redux"

export default function RestaurantDetails(){
    const list = useSelector ((state)=> state.list);
    console.log(list);
    return(
        <>
            <div>Hi</div>
            
        </>
    )
}