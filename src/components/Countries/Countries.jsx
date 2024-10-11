import axios from "axios";
import {useState} from "react";
import "./Countries.css"

import CountryTitle from "./CountryTitle.jsx";

function Countries() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countries, setCountries] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    async function fetchCountryData() {
        setIsLoading(true); // Indicates the loading state
        setError(""); // Resets the error state
        try {
            // Fetch the list of countries from the API
            const response = await axios.get(`https://restcountries.com/v3.1/all`);

            // Store the list of countries fetched from the API
            setCountries(response.data.sort((a, b) => a.population - b.population));
            setIsHidden(true);

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <>
            <div className="wrapper">
                <h1>World Regions</h1>
                <button onClick={fetchCountryData} hidden={isHidden}>fetch data</button>


                { error && <p>Error: { error }</p>}
                { isLoading && <p>Loading...</p>}

                <div className={"flags-container"}>
                    {
                        countries.map((country) => (
                            <div key={country.id+country.name} className="country-detail">
                                 <CountryTitle
                                    region={country.region}
                                    name={country.name.common}
                                />
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