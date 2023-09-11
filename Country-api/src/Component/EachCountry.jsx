
const EachCountry = ({ Conutry }) => {
    console.log(Conutry);
    const { area, name, flags, capital, latlng, coatOfArms,cca3
    } = Conutry;

    return (
        <div className=" p-4 m-4 space-y-4 bg-cyan-900 rounded-lg">
            <img className=" rounded-full" src={flags.png} alt="" />
            <h2 className=" text-xl md:text-3xl font-bold">{name.common} </h2>
            <h2>Capital : {capital}</h2>
            <h2>Are Of country : {area}</h2>
            {/* <h2>Language : {coatOfArms.png}</h2> */}
            {/* <img src={coatOfArms.png} alt="" /> */}
            <h2>Code : {cca3}</h2>
            <h2>latlng : {latlng}</h2>
            <h2>latlng2 : {latlng[`1`]}</h2>
        </div>
    );
};
export default EachCountry;