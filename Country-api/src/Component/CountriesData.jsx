import { useEffect, useState } from "react";
import EachCountry from "./EachCountry";
import Bookmark from "./Bookmark";


const CountriesData = () => {
    const [Country, setCountry] = useState([]);
    const [bookmark, setBookmark] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data));
        console.log(Country);

    }, [])

    const handelBookmark = (country) => {
        console.log(`booked mark`);
        console.log(country);
        const newBookmarked = [...bookmark, country]
        setBookmark(newBookmarked)

    }

    return (
        <div className=" mt-4">
            <section className=" flex gap-2">
            <div className=" w-1/2">
                <div className=" ">
                    <h2 className=" bg-teal-800 text-xl font-semibold p-2">Visited Places</h2>
                    <ul className=" p-2">
                        {
                            bookmark.map((country) => <li key={country.cca3} >  {country.name.common} </li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="w-1/2">
                <Bookmark key={bookmark.cca3} bookmark={bookmark}  ></Bookmark>
            </div>
            </section>
            <h4 className="text-xl font-medium  my-4">Total Countries: <span className=" text-cyan-400"> {Country.length}</span> </h4>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    Country.map(CountryData => <EachCountry handelBookmark={handelBookmark} key={Country.cca3} Conutry={CountryData} ></EachCountry>)
                }

            </div>
        </div>
    );
};

export default CountriesData;