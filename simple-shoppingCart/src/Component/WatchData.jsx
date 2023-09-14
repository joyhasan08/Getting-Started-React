import { useEffect, useState } from "react";
import EachWatch from "./EachWatch";



const WatchData = () => {
    const [watches, setWatches] = useState([])
    useEffect(() => {
        fetch(`watch.json`)
            .then(res => res.json())
            .then(data => setWatches(data.smartwatches))
        // console.log(watches)
    }, [])
    return (
        <div>
            <div className=" w-20 h-10">
            {
                watches.map(( value )=> <EachWatch key={value.price} EachWatch={value} ></EachWatch>
                )
            }
            </div>
        </div>
    );
};

export default WatchData;