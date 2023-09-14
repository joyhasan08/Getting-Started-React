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
            {
                watches.map(( value )=> <EachWatch key={value.price} EachWatch={value} ></EachWatch>
                )
            }
        </div>
    );
};

export default WatchData;