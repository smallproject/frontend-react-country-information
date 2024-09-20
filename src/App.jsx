import './App.css';
import Countries from "./components/Countries/Countries.jsx";

function App() {

    return (
        <>
            <div className="Main">
                <div>
                    <img src="src/assets/world_map.png" alt="world map" className={"header-image"}/>
                </div>
                <Countries />
            </div>
        </>
    )
}

export default App
