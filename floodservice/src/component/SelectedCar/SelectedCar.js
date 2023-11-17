import React, {useState} from "react";
import {getCars} from "../../container/Home/CardContainer/CardContainer";
import {Link, useLocation} from "react-router-dom";
import {SelectedCarStyled} from "./SelectedCar.styled";
import {Button} from "antd";

export const SelectedCar = () => {
    const [cars, setCars] = useState(getCars())
    const location = useLocation()
    const carId = location.pathname.split("/")[2];
    const car = cars.find(car => car.carId === Number(carId))
    return (
        <SelectedCarStyled>
            <Link to ={"/catalog"}>
                <button>Go back</button>
            </Link>
            {car ? (
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


}

export default SelectedCar