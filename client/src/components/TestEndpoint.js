import React, {Fragment} from "react";

const TestEndpoint = () => {

    const fetchEndpoint = async() => {
        try {
            const response = await fetch("https://data.cityofnewyork.us/resource/ci36-d7ea.json");
            const jsonData = await response.json()

            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>
            <button onClick={() => fetchEndpoint()}>Test</button>
        </Fragment>
    )


}

export default TestEndpoint