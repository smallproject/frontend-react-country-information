import "./CountryTitle.css"

function CountryTitle({region, name}) {
    const getClassName = (region) => {
        switch(region) {
            case "Americas":
                return { color: 'green'};
            case 'Africa':
                return { color: 'blue'};
            case 'Asia':
                return { color: 'red'};
            case 'Europe':
                return { color: 'yellow'};
            case 'Oceania':
                return { color: 'purple'};

            default :
                return { color: 'lightgray'};
        }
    }

    return(
        <>
            <p style={getClassName(region)}>
                {name}
            </p>
        </>
    )
}


export default CountryTitle;