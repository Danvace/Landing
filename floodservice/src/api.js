import axios from "axios";

const baseURL = 'http://localhost:8080';

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

export function getCarsWithFilters({price, year, engineVolume}) {
    return axios.get(`http://localhost:8080/api/cars/filter`,
        {params: {price, year, engineVolume}})
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            throw error;
        })
}

export function getCarById(id) {
    return axios.get(`http://localhost:8080/api/cars/${id}`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
                console.log(error);
                throw error;
            }
        )
}

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (formData) => {
    try {
        const response = await api.post('/api/auth/login', formData);

        const accessToken = response.data.accessToken;
        // const refreshToken = response.data.refreshToken;

        localStorage.setItem('token', accessToken);
        // localStorage.setItem('refreshToken', refreshToken);

        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            throw new Error('Invalid email or password.');
        }

        throw error;
    }
};

export const register = async (formData) => {
    try {
        const response = await api.post('/api/auth/register', formData);

        const accessToken = response.data.accessToken;

        localStorage.setItem('token', accessToken);

        return response.data;
    } catch (error) {
        throw error;
    }
};