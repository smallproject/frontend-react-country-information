import "./CountryTile-Detail.css"

function CountryTileDetail({countryName}) {
    return (
        <>
            <div>
                <h1>{countryName}</h1>
                <p>{countryName}</p>
            </div>
        </>
    )
}

export default CountryTileDetail;