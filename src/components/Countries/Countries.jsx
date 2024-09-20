import axios from "axios";
import {useState} from "react";
import "./Countries.css"

function Countries() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countries, setCountries] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false);

    let count = 1;
    async function fetchCountryData() {
        setIsLoading(true);
        setError("");
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/all`);
            setCountries(response.data.sort((a, b) => a.population - b.population));
            console.log(response.data);
        } catch (error) {
            setError(error.message);
        }

    }

    return (
        <>
            <div className="wrapper">
                <h1>World Regions</h1>
                <button onClick={fetchCountryData}>fetch data</button>

                <div className={"flags-container"}>
                {/*<ul>*/}
                    <br/>
                    {
                        countries.map((country) => (
                            // <li key={country.data.id}>{country.data.name}</li>

                            <div id={country} className="country-detail">
                                {/*<p>{count++}</p>*/}
                                <p>{country.name.common}</p>
                                <img src={country.flags.png} alt="flags images" className={"flags-images"}/>
                                <p>Has a population of {country.population} people</p>
                            </div>

                        ))
                    }
                {/*</ul>*/}
                </div>
            </div>
        </>
    )

}

export default Countries;