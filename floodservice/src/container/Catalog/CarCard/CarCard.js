import React from 'react';
import {CardBasicStyle} from "../../Home/Home.styled";
import {Button} from "antd";

const CarCard = ({ car }) => (
    <CardBasicStyle className="car-card">
        <img src={car.image} alt={car.name} />
        <h2>{car.name}</h2>
        <p>Engine Volume: {car.engineVolume}</p>
        <p>Year: {car.year}</p>
        <div className="price-and-button">
            <span className="price">${car.price}</span>
            <Button>Buy Now</Button>
        </div>
    </CardBasicStyle>
);

export default CarCard;
