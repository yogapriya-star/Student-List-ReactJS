import { useState, useContext } from "react";
import { ArrContext } from "./ArrContextProvider";

function TodoItem(props) {
    const { activityArr, setActivityArr } = useContext(ArrContext);
    const [isDeleting, setIsDeleting] = useState(false);

    function handleDelete(deleteid) {
        const updatedArr = activityArr.map(item => {
            if (item.id === deleteid) {
                setIsDeleting(true);
                return { ...item, favourite: true };
            }
            return item;
        });
        setActivityArr(updatedArr);
    }

    // Check if the current item is a favorite
    const isFavorite = activityArr.find(item => item.id === props.id && item.favourite);

    return (
        <div className="flex justify-around p-2">
            <p>{props.id}.{props.name}</p>
            <button
                className={`rounded-md bg-black text-white ${isDeleting || isFavorite ? 'disabled' : ''}`}
                onClick={() => handleDelete(props.id)}
                disabled={isDeleting || isFavorite}
            >
                Delete
            </button>
        </div>
    );
}

export default TodoItem;