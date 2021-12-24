import './../App.css';

export default function Restaurants({list}){

    return(
        <>
            <div className="restaurants">
                <a href='foo'>
                    <div className="restaurants-image-container">
                        <div>
                            <img className="restaurants-image" alt="restaurant" src={list.Image} loading="lazy" />
                        </div>
                        <div className="restaurants-offer-container">
                            <div style={{textAlign : "right"}}>75% OFF</div>
                        </div>
                    </div>
                    <div>
                        <div className="restaurants-name-container">
                            <h1>{list.name}</h1>
                            <div id="ratings" className="restaurants-ratings">
                                <div>{list.ratings}</div>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="restaurants-special-container">
                            <div className="special_items">
                                {
                                    list.tags.reduce((prev,curr)=>{return prev + ', '+curr})
                                }
                            </div>
                        </div>
                        <div className="restaurants-timing-container">
                            <div id="timings">
                                {list.openTime}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}