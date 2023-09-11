import { useEffect, useState } from "react";


const FetchData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://restcountries.com/v3.1/all`)
                .then((response) => response.json())
                .then(data => setData(data))
            console.log(data);
        }
        fetchData;
    }, [])
    return (
        <div>
            <h1>Data fetch</h1>
            { }
        </div>
    );
};

export default FetchData;