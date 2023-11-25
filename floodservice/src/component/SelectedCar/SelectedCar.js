import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {SelectedCarStyled} from "./SelectedCar.styled";
import {getCarById, getCars} from "../../api";
import StyledLoader from "../Loader/Loader.styled";

export const SelectedCar = () => {
    const [car, setCars] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const carId = location.pathname.split("/")[2];
    console.log(carId);

    useEffect(() => {
        getCarById(carId)
            .then((data) => {
                setCars(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching cars:", error);
                setLoading(false);
            });
    }, []);

    // const car = cars.find((car) => car.id === Number(carId));

    return (
        <SelectedCarStyled>
            <Link to={"/catalog"}>
                <button>Go back</button>
            </Link>
            {loading ? (
                <StyledLoader/>
            ) : car ? (
                <React.Fragment>
                    <h1>{car.title}</h1>
                    <img src={car.image} alt={car.title}/>
                    <span>{car.span}</span>
                    <p>Price: {car.price}</p>
                    <p>Engine Volume: {car.volume}</p>
                    <p>Year: {car.year}</p>
                </React.Fragment>
            ) : (
                <p>Car not found</p>
            )}
        </SelectedCarStyled>
    );
};

export default SelectedCar;
