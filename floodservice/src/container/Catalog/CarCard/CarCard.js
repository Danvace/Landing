import React from 'react';
import {CardBasicStyle} from "../../Home/Home.styled";
import {Button} from "antd";
import {Link} from "react-router-dom";

const CarCard = ({car}) => (
    <CardBasicStyle className="car-card">
        <img src={car.image} alt={car.name}/>
        <h2>{car.name}</h2>
        <p>Engine Volume: {car.volume}</p>
        <p>Year: {car.year}</p>
        <div className="price-and-button">
            <span className="price">${car.price}</span>
            <Link to={"/car/" + car.carId}>
                <Button>Buy Now</Button>
            </Link>
        </div>
    </CardBasicStyle>
);

export default CarCard;
