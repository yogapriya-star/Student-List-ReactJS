import {useContext} from "react";
import {ArrContext} from "../ArrContextProvider";
import TodoItem from "../TodoItem"

function StudentList(){
    const {activityArr} = useContext(ArrContext)

    return (
        <div>
            {
                activityArr.map(function(item, index){
                    return <TodoItem id={item.id} name={item.name} favourite={item.favourite} index={index}></TodoItem>
                })
            }
        </div>
    )
}

export default StudentList