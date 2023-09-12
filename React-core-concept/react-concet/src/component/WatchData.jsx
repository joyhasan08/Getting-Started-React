
import { useEffect, useState } from "react";
import EachWatchDiv from "./EachWatchDiv";


const WatchData = () => {
    const [Watches, setWatches]= useState([])
    useEffect(()=>{
        fetch(`watch.json`)
        .then(res => res.json())
        .then(data => setWatches(data.smartwatches))
        console.log(Watches);
        
    },[])
    return (
        <div>
            <h2>Total watch : {Watches.length}</h2>
            <div className="  mx-auto w-fit">
                {
                    Watches.map((velue)=><EachWatchDiv key={Watches.name} singleWatch={velue}></EachWatchDiv>)
                }
            </div>
        </div>
    );
};

export default WatchData;