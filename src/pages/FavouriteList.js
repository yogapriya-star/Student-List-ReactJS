import {useContext} from "react";
import {ArrContext} from "../ArrContextProvider";
import FavouriteItem from "../FavouriteItem";

function FavouriteList(){
    const {activityArr, setActivityArr} = useContext(ArrContext)
    const favouriteItems = activityArr.filter(item => item.favourite);

    return (
        <div>
            {
                favouriteItems.map(function(item, index){
                    return <FavouriteItem id={item.id} name={item.name} favourite={item.favourite} index={index} activityArr={activityArr} setActivityArr={setActivityArr}></FavouriteItem>
                })
            }
        </div>
    )
 }

 export default FavouriteList