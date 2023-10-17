const BASE_URL = 'http://localhost:8080';
const RESOURCE_URL = `${BASE_URL}/flood`;

const baseRequest = async ({urlPath = "", method = 'GET', body = null}) => {
    try {
        const reqArg = {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
        if (body) {
            reqArg.body = JSON.stringify(body);
        }

        const response = await fetch(`${RESOURCE_URL}${urlPath}`, reqArg);

        if (!response.ok) {
            // Handle non-successful response (e.g., status code other than 200)
            throw new Error(`Request failed with status: ${response.status}`);
        }

        if (method === "DELETE") {
            console.log("Deleted");
            return;
        }
        return await response.json();
    } catch (error) {
        // Handle errors here
        alert("Error: " + error);
        throw error;
    }
}

export const postFlood = async ({
                                    pointOfMeasurement = "London",
                                    levelOfWater = 0,
                                    gps = "0.0.0.0",
                                    dateOfMeasurement = ""
                                }) => {
    const body1 = {
        pointOfMeasurement,
        levelOfWater,
        gps,
        dateOfMeasurement
    }

    return baseRequest({method: "POST", body: body1});
}

export const getAllFloods = async () => {
    return baseRequest({method: "GET"});
}

export const getFloodById = async (id = -1) => {
    return baseRequest({urlPath: `/${id}`, method: "GET"})
}

export const putFloodById = async (id,{

                                       pointOfMeasurement = "London",
                                       levelOfWater = 0,
                                       gps = "0.0.0.0",
                                       dateOfMeasurement = ""
                                   }) => {
    const body1 = {
        pointOfMeasurement,
        levelOfWater,
        gps,
        dateOfMeasurement
    }
    return baseRequest({urlPath: `/${id}`, method: "PUT", body: body1})
}
export const deleteFloodById = async (id) => {
    return baseRequest(
        {urlPath: `/${id}`, method: "DELETE", body: null})
}