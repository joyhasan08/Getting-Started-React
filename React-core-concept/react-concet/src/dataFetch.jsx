import { useEffect, useState } from "react";

export default function DataLoad (){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(setData());
    },[data])
    return(
        <div>
            Hi
        </div>
    )

    
}