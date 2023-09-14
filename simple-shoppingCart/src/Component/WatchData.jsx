import { useEffect, useState } from "react";
import DisplayWatche from "./DisplayWatche";


const WatchData = () => {
    const [watches, setWatches] = useState([])
    useEffect(() => {
        fetch(`watch.json`)
            .then(res => res.json())
            .then(data => setWatches(data.smartwatches))
        console.log(watches)
        console.log(watches);
    }, [])
    return (
        <div>
            {
                watches.map(( watches )=>{
                    <DisplayWatche WatchData={watches} ></DisplayWatche>
                })
            }
        </div>
    );
};

export default WatchData;