import './App.css';
import Countries from "./components/Countries/Countries.jsx";
import SearchCountry from "./components/SearchCountry/SearchCountry.jsx";

function App() {

    return (
        <>
            <div >
                <section className={"Main"}>
                    <div>
                        <img src="src/assets/world_map.png" alt="world map" className={"header-image"}/>
                    </div>
                    <Countries/>
                </section>
                <section className={"search-country"}>
                    <SearchCountry

                    />
                </section>

            </div>
        </>
    )
}

export default App
