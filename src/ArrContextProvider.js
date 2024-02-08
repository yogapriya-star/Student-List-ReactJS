import {useState, createContext} from "react";

const ArrContext = createContext()

function ArrContextProvider(data){
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            name:"Bharath",
            favourite:false
        },
        {
            id:2,
            name:"Praveen",
            favourite:false
        },
        {
            id:3,
            name:"Kumar",
            favourite:false
        },
        {
            id:4,
            name:"Ramya",
            favourite:false
        },
        {
            id:5,
            name:"Monica",
            favourite:false
        }

    ])
    return(
        <ArrContext.Provider value={{activityArr, setActivityArr}}>
            {data.children}
        </ArrContext.Provider>
    )
}
export default ArrContextProvider
export {ArrContext}