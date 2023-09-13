import { useState } from "react";

const EachCountry = ({ Conutry , handelBookmark  }) => {
    // console.log(Conutry);
    const { area, name, flags, capital, latlng, cca3
    } = Conutry;
    const [addToVisitList, setaddToVisitList] = useState(false);
    const handelClickAdd = () => {
        setaddToVisitList(!addToVisitList);
    }


    return (
        <div className={`p-4 m-4 space-y-4 $ bg-cyan-900 ${addToVisitList&&`  bg-teal-800`} rounded-lg`}>
            <img className=" rounded-full" src={flags.png} alt="" />
            <h2 className=" text-xl md:text-3xl font-bold">{name.common} </h2>
            <h2>Capital : {capital}</h2>
            <h2>Are Of country : {area}</h2>
            {/* <h2>Language : {coatOfArms.png}</h2> */}
            {/* <img src={coatOfArms.png} alt="" /> */}
            <h2>Code : {cca3}</h2>
            <h2>latlng : {latlng} </h2> 
            <h2>latlng2 : {latlng[`1`]}</h2>
            <h2 className={addToVisitList && ` bg-yellow-800 p-2 rounded-lg w-fit`} >{addToVisitList && `BookedMark`}</h2>
            <div className=" flex gap-3">
                <button onClick={()=>handelClickAdd()} >{addToVisitList ? `Remove Visit List` : `Add To Visit List `}</button>
                <button onClick={()=>handelBookmark(Conutry)}>Visited</button>
            </div>
        </div>
    );
};
export default EachCountry;