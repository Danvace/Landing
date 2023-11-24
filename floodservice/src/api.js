import axios from "axios";

export function getCars() {
    // Return the promise returned by axios.get
    return axios.get("http://localhost:8080/api/cars")
        .then(function (response) {
            // Log the data for debugging
            // console.log(response.data);

            // Return the data to the next `then` in the chain
            return response.data;
        })
        .catch(function (error) {
            // Handle errors
            console.log(error);
            // Re-throw the error to propagate it to the next `catch` in the chain
            throw error;
        });
}

export function getCarsWithFilters({price,year,engineVolume}) {
    return axios.get(`http://localhost:8080/api/cars/${price}/${year}/${engineVolume}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            throw error;
        })
}