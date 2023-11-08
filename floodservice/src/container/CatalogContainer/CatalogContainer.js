import React from "react";
import {CatalogContainerStyled} from "./CatalogContainer.styled";
import CarCard from "../CarCard/CarCard";

const CatalogContainer = ({ cars }) => (
    <CatalogContainerStyled className="car-container">
        {cars.map((car, index) => (
            <CarCard key={index} car={car} />
        ))}
    </CatalogContainerStyled>
);

export default CatalogContainer;