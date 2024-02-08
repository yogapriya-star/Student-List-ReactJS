import {useContext} from "react";
import {ArrContext} from "./ArrContextProvider";

function FavouriteItem(props){
    const {activityArr, setActivityArr} = useContext(ArrContext)

    function handleRemove(deleteid){
        var temparr = activityArr.map(function (item){
            if(item.id === deleteid){
                return { ...item, favourite: false };
            } else {
                return item;
            }
        });
        setActivityArr(temparr);
    }
    return(
        <div className="flex justify-around p-2">
            <p>{props.id}.</p>
            <p>{props.name}</p>
            <button className="rounded-md bg-red-600 text-white" onClick={() => handleRemove(props.id)}>Remove</button>
        </div>
    )
}
export default FavouriteItem