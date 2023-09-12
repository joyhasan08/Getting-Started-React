import { useEffect, useState } from "react";
import EachCountry from "./EachCountry";


const CountriesData = () => {
    const [Country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data));
        console.log(Country);

    }, [])

    return (
        <div>
            <h4 className="text-xl font-medium  my-4">Total Countries: <span className=" text-cyan-400"> {Country.length}</span> </h4>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    Country.map(CountryData => <EachCountry key={Country.cca3} Conutry={CountryData} ></EachCountry>)
                }

            </div>
        </div>
    );
};

export default CountriesData;