import "./SearchCountry.css"
import {useEffect, useState} from "react";
import axios from "axios";
// import earthImage from "src/assets/earth-rotation-around-its-axis.gif";


function SearchCountry() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    let [inputValue, setInputValue] = useState("");
    const [countries, setCountries] = useState(null);
    const [filteredCountry, setFilteredCountry] = useState(null);

    useEffect(() => {
        async function fetchCountries () {
            setIsLoading(true); // Indicates the loading state
            setError(""); // Resets the error state

            try {
                const response = await axios.get(`https://restcountries.com/v3.1/all`);
                setCountries(response.data);

            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchCountries();
    }, []);// Empty dependency array ensures this runs only once, on mount


    function filterCountry() {

        if (!inputValue) {
            setFilteredCountry(null);
            return;
        }

        const filtered = countries.find(country => country.name.common === inputValue);
        if (!filtered) {
            setFilteredCountry(null);
            return;
        }
        try {
            setFilteredCountry(filtered);
        } catch (error) {
            setError(error.message);
        }
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter')
            filterCountry();
    }

    return (
        <>

            <h1>Search country information</h1>
            <img src={"src/assets/earth-rotation-around-its-axis.gif"} alt="spinning globe image"/>
            <div>
                <input
                    type="text"
                    id={"input-text"}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyPress}
                />

                {/*/!* Only show the button if countries are loaded *!/*/}
                {!isLoading && countries && (
                <button type={"button"} onClick={() => filterCountry()} className={"search-button"}>Zoek</button>
                )}

                { error && <p>Error: { error }</p>}
                { isLoading && <p>Loading...</p>}

                { filteredCountry ? (

                            <div className={"filteredCountry-container"}>
                                {/*<p>There are {filteredCountry} datas collected</p>*/}
                                <div>
                                    <img src={filteredCountry?.flags?.png}
                                         alt={"Flag of the" + filteredCountry?.name?.common}
                                         className={"flags-images"}/>
                                    <h1>{filteredCountry?.name?.common}</h1>
                                </div>
                                <p>is situated in {filteredCountry?.subregion} and the capital is {filteredCountry?.capital}</p>
                                <p>it has a population of {filteredCountry?.population} people and it borders with {filteredCountry?.borders?.length} neighboring countries</p>

                            </div>
                            ) : (
                            <div>
                                <p>No Country found matching the search term</p>
                                <p>{inputValue} bestaat niet. Probeer het opnieuw</p>
                            </div> )

                }
            </div>


            <p></p>

        </>
    )

}

export default SearchCountry;